

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import NavBar from './NavBar';
// // import axios from 'axios';
// // import './css/AddPlant.css';  // Import the updated CSS file

// // function AddPlant() {
// //   const history = useNavigate();

// //   const [inputs, setInputs] = useState({
// //     plantName: "",
// //     category: "",
// //     description: "",
// //     plantArea: "",
// //     wateringFrequency: "",
// //     plantImage: "",
// //   });

// //   const handleChange = (e) => {
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     sendRequest().then(() => history('/myplants'));
// //   };

// //   const sendRequest = async () => {
// //     await axios.post("http://localhost:5000/plants", {
// //       plantName: String(inputs.plantName),
// //       category: String(inputs.category),
// //       description: String(inputs.description),
// //       plantArea: String(inputs.plantArea),
// //       wateringFrequency: String(inputs.wateringFrequency),
// //       plantImage: String(inputs.plantImage),
// //     }).then(res => res.data);
// //   };

// //   return (
// //     <div >
// //      <NavBar />
// //     <div className="add-plant-container">
     
// //       <form className="add-plant-form" onSubmit={handleSubmit}>
// //         <h2 className="form-title">Add New Plant</h2>

// //         <div className="mb-3">
// //           <label className="form-label">Plant Name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             name="plantName"
// //             value={inputs.plantName || ''}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Category</label>
// //           <select
// //             className="form-select"
// //             name="category"
// //             value={inputs.category || ''}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="Indoor Plant">Indoor Plant</option>
// //             <option value="Outdoor Plant">Outdoor Plant</option>
// //           </select>
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Description</label>
// //           <textarea
// //             className="form-control"
// //             name="description"
// //             value={inputs.description || ''}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Plant Area</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             name="plantArea"
// //             value={inputs.plantArea || ''}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Watering Frequency</label>
// //           <select
// //             className="form-select"
// //             name="wateringFrequency"
// //             value={inputs.wateringFrequency || ''}
// //             onChange={handleChange}
// //             required
// //           >
// //             <optgroup label="Daily">
// //               <option value="Daily - Once per Day">Once per Day</option>
// //               <option value="Daily - Twice per Day">Twice per Day</option>
// //             </optgroup>
// //             <optgroup label="Weekly">
// //               <option value="Weekly - Once a Week">Once a Week</option>
// //               <option value="Weekly - Twice a Week">Twice a Week</option>
// //               <option value="Weekly - Three Times per Week">Three Times per Week</option>
// //             </optgroup>
// //           </select>
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Plant Image</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             name="plantImage"
// //             value={inputs.plantImage || ''}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="text-center">
// //           <button type="submit" className="btn btn-success w-100">
// //             Add Plant
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //     </div>
// //   );
// // }

// // export default AddPlant;




// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import NavBar from './NavBar';
// // import axios from 'axios';
// // import './css/AddPlant.css';  // Import the updated CSS file

// // function AddPlant() {
// //   const history = useNavigate();

// //   const [inputs, setInputs] = useState({
// //     plantName: "",
// //     category: "",
// //     description: "",
// //     plantArea: "",
// //     wateringFrequency: "",
// //     plantImage: "",
// //   });

// //   const [successMessage, setSuccessMessage] = useState(""); // State for success message

