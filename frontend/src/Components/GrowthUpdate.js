import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './growth.css';
import NavBar from './NavBar';

function GrowthUpdate() {
  const { pid, growthId } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    height: '',
    L_count: '',
    Note: '',
    file: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrowth = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/growth/growth/${growthId}`);
        console.log("API Response:", response.data);
  
        if (response.data) {
          setInputs({
            height: response.data.Height || '',
            L_count: response.data.L_count || '',
            Note: response.data.Note || '',
            file: null, // Reset file field, as we're not storing it in the state
          });
        } else {
          console.error("Growth record not found");
        }
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching growth:", error);
        setLoading(false);
      }
    };
  
    fetchGrowth();
  }, [growthId]);
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateFileName = (e) => {
    setInputs({
      ...inputs,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("height", inputs.height);
    formData.append("L_count", inputs.L_count);
    formData.append("Note", inputs.Note);
  
    if (inputs.file) {
      formData.append("file", inputs.file); // Append file only if a new file is selected
    }
  
    try {
      await axios.put(`http://localhost:4000/growth/${growthId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert("Growth updated successfully!");
      navigate('/myplants');
    } catch (error) {
      console.error("Error updating growth:", error.response ? error.response.data : error.message);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <NavBar />
      <div className="left">
        <div className="ltitle">
          <h1>Edit Growth</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h4>HEIGHT</h4>
            <input
              type="number"
              name="height"
              value={inputs.height || ''} 
              onChange={handleChange}
              required
              min="1"
              step="0.1"
            />

            <h4>LEAF COUNT</h4>
            <input
              type="number"
              name="L_count"
              value={inputs.L_count || ''} // Handle undefined leaf count safely
              onChange={handleChange}
              required
              min="1"
            />

            <h4>UPLOAD PHOTO</h4>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={updateFileName}
            />
            <label htmlFor="fileInput" className="file-label">
              {inputs.file ? inputs.file.name : 'Choose a file'}
            </label>

            <h4>NOTE</h4>
            <input
              type="text"
              name="Note"
              value={inputs.Note || ''} // Handle undefined note safely
              onChange={handleChange}
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
}

export default GrowthUpdate;
