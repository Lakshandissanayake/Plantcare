


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

    await axios.post("http://localhost:4000/plants", formData, {
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