// //   const handleChange = (e) => {
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     sendRequest().then(() => {
// //       setSuccessMessage("Plant added successfully!"); // Show success message
// //       setTimeout(() => {
// //         setSuccessMessage(""); // Hide message after 3 seconds
// //         history('/myplants'); // Redirect to 'My Plants' page
// //       }, 3000);
// //     });
// //   };

// //   const sendRequest = async () => {
// //     await axios.post("http://localhost:5000/plants", {
// //       plantName: String(inputs.plantName),
// //       category: String(inputs.category),
// //       description: String(inputs.description),
// //       plantArea: String(inputs.plantArea),
// //       wateringFrequency: String(inputs.wateringFrequency),
// //       plantImage: String(inputs.plantImage),
// //     }).then(res => res.data);
// //   };

// //   return (
// //     <div >
// //       <NavBar />
// //       <div className="add-plant-container">
// //         <form className="add-plant-form" onSubmit={handleSubmit}>
// //           <h2 className="form-title">Add New Plant</h2>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div style={{ 
// //               color: "green", 
// //               textAlign: "center", 
// //               marginBottom: "20px", 
// //               fontWeight: "bold" 
// //             }}>
// //               {successMessage}
// //             </div>
// //           )}

// //           <div className="mb-3">
// //             <label className="form-label">Plant Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantName"
// //               value={inputs.plantName || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Category</label>
// //             <select
// //               className="form-select"
// //               name="category"
// //               value={inputs.category || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="Indoor Plant">Indoor Plant</option>
// //               <option value="Outdoor Plant">Outdoor Plant</option>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Description</label>
// //             <textarea
// //               className="form-control"
// //               name="description"
// //               value={inputs.description || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Area</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantArea"
// //               value={inputs.plantArea || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Watering Frequency</label>
// //             <select
// //               className="form-select"
// //               name="wateringFrequency"
// //               value={inputs.wateringFrequency || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <optgroup label="Daily">
// //                 <option value="Daily - Once per Day">Once per Day</option>
// //                 <option value="Daily - Twice per Day">Twice per Day</option>
// //               </optgroup>
// //               <optgroup label="Weekly">
// //                 <option value="Weekly - Once a Week">Once a Week</option>
// //                 <option value="Weekly - Twice a Week">Twice a Week</option>
// //                 <option value="Weekly - Three Times per Week">Three Times per Week</option>
// //               </optgroup>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Image</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantImage"
// //               value={inputs.plantImage || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="text-center">
// //             <button type="submit" className="btn btn-success w-100">
// //               Add Plant
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddPlant;






// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import NavBar from './NavBar';
// // import axios from 'axios';
// // import './css/AddPlant.css';  // Import the updated CSS file

// // function AddPlant() {
// //   const history = useNavigate();

// //   const [inputs, setInputs] = useState({
// //     plantName: "",
// //     category: "",
// //     description: "",
// //     plantArea: "",
// //     wateringFrequency: "",
// //     plantImage: "",
// //   });

// //   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// //   const [errorMessage, setErrorMessage] = useState(""); // State for error message

// //   const handleChange = (e) => {
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const validateForm = () => {
// //     if (!inputs.plantName || !inputs.category || !inputs.description || !inputs.plantArea || !inputs.wateringFrequency || !inputs.plantImage) {
// //       setErrorMessage("Please fill in all fields.");
// //       return false;
// //     }

// //     // Additional validation for the plant image (check if it's a valid URL)
// //     const imageUrlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg))$/i;
// //     if (!imageUrlPattern.test(inputs.plantImage)) {
// //       setErrorMessage("Please enter a valid image URL.");
// //       return false;
// //     }

// //     setErrorMessage(""); // Clear error message if validation passes
// //     return true;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       sendRequest().then(() => {
// //         setSuccessMessage("Plant added successfully!"); // Show success message
// //         setTimeout(() => {
// //           setSuccessMessage(""); // Hide message after 3 seconds
// //           history('/myplants'); // Redirect to 'My Plants' page
// //         }, 3000);
// //       });
// //     }
// //   };

// //   const sendRequest = async () => {
// //     await axios.post("http://localhost:5000/plants", {
// //       plantName: String(inputs.plantName),
// //       category: String(inputs.category),
// //       description: String(inputs.description),
// //       plantArea: String(inputs.plantArea),
// //       wateringFrequency: String(inputs.wateringFrequency),
// //       plantImage: String(inputs.plantImage),
// //     }).then(res => res.data);
// //   };

// //   return (
// //     <div >
// //       <NavBar />
// //       <div className="add-plant-container">
// //         <form className="add-plant-form" onSubmit={handleSubmit}>
// //           <h2 className="form-title">Add New Plant</h2>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div style={{ 
// //               color: "green", 
// //               textAlign: "center", 
// //               marginBottom: "20px", 
// //               fontWeight: "bold" 
// //             }}>
// //               {successMessage}
// //             </div>
// //           )}

// //           {/* Error Message */}
// //           {errorMessage && (
// //             <div style={{ 
// //               color: "red", 
// //               textAlign: "center", 
// //               marginBottom: "20px", 
// //               fontWeight: "bold" 
// //             }}>
// //               {errorMessage}
// //             </div>
// //           )}

// //           <div className="mb-3">
// //             <label className="form-label">Plant Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantName"
// //               value={inputs.plantName || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Category</label>
// //             <select
// //               className="form-select"
// //               name="category"
// //               value={inputs.category || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="Indoor Plant">Indoor Plant</option>
// //               <option value="Outdoor Plant">Outdoor Plant</option>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Description</label>
// //             <textarea
// //               className="form-control"
// //               name="description"
// //               value={inputs.description || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Area</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantArea"
// //               value={inputs.plantArea || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Watering Frequency</label>
// //             <select
// //               className="form-select"
// //               name="wateringFrequency"
// //               value={inputs.wateringFrequency || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <optgroup label="Daily">
// //                 <option value="Daily - Once per Day">Once per Day</option>
// //                 <option value="Daily - Twice per Day">Twice per Day</option>
// //               </optgroup>
// //               <optgroup label="Weekly">
// //                 <option value="Weekly - Once a Week">Once a Week</option>
// //                 <option value="Weekly - Twice a Week">Twice a Week</option>
// //                 <option value="Weekly - Three Times per Week">Three Times per Week</option>
// //               </optgroup>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Image</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantImage"
// //               value={inputs.plantImage || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="text-center">
// //             <button type="submit" className="btn btn-success w-100">
// //               Add Plant
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddPlant;






// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import NavBar from './NavBar';
// // import axios from 'axios';
// // import './css/AddPlant.css';  // Import the updated CSS file

// // function AddPlant() {
// //   const history = useNavigate();

// //   const [inputs, setInputs] = useState({
// //     plantName: "",
// //     category: "",
// //     description: "",
// //     plantArea: "",
// //     wateringFrequency: "",
// //     plantImage: "",
// //   });

// //   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// //   const [errorMessage, setErrorMessage] = useState(""); // State for error message

// //   const handleChange = (e) => {
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const validateForm = () => {
// //     if (!inputs.plantName || !inputs.category || !inputs.description || !inputs.plantArea || !inputs.wateringFrequency) {
// //       setErrorMessage("Please fill in all required fields.");
// //       return false;
// //     }

// //     setErrorMessage(""); // Clear error message if validation passes
// //     return true;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       sendRequest().then(() => {
// //         setSuccessMessage("Plant added successfully!"); // Show success message
// //         setTimeout(() => {
// //           setSuccessMessage(""); // Hide message after 3 seconds
// //           history('/myplants'); // Redirect to 'My Plants' page
// //         }, 3000);
// //       });
// //     }
// //   };

// //   const sendRequest = async () => {
// //     await axios.post("http://localhost:5000/plants", {
// //       plantName: String(inputs.plantName),
// //       category: String(inputs.category),
// //       description: String(inputs.description),
// //       plantArea: String(inputs.plantArea),
// //       wateringFrequency: String(inputs.wateringFrequency),
// //       plantImage: String(inputs.plantImage), // Image URL is optional now
// //     }).then(res => res.data);
// //   };

// //   return (
// //     <div >
// //       <NavBar />
// //       <div className="add-plant-container">
// //         <form className="add-plant-form" onSubmit={handleSubmit}>
// //           <h2 className="form-title">Add New Plant</h2>

// //           {/* Success Message */}
// //           {successMessage && (
// //             <div style={{ 
// //               color: "green", 
// //               textAlign: "center", 
// //               marginBottom: "20px", 
// //               fontWeight: "bold" 
// //             }}>
// //               {successMessage}
// //             </div>
// //           )}

// //           {/* Error Message */}
// //           {errorMessage && (
// //             <div style={{ 
// //               color: "red", 
// //               textAlign: "center", 
// //               marginBottom: "20px", 
// //               fontWeight: "bold" 
// //             }}>
// //               {errorMessage}
// //             </div>
// //           )}

// //           <div className="mb-3">
// //             <label className="form-label">Plant Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantName"
// //               value={inputs.plantName || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Category</label>
// //             <select
// //               className="form-select"
// //               name="category"
// //               value={inputs.category || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="Indoor Plant">Indoor Plant</option>
// //               <option value="Outdoor Plant">Outdoor Plant</option>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Description</label>
// //             <textarea
// //               className="form-control"
// //               name="description"
// //               value={inputs.description || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Area</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantArea"
// //               value={inputs.plantArea || ''}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Watering Frequency</label>
// //             <select
// //               className="form-select"
// //               name="wateringFrequency"
// //               value={inputs.wateringFrequency || ''}
// //               onChange={handleChange}
// //               required
// //             >
// //               <optgroup label="Daily">
// //                 <option value="Daily - Once per Day">Once per Day</option>
// //                 <option value="Daily - Twice per Day">Twice per Day</option>
// //               </optgroup>
// //               <optgroup label="Weekly">
// //                 <option value="Weekly - Once a Week">Once a Week</option>
// //                 <option value="Weekly - Twice a Week">Twice a Week</option>
// //                 <option value="Weekly - Three Times per Week">Three Times per Week</option>
// //               </optgroup>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label className="form-label">Plant Image (Optional)</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="plantImage"
// //               value={inputs.plantImage || ''}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="text-center">
// //             <button type="submit" className="btn btn-success w-100">
// //               Add Plant
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddPlant;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar';
// import axios from 'axios';
// import './css/AddPlant.css';

// function AddPlant() {
//   const history = useNavigate();

//   const [inputs, setInputs] = useState({
//     plantName: "",
//     category: "",
//     description: "",
//     plantArea: "",
//     wateringFrequency: "",
//   });

//   const [plantImage, setPlantImage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setPlantImage(e.target.files[0]);
//   };

//   const validateForm = () => {
//     if (!inputs.plantName || !inputs.category || !inputs.description || !inputs.plantArea || !inputs.wateringFrequency || !plantImage) {
//       setErrorMessage("Please fill in all required fields.");
//       return false;
//     }
//     setErrorMessage("");
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const formData = new FormData();
//     Object.keys(inputs).forEach(key => formData.append(key, inputs[key]));
//     formData.append("plantImage", plantImage);

//     try {
//       await axios.post("http://localhost:5000/plants", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setSuccessMessage("Plant added successfully!");
//       setTimeout(() => {
//         setSuccessMessage("");
//         history("/myplants");
//       }, 3000);
//     } catch (error) {
//       setErrorMessage("Error adding plant.");
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="add-plant-container">
//         <form className="add-plant-form" onSubmit={handleSubmit}>
//           <h2 className="form-title">Add New Plant</h2>

//           {successMessage && <div style={{ color: "green", textAlign: "center" }}>{successMessage}</div>}
//           {errorMessage && <div style={{ color: "red", textAlign: "center" }}>{errorMessage}</div>}

//           <input type="text" name="plantName" placeholder="Plant Name" value={inputs.plantName} onChange={handleChange} required />
//           <select name="category" value={inputs.category} onChange={handleChange} required>
//             <option value="">Select Category</option>
//             <option value="Indoor Plant">Indoor Plant</option>
//             <option value="Outdoor Plant">Outdoor Plant</option>
//           </select>
//           <textarea name="description" placeholder="Description" value={inputs.description} onChange={handleChange} required />
//           <input type="text" name="plantArea" placeholder="Plant Area" value={inputs.plantArea} onChange={handleChange} required />
//           <select name="wateringFrequency" value={inputs.wateringFrequency} onChange={handleChange} required>
//             <option value="">Select Watering Frequency</option>
//             <option value="Daily - Once per Day">Daily - Once per Day</option>
//             <option value="Daily - Twice per Day">Daily - Twice per Day</option>
//             <option value="Weekly - Once a Week">Weekly - Once a Week</option>
//             <option value="Weekly - Twice a Week">Weekly - Twice a Week</option>
//             <option value="Weekly - Three Times per Week">Weekly - Three Times per Week</option>
//           </select>

//           <label>Upload Image</label>
//           <input type="file" name="plantImage" onChange={handleImageChange} accept="image/*" required />

//           <button type="submit">Add Plant</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddPlant;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';
import './css/AddPlant.css';

function AddPlant() {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    plantName: "",
    category: "Indoor Plant",
    description: "",
    plantArea: "",
    wateringFrequency: "",
  });

  const [plantImage, setPlantImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setPlantImage(e.target.files[0]);
  };

  const validateForm = () => {
    if (!inputs.plantName || !inputs.category || !inputs.description || !inputs.plantArea || !inputs.wateringFrequency) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendRequest().then(() => {
        setSuccessMessage("Plant added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
          history('/myplants');
        }, 3000);
      });
    }
  };

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append("plantName", inputs.plantName);
    formData.append("category", inputs.category);
    formData.append("description", inputs.description);
    formData.append("plantArea", inputs.plantArea);
    formData.append("wateringFrequency", inputs.wateringFrequency);
    if (plantImage) {
      formData.append("plantImage", plantImage);
    }

    await axios.post("http://localhost:5000/plants", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="add-plant-container">
        <form className="add-plant-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Add New Plant</h2>

          {successMessage && (
            <div style={{ color: "green", textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div style={{ color: "red", textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
              {errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Plant Name</label>
            <input type="text" className="form-control" name="plantName" placeholder ="Enter plant name" value={inputs.plantName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" name="category" placeholder ="select category" value={inputs.category} onChange={handleChange} required>
              <option value="Indoor Plant">Indoor Plant</option>
              <option value="Outdoor Plant">Outdoor Plant</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" placeholder ="Give description about plant" value={inputs.description} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Plant Area</label>
            <input type="text" className="form-control" name="plantArea" placeholder ="Place we plant the plant" value={inputs.plantArea} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Watering Frequency</label>
            <select className="form-select" name="wateringFrequency" placeholder ="select watering frequency" value={inputs.wateringFrequency} onChange={handleChange} required>
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
            <label className="form-label">Plant Image</label>
            <input type="file" className="form-control" name="plantImage" placeholder ="Browse plant Image" accept="image/*" onChange={handleImageChange} required />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success w-100">Add Plant</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPlant;
