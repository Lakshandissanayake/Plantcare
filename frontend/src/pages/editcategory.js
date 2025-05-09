import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./css/editcategory.css"; // Import separate CSS file
import NavBar from '../Components/NavBar';

const EditCategory = () => {
  const { id } = useParams(); // Get category ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    careInstruction: "",
    noOfplants: "",
  });

  // Fetch category details
  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(`http://localhost:4000/categories/${id}`);
        setFormData({
          careInstruction: response.data.careInstruction || "",
          noOfplants: response.data.noOfplants || "",
        });
      } catch (error) {
        console.error("Error fetching category:", error.message);
      }
    }
    fetchCategory();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/categories/update/${id}`, {
        id,
        careInstruction: formData.careInstruction,
        noOfplants: Number(formData.noOfplants),
      });
      alert("Category updated successfully!");
      navigate("/"); // Redirect to home page after update
      
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="edit-category-container">
     
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <label>Care Instruction:</label>
        <input
          type="text"
          name="careInstruction"
          value={formData.careInstruction}
          onChange={handleChange}
          required
        />

        <label>Number of Plants:</label>
        <input
          type="number"
          name="noOfplants"
          value={formData.noOfplants}
          onChange={handleChange}
          required
        />

        <button className="submit" type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default EditCategory;
