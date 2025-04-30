import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import "./css/readcatogery.css";


export default function ReadCategory() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id, noOfPlants) => {
    if (noOfPlants >= 1) {
      alert("Cannot delete category. There are still plants in this category.");
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/categories/delete/${id}`);
      alert("Category deleted successfully");
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      alert(error.response?.data?.message || "Error deleting category");
    }
  };

  const navToAddCategory = () => {
    navigate("/addcategory");
  };

  const navToEditCategory = (id) => {
    navigate(`/editcategory/${id}`);
  };

  // Function to generate and download report
  const generateReport = () => {
    const reportData = categories.map(category => (
      `Category: ${category.name}\nDescription: ${category.description || "No description available."}\nCare Instructions: ${category.careInstruction || "No instruction available."}\nNumber of Plants: ${category.noOfpalnts || "N/A"}\n\n`
    )).join("\n");
    
    const blob = new Blob([reportData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Plant_Categories_Report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <NavBar />
      <nav className="body">
        <div className="container">
          <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 className="titlee">PLANT CATEGORIES</h1>
          </div>

          {/* Search Bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <input 
              type="text" 
              placeholder="Search plants..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              style={{
                padding: "10px",
                width: "500px",
                borderRadius: "5px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.15)",
                color: "white",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button 
              className="get-report" 
              onClick={generateReport} 
              style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              DOWNLOAD REPORT
            </button>
          </div>

          {/* Category Cards */}
          <div className="plant-cards">
            {categories.filter(category => category.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 ? (
              <p>No categories found.</p>
            ) : (
              categories.filter(category => category.name.toLowerCase().includes(searchTerm.toLowerCase())).map((category) => (
                <div className="card" key={category._id}>
                  <h2 style={{ color: "white" }}>{category.name}</h2>
                  <img src={`http://localhost:5000/${category.photo}`} alt={category.name} />
                  <p><strong>Description:</strong> {category.description || "No description available."}</p>
                  <p><strong>Care Instructions:</strong> {category.careInstruction || "No instruction available."}</p>
                  <p><strong>Number of Plants:</strong> {category.noOfpalnts || "N/A"}</p>
                  <div className="buttons">
                    <button className="delete-btn" onClick={() => handleDelete(category._id, category.noOfPlants)}>DELETE</button>
                    <button className="edit-btn" onClick={() => navToEditCategory(category._id)}>EDIT</button>
                  </div>
                </div>
              ))
            )}

            {/* Add Category Card */}
            <div className="card add-category" onClick={navToAddCategory}>
              <div className="add-icon">🌱</div>
              <button className="add-btn">Add Plant Category</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
