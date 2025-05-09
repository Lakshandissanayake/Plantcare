import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";
import NavBar from '../Components/NavBar';
import "./css/readcatogery.css";


export default function ReadCategory() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/categories");
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
      await axios.delete(`http://localhost:4000/categories/delete/${id}`);
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
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text("Plant Categories Report", 14, 22);
  
    const tableColumn = ["Name", "Description", "Care Instructions", "Number of Plants"];
    const tableRows = categories.map(category => [
      category.name || "N/A",
      category.description || "N/A",
      category.careInstruction || "N/A",
      category.noOfplants !== null ? category.noOfplants : "N/A"
    ]);
  
    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10 },
    });
  
    doc.save("Plant_Categories_Report.pdf");
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
                  <img src={`http://localhost:4000/uploads/${category.photo}`} alt={category.name} />

                  <p><strong>Description:</strong> {category.description || "No description available."}</p>
                  <p><strong>Care Instructions:</strong> {category.careInstruction || "No instruction available."}</p>
                  <p><strong>Number of Plants:</strong> {category.noOfplants || "N/A"}</p>
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
