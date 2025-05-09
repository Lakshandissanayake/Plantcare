import React, { useState } from "react";
import axios from "axios";
import "../styles/WaterShedulingInsert.module.css";
import { useParams } from "react-router-dom";
import NavBar from '../Components/NavBar';

export default function WaterShedulingInsert() {
  const [plantname, setPlantname] = useState("");
  const [frequency, setFrequency] = useState("");
  const [wateringtime, setWateringtime] = useState("");
  const [status, setStatus] = useState(false);
  const { pid } = useParams(); // Get plant ID from URL

  const sendData = async (e) => {
    e.preventDefault();

    const schedule = {
      userid: "001", // You can update this with actual user data
      plantname,
      frequency,
      wateringtime,
      status,
    };

    try {
      await axios.post(`http://localhost:4000/water/${pid}`, schedule);
      alert("Water schedule successfully added");
    } catch (err) {
      alert("Error: Water schedule could not be added");
      console.error(err);
    }
  };

  // Styling
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-start",

  };

  const formContainerStyle = {
    width: "25%",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    border: "10px solid #ccc",
    position: "absolute",
    left: "35%",
    top: "50%",
    transform: "translateY(-60%)",
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={{
     
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
          <form className="reg-form" onSubmit={sendData}>
            <div className="form-group">
              <label style={{ color: "black", marginBottom: "10px" }}>
                Plant Name
              </label>
              <select
                className="form-control"
                name="plantname"
                value={plantname}
                onChange={(e) => setPlantname(e.target.value)}
                required
                style={{ marginBottom: "10px" }}
              >
                <option value="">Select a plant</option>
                <option value="Snake Plant">Snake Plant</option>
                <option value="Aloe Vera">Aloe Vera</option>
                <option value="Basil">Basil</option>
              </select>

              <label style={{ color: "black", marginBottom: "10px" }}>
                Frequency
              </label>
              <select
                className="form-control"
                name="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
                style={{ marginBottom: "10px" }}
              >
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Every 2 Days">Every 2 Days</option>
                <option value="Weekly">Weekly</option>
              </select>

              <label style={{ color: "black", marginBottom: "10px" }}>
                Watering Time
              </label>
              <input
                type="time"
                className="form-control"
                name="wateringtime"
                value={wateringtime}
                onChange={(e) => setWateringtime(e.target.value)}
                required
                style={{ marginBottom: "10px" }}
              />

              <label style={{ color: "black", marginBottom: "10px" }}>
                Adjust for weather
              </label>
              <input
                type="checkbox"
                style={{ marginBottom: "10px" }}
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
            </div>

            <center>
              <input
                type="submit"
                value="Save schedule"
                style={submitButtonStyle}
              />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
