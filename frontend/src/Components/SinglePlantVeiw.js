// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function SinglePlantView() {
//   const { pid } = useParams();  // Get the 'pid' from the route params
//   const [plant, setPlant] = useState(null);

//   useEffect(() => {
//     const fetchPlant = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/plants/${pid}`);
//         setPlant(response.data.plants);  // Set the plant data from the response
//       } catch (error) {
//         console.error("Error fetching plant:", error);
//       }
//     };

//     fetchPlant();
//   }, [pid]);

//   if (!plant) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{plant.plantName}</h1>
//       <img src={plant.plantImage} alt={plant.plantName} style={{ width: '300px', height: 'auto' }} />
//       <p><strong>Category:</strong> {plant.category}</p>
//       <p><strong>Description:</strong> {plant.description}</p>
//       <p><strong>Plant Area:</strong> {plant.plantArea}</p>
//       <p><strong>Watering Frequency:</strong> {plant.wateringFrequency}</p>

//     </div>

    
    
//   );
// }

// export default SinglePlantView;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/SinglePlantView.css';
// import NavBar from './NavBar';


// function SinglePlantView() {
//   const { pid } = useParams();
//   const navigate = useNavigate();
//   const [plant, setPlant] = useState(null);

//   useEffect(() => {
//     const fetchPlant = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/plants/${pid}`);
//         setPlant(response.data.plants);
//       } catch (error) {
//         console.error("Error fetching plant:", error);
//       }
//     };
//     fetchPlant();
//   }, [pid]);

//   if (!plant) return <div className="loading">Loading...</div>;

//   return (

//     <div><NavBar/>
//     <div className="plant-container">
      
//       <h1 className="plant-title">{plant.plantName}</h1>
//       <img className="plant-image" src={plant.plantImage} alt={plant.plantName} />
//       <div className="plant-info">
//         <p><strong>Category:</strong> {plant.category}</p>
//         <p><strong>Description:</strong> {plant.description}</p>
//         <p><strong>Plant Area:</strong> {plant.plantArea}</p>
//         <p><strong>Watering Frequency:</strong> {plant.wateringFrequency}</p>
//       </div>
//       <div className="button-container">
        
//         <button className="update-button" onClick={() => navigate(`/updatePlant/${pid}`)}>Update</button>
//         {/* <button className="growth-button" onClick={() => navigate(`/view-growth/${pid}`)}>View Growth</button> */}
//         <button className="update-button" onClick={() => navigate(`/updatePlant/${pid}`)}>Add Growth</button>

//       </div>
//     </div>
//     </div>
//   );
// }

// export default SinglePlantView;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './css/SinglePlantView.css';
import NavBar from './NavBar';

function SinglePlantView() {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/plants/${pid}`);
        setPlant(response.data.plant);
      } catch (error) {
        console.error("Error fetching plant:", error);
      }
    };
    fetchPlant();
  }, [pid]);

  if (!plant) return <div className="loading">Loading...</div>;

  return (
    <div>
      <NavBar />
      <div className="plant-container">
        <h1 className="plant-title">{plant.plantName}</h1>

        {/* ✅ Show image from local uploads */}
        <img
          className="plant-image"
          src={`http://localhost:5000/uploads/${plant.plantImage}`}
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
            onClick={() => navigate(`/updatePlant/${pid}`)}
          >
            View Growth
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePlantView;

