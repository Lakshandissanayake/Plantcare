

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/UpdatePlant.css';  // Import the updated CSS file
// import NavBar from './NavBar';

// function UpdatePlant() {
//   const { pid } = useParams();
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({});

//   useEffect(() => {
//     const fetchPlant = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/plants/${pid}`);
//         setInputs(response.data.plants);
//       } catch (error) {
//         console.error("Error fetching plant:", error);
//       }
//     };

//     fetchPlant();
//   }, [pid]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send update request here
//     console.log(inputs);
//     // After updating, navigate to another page (e.g., My Plants)
//     navigate('/myplants');
//   };

//   return (
//     <div>
//       <NavBar/>
//     <div className="update-plant-container">
//       <form className="update-plant-form" onSubmit={handleSubmit}>
//         <h2 className="form-title">Update Plant</h2>

//         <div className="mb-3">
//           <label className="form-label">Plant Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="plantName"
//             value={inputs.plantName || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Category</label>
//           <select
//             className="form-select"
//             name="category"
//             value={inputs.category || ''}
//             onChange={handleChange}
//             required
//           >
//             <option value="Indoor Plant">Indoor Plant</option>
//             <option value="Outdoor Plant">Outdoor Plant</option>
//           </select>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea
//             className="form-control"
//             name="description"
//             value={inputs.description || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Plant Area</label>
//           <input
//             type="text"
//             className="form-control"
//             name="plantArea"
//             value={inputs.plantArea || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Watering Frequency</label>
//           <select
//             className="form-select"
//             name="wateringFrequency"
//             value={inputs.wateringFrequency || ''}
//             onChange={handleChange}
//             required
//           >
//             <optgroup label="Daily">
//               <option value="Daily - Once per Day">Once per Day</option>
//               <option value="Daily - Twice per Day">Twice per Day</option>
//             </optgroup>
//             <optgroup label="Weekly">
//               <option value="Weekly - Once a Week">Once a Week</option>
//               <option value="Weekly - Twice a Week">Twice a Week</option>
//               <option value="Weekly - Three Times per Week">Three Times per Week</option>
//             </optgroup>
//           </select>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Plant Image </label>
//           <input
//             type="text"
//             className="form-control"
//             name="plantImage"
//             value={inputs.plantImage || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="text-center">
//           <button type="submit" className="btn btn-success w-100">
//             Update Plant
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default UpdatePlant;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/UpdatePlant.css';  // Import the updated CSS file
// import NavBar from './NavBar';

// function UpdatePlant() {
//   const { pid } = useParams();
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({});

//   useEffect(() => {
//     const fetchPlant = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/plants/${pid}`);
//         setInputs(response.data.plants);
//       } catch (error) {
//         console.error("Error fetching plant:", error);
//       }
//     };

//     fetchPlant();
//   }, [pid]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send update request
//       await axios.put(`http://localhost:4000/plants/${pid}`, inputs);
      
//       // Show success alert
//       alert("Plant updated successfully!");

//       // Redirect to 'My Plants' page
//       navigate('/myplants');
//     } catch (error) {
//       console.error("Error updating plant:", error);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="update-plant-container">
//         <form className="update-plant-form" onSubmit={handleSubmit}>
//           <h2 className="form-title">Update Plant</h2>

//           <div className="mb-3">
//             <label className="form-label">Plant Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantName"
//               value={inputs.plantName || ''}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Category</label>
//             <select
//               className="form-select"
//               name="category"
//               value={inputs.category || ''}
//               onChange={handleChange}
//               required
//             >
//               <option value="Indoor Plant">Indoor Plant</option>
//               <option value="Outdoor Plant">Outdoor Plant</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               name="description"
//               value={inputs.description || ''}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Plant Area</label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantArea"
//               value={inputs.plantArea || ''}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Watering Frequency</label>
//             <select
//               className="form-select"
//               name="wateringFrequency"
//               value={inputs.wateringFrequency || ''}
//               onChange={handleChange}
//               required
//             >
//               <optgroup label="Daily">
//                 <option value="Daily - Once per Day">Once per Day</option>
//                 <option value="Daily - Twice per Day">Twice per Day</option>
//               </optgroup>
//               <optgroup label="Weekly">
//                 <option value="Weekly - Once a Week">Once a Week</option>
//                 <option value="Weekly - Twice a Week">Twice a Week</option>
//                 <option value="Weekly - Three Times per Week">Three Times per Week</option>
//               </optgroup>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Plant Image </label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantImage"
//               value={inputs.plantImage || ''}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button type="submit" className="btn btn-success w-100">
//               Update Plant
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdatePlant;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/UpdatePlant.css';
// import NavBar from './NavBar';

// function UpdatePlant() {
//   const { pid } = useParams();
//   const navigate = useNavigate();

//   // Initial default state to avoid "undefined" errors
//   const [inputs, setInputs] = useState({
//     plantName: '',
//     category: '',
//     description: '',
//     plantArea: '',
//     wateringFrequency: '',
//     plantImage: ''
//   });

//   const [loading, setLoading] = useState(true); // Track loading state

