import React, { useState } from 'react';
import axios from 'axios'; 
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import './growth.css';
import NavBar from './NavBar';

const GrowthForm = () => {
  const { pid } = useParams(); 
  console.log(pid); 
  const navigate = useNavigate();  

  console.log("Submitting growth data for plant ID:", pid);

  const [Date, setDate] = useState('');
  const [Height, setHeight] = useState('');
  const [L_count, setLeafCount] = useState('');
  const [file, setFile] = useState(null);
  const [Note, setNote] = useState('');

  // Reset form function
  const resetForm = () => {
    setDate('');
    setHeight('');
    setLeafCount('');
    setFile(null);
    setNote('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Date || !Height || !L_count || !file || !Note) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!pid) {
      alert("Error: Missing plant ID.");
      return;
    }

    const formData = new FormData();
    formData.append("Date", Date);
    formData.append("Height", Height);
    formData.append("L_count", L_count);  // Use snake_case or camelCase
    formData.append("file", file);
    formData.append("Note", Note);
    
    try {
      const response = await axios.post(
        `http://localhost:4000/growth/${pid}/growth`, 
        formData, 
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response); // Log the response to see if it's success or failure
     
      if (response.status === 201) {  // Use 201 status for successful creation
        alert('Growth data submitted successfully!');
        resetForm();  // Reset the form after submission
      } else {
        alert('Failed to submit data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <NavBar />

      <div className="left">
        <div className="ltitle">
          <h1>Add Growth</h1>
        </div>

        <div className="growth-form" >
          <form onSubmit={handleSubmit}>
            <h4>DATE</h4>
            <input
              type="date"
              id="dateInput"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <h4>HEIGHT</h4>
            <input
              type="number"
              id="heightInput"
              value={Height}
              onChange={(e) => setHeight(e.target.value)}
              required
              min="1"
              step="0.1"
            />

            <h4>LEAF COUNT</h4>
            <input
              type="number"
              id="leafCountInput"
              value={L_count}
              onChange={(e) => setLeafCount(e.target.value)}
              required
              min="1"
            />

            <h4>UPLOAD PHOTO</h4>
            <input
              
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              required
            />
            <label htmlFor="fileInput" className="file-label">
              {file ? file.name : 'Choose a file'}
            </label>

            <h4>NOTE</h4>
            <input
              type="text"
              id="noteInput"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
              required
            />

            <br />
            <button type="submit">SAVE</button>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="reminder">
          <h3>REMINDER</h3>
          <img src="/img/Group_11.png" alt="Reminder" />
        </div>
      </div>
    </div>
  );
};

export default GrowthForm;
