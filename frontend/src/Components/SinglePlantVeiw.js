import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './css/SinglePlantView.css';
import NavBar from './NavBar';

function SinglePlantView(props) {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/plants/${pid}`);
        setPlant(response.data.plant);
      } catch (error) {
        console.error("Error fetching plant:", error);
      }
    };
    fetchPlant();
  }, [pid]);

  if (!plant) return <div className="loading">Loading...</div>;


  const openGrowth = (pid) => {
    if (!pid) {
      console.error("pid is undefined!");
      return;
    }
    navigate(`/showgrowth/${pid}`); // Corrected path
  };

  return (
    <div>
      <NavBar />
      <div className="plant-container">
        <h1 className="plant-title">{plant.plantName}</h1>

        {/* ✅ Show image from local uploads */}
        <img
          className="plant-image"
          src={`http://localhost:4000/uploads/${plant.plantImage}`}
          alt={plant.plantName}
        />

        <div className="plant-info">
          <p><strong>Category:</strong> {plant.category}</p>
          <p><strong>Description:</strong> {plant.description}</p>
          <p><strong>Plant Area:</strong> {plant.plantArea}</p>
          <p><strong>Watering Frequency:</strong> {plant.wateringFrequency}</p>
        </div>

        <div className="button-container">
          <button
            className="update-button"
            onClick={() => navigate(`/updatePlant/${pid}`)}
          >
            Update
          </button>
          <button
            className="update-button"
            onClick={() => openGrowth(plant._id)}

          >
            View Growth
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePlantView;

