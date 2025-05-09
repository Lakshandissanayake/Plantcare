import React, { useEffect, useState } from "react";
import styles from "../styles/WateringSchedule.module.css";
import { useParams, useNavigate } from 'react-router-dom'; // ✅ useParams
import { useNotificationSettings } from "../contexts/NotificationContext";
import NavBar from '../Components/NavBar';
import {
  getIdtoWateringSchedule, // ✅ specific by-pid fetch
  deleteWateringSchedule,
} from "../services/WateringScheduleApi";

function WateringSchedule() {
  const [schedule, setSchedule] = useState([]);
  const { pid } = useParams(); // ✅ get pid from URL
  const navigate = useNavigate();
  const { settings, toggleSetting } = useNotificationSettings();

  // ✅ Fetch watering schedule for specific plant ID
  useEffect(() => {
    async function fetchSchedule() {
      try {
        const data = await getIdtoWateringSchedule(pid);
        console.log("Fetched Schedule for PID", pid, ":", data);
  
        setSchedule(Array.isArray(data?.waterSchedules) ? data.waterSchedules : []);
      } catch (error) {
        console.error("Error fetching watering schedule:", error);
        setSchedule([]);
      }
    }
  
    if (pid) fetchSchedule();
  }, [pid]);
  

  const handleDelete = async (id) => {
    try {
      const isDeleted = await deleteWateringSchedule(id);

      if (isDeleted) {
        setSchedule((prevSchedule) => prevSchedule.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  const openShaduleform = () => {
    navigate(`/watering-schedule-insert/${pid}`); // ✅ keep pid in insert too
  };

  return (
    <div className={styles.body}>
      <NavBar/>
    
      <div className={styles.newScheduleContainer}>
        <h1>Water Scheduling</h1>
        <button onClick={openShaduleform}>+ Add New Schedule</button>
      </div>

      {schedule.length === 0 ? (
  <p className={styles.emptyMessage}>No watering schedule available.</p>
) : (
  schedule.map((item) => (
    <div key={item._id}>
      <h2>{item.plantname}</h2>
      <div className={styles.card}>
        <div className={styles.cardSection1}>
          <p>Frequency: every {item.frequency}</p>
          <p>Time: {item.wateringtime}</p>
          <p>Weather Adjusted: {item.status ? "Yes" : "No"}</p>
        </div>
        <div className={styles.cardSection2}>
          <button
            className={styles.editButton}
            onClick={() => navigate(`/watering-schedule-update/${item._id}`)}
          >
            Edit
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))
)}


      {/* Notification Setting */}
      <div className={styles.notificationContainer}>
        <h2 className={styles.title}>Notification Setting</h2>
        <div className={styles.options}>
          <label>
            Email Notifications
            <input
              type="checkbox"
              checked={settings.email}
              onChange={() => toggleSetting("email")}
            />
          </label>
          <label>
            SMS Notifications
            <input
              type="checkbox"
              checked={settings.sms}
              onChange={() => toggleSetting("sms")}
            />
          </label>
          <label>
            Push Notifications
            <input
              type="checkbox"
              checked={settings.push}
              onChange={() => toggleSetting("push")}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default WateringSchedule;
