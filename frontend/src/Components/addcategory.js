import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // For navigation
import "./css/addcato.css";
import NavBar from './NavBar';

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    careInstruction: "",
    noOfpalnts: "",
    photo: null
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirecting after success

  // Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setCategory((prev) => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!category.name || !category.description || !category.careInstruction || !category.noOfpalnts) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("description", category.description);
    formData.append("careInstruction", category.careInstruction);
    formData.append("noOfpalnts", category.noOfpalnts);
    if (category.photo) {
      formData.append("photo", category.photo);
    }

    try {
      const response = await axios.post("http://localhost:5000/categories/add", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.status === 201) {
        alert("Category added successfully!");
        navigate("/");  // Redirect to categories page
      }
    } catch (error) {
      console.error("Error adding category:", error);
      setError("Failed to add category.");
    }
  };

  return (
    <div>
      <NavBar />
    <div className="add-category-container">
    
      <h2>Add Plant Category</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={category.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={category.description} onChange={handleChange} required />

        <label>Care Instructions:</label>
        <textarea name="careInstruction" value={category.careInstruction} onChange={handleChange} required />

        <label>Number of Plants:</label>
        <input type="number" name="noOfpalnts" value={category.noOfpalnts} onChange={handleChange} required />

        <label>Photo:</label>
        <input type="file" onChange={handleFileChange} />

        <button type="submit">Add Category</button>
      </form>
    </div>
    </div>
  );
};

export default AddCategory;