//   useEffect(() => {
//     const fetchPlant = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/plants/${pid}`);
//         setInputs(response.data.plant);
//         setLoading(false); // Data loaded
//       } catch (error) {
//         console.error("Error fetching plant:", error);
//         setLoading(false); // Stop loading on error too
//       }
//     };

//     fetchPlant();
//   }, [pid]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:4000/plants/${pid}`, inputs);
//       alert("Plant updated successfully!");
//       navigate('/myplants');
//     } catch (error) {
//       console.error("Error updating plant:", error);
//     }
//   };

//   // Optional loading fallback
//   if (loading) {
//     return (
//       <div>
//         <NavBar />
//         <div className="update-plant-container">
//           <p style={{ textAlign: "center", marginTop: "20px" }}>Loading plant data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <NavBar />
//       <div className="update-plant-container">
//         <form className="update-plant-form" onSubmit={handleSubmit}>
//           <h2 className="form-title">Update Plant</h2>

//           <div className="mb-3">
//             <label className="form-label">Plant Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantName"
//               value={inputs.plantName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Category</label>
//             <select
//               className="form-select"
//               name="category"
//               value={inputs.category}
//               onChange={handleChange}
//               required
//             >
//               <option value="Indoor Plant">Indoor Plant</option>
//               <option value="Outdoor Plant">Outdoor Plant</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               name="description"
//               value={inputs.description}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Plant Area</label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantArea"
//               value={inputs.plantArea}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Watering Frequency</label>
//             <select
//               className="form-select"
//               name="wateringFrequency"
//               value={inputs.wateringFrequency}
//               onChange={handleChange}
//               required
//             >
//               <optgroup label="Daily">
//                 <option value="Daily - Once per Day">Once per Day</option>
//                 <option value="Daily - Twice per Day">Twice per Day</option>
//               </optgroup>
//               <optgroup label="Weekly">
//                 <option value="Weekly - Once a Week">Once a Week</option>
//                 <option value="Weekly - Twice a Week">Twice a Week</option>
//                 <option value="Weekly - Three Times per Week">Three Times per Week</option>
//               </optgroup>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Plant Image</label>
//             <input
//               type="text"
//               className="form-control"
//               name="plantImage"
//               value={inputs.plantImage}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button type="submit" className="btn btn-success w-100">
//               Update Plant
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdatePlant;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './css/UpdatePlant.css';
import NavBar from './NavBar';

function UpdatePlant() {
  const { pid } = useParams();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    plantName: '',
    category: '',
    description: '',
    plantArea: '',
    wateringFrequency: '',
  });
  const [plantImage, setPlantImage] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/plants/${pid}`);
        const { plantName, category, description, plantArea, wateringFrequency, plantImage } = response.data.plant;
        setInputs({ plantName, category, description, plantArea, wateringFrequency });
        setPlantImage(plantImage); // This can be the current image filename
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plant:", error);
        setLoading(false);
      }
    };

    fetchPlant();
  }, [pid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setPlantImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('plantName', inputs.plantName);
    formData.append('category', inputs.category);
    formData.append('description', inputs.description);
    formData.append('plantArea', inputs.plantArea);
    formData.append('wateringFrequency', inputs.wateringFrequency);
    if (plantImage instanceof File) {
      formData.append('plantImage', plantImage);
    }

    try {
      await axios.put(`http://localhost:4000/plants/${pid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Plant updated successfully!");
      navigate(`/plant/${pid}`);

    } catch (error) {
      console.error("Error updating plant:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <NavBar />
        <div className="update-plant-container">
          <p style={{ textAlign: "center", marginTop: "20px" }}>Loading plant data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="update-plant-container">
        <form className="update-plant-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="form-title">Update Plant</h2>

          <div className="mb-3">
            <label className="form-label">Plant Name</label>
            <input type="text" className="form-control" name="plantName" value={inputs.plantName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" value={inputs.category} onChange={handleChange} required>
              <option value="Indoor Plant">Indoor Plant</option>
              <option value="Outdoor Plant">Outdoor Plant</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" value={inputs.description} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Plant Area</label>
            <input type="text" className="form-control" name="plantArea" value={inputs.plantArea} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Watering Frequency</label>
            <select className="form-select" name="wateringFrequency" value={inputs.wateringFrequency} onChange={handleChange} required>
              <optgroup label="Daily">
                <option value="Daily - Once per Day">Once per Day</option>
                <option value="Daily - Twice per Day">Twice per Day</option>
              </optgroup>
              <optgroup label="Weekly">
                <option value="Weekly - Once a Week">Once a Week</option>
                <option value="Weekly - Twice a Week">Twice a Week</option>
                <option value="Weekly - Three Times per Week">Three Times per Week</option>
              </optgroup>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Update Plant Image</label>
            <input type="file" className="form-control" name="plantImage" onChange={handleImageChange} />
            {!(plantImage instanceof File) && plantImage && (
              <div style={{ marginTop: '10px' }}>
                <strong>Current Image:</strong> {plantImage}
              </div>
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success w-100">
              Update Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePlant;


