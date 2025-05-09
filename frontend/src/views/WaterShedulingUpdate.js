import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/WaterShedulingInsert.module.css";
import { editWateringSchedule, getIdtoWateringSchedule } from "../services/WateringScheduleApi";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from '../Components/NavBar';

export default function EmergencyApp() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  // Initialize states with appropriate types
  const [plantname, setPlantname] = useState("");  // string
  const [frequency, setFrequency] = useState("");  // string
  const [wateringtime, setWateringtime] = useState("");  // string
  const [status, setStatus] = useState(false);  // boolean

  useEffect(() => {
    if (id) {
      getIdtoWateringSchedule(id).then((data) => {
        if (data?.waterSchedules) {
          setPlantname(data.waterSchedules.plantname || "");
          setFrequency(data.waterSchedules.frequency || "");
          setWateringtime(data.waterSchedules.wateringtime || "");
          setStatus(data.waterSchedules.status || false);
        }
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      plantname,
      frequency,
      wateringtime,
      status,
    };

    if (id) {
      const success = await editWateringSchedule(id, updatedData);
      if (success) {
        alert("Watering schedule updated successfully!");
        navigate("/watering-schedule"); // Redirect after update
      } else {
        alert("Failed to update schedule. Try again.");
      }
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-start", // Align to the left
    height: "50vh", // Full viewport height
  };

  const formContainerStyle = {
    width: "25%", 
    padding: "20px", 
    backgroundColor: "#FFFFFF",
    border: "10px solid #ccc",
    position: "absolute", 
    left: "10%",
    top: "50%",
    transform: "translateY(-60%)", // Adjust vertical position
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50", // Green background
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const submitButtonHoverStyle = {
    backgroundColor: "#45a049", 
  };

  return (
    <div
      style={{
        backgroundImage: "url('../assets/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavBar/>
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <form className="reg-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ color: "black", marginBottom: "10px" }}>Plant Name</label>
              <select
                className="form-control"
                name="plantname"
                value={plantname}
                style={{ marginBottom: "10px" }}
                onChange={(event) => setPlantname(event.target.value)}
                required
              >
                <option value="">Select a plant</option>
                <option value="Snake Plant">Snake Plant</option>
                <option value="Aloe Vera">Aloe Vera</option>
                <option value="Basil">Basil</option>
              </select>

              <label style={{ color: "black", marginBottom: "10px" }}>Frequency</label>
              <select
                className="form-control"
                name="frequency"
                value={frequency}
                onChange={(event) => setFrequency(event.target.value)}
                required
                style={{ marginBottom: "10px" }}
              >
                <option value="">Select a frequency</option>
                <option value="Daily">Daily</option>
                <option value="Every 2 Days">Every 2 Days</option>
                <option value="Weekly">Weekly</option>
              </select>

              <label style={{ color: "black", marginBottom: "10px" }}>Watering Time</label>
              <input
                type="time"
                className="form-control"
                name="wateringtime"
                value={wateringtime}
                onChange={(event) => setWateringtime(event.target.value)}
                required
                style={{ marginBottom: "10px" }}
              />

              <label style={{ color: "black", marginBottom: "10px" }}>Adjust for weather</label>
              <input
                type="checkbox"
                checked={status}
                onChange={(event) => setStatus(event.target.checked)}
                style={{ marginBottom: "10px" }}
              />
            </div>

            <center>
              <input
                type="submit"
                value="Update schedule"
                style={submitButtonStyle}
              />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
