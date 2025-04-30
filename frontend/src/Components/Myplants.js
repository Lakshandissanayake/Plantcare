


// import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar";
// import axios from "axios";
// import Plant from "./Plant";
// import { useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf"; 

// const URL = "http://localhost:5000/plants";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function MyPlants() {
//   const [plants, setPlants] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All"); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchHandler().then((data) => setPlants(data.plants));
//   }, []);

//   // ✅ Remove deleted plant from state
//   const handleDelete = (deletedPlantId) => {
//     setPlants((prevPlants) => prevPlants.filter((plant) => plant._id !== deletedPlantId));
//   };

//   // Filtering plants based on search and category
//   const filteredPlants = plants.filter((plant) => {
//     const matchesSearch = plant.plantName.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = categoryFilter === "All" || plant.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   // Generate PDF report
//   const generateReport = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(20);
//     doc.text("Plant Care Report", 20, 20);

//     // Add category-wise count
//     const categoryCounts = plants.reduce(
//       (counts, plant) => {
//         if (plant.category === "Indoor Plant") {
//           counts.indoor += 1;
//         } else if (plant.category === "Outdoor Plant") {
//           counts.outdoor += 1;
//         }
//         return counts;
//       },
//       { indoor: 0, outdoor: 0 }
//     );

//     doc.setFontSize(16);
//     doc.text(`Indoor Plants: ${categoryCounts.indoor}`, 20, 40);
//     doc.text(`Outdoor Plants: ${categoryCounts.outdoor}`, 20, 50);

//     doc.text("Plant List:", 20, 60);
//     let yPosition = 70;
//     filteredPlants.forEach((plant) => {
//       doc.text(`Name: ${plant.plantName}`, 20, yPosition);
//       doc.text(`Category: ${plant.category}`, 20, yPosition + 10);
//       doc.text(`Description: ${plant.description}`, 20, yPosition + 20);
//       doc.text(`Watering Frequency: ${plant.wateringFrequency}`, 20, yPosition + 30);
//       yPosition += 40;
//     });

//     doc.save("Plant_Care_Report.pdf");
//   };

//   return (
//     <div>
//       <NavBar />
//       <h1 style={{ textAlign: "left", color: "white", paddingLeft: "40px" }}>My Plants</h1>

//       {/* Generate Report Button */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <button onClick={generateReport} style={buttonStyle}>
//           Download Report (PDF)
//         </button>
//       </div>

//       {/* Search bar and category filter */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search plants..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "500px",
//             borderRadius: "5px",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             background: "rgba(255, 255, 255, 0.15)",
//             color: "white",
//             fontSize: "16px",
//             outline: "none",
//           }}
//         />

//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           style={{
//             padding: "10px",
//             borderRadius: "5px",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             background: "rgba(255, 255, 255, 0.15)",
//             color: "black",
//             fontSize: "16px",
//             outline: "none",
//           }}
//         >
//           <option value="All">All Categories</option>
//           <option value="Indoor Plant">Indoor Plant</option>
//           <option value="Outdoor Plant">Outdoor Plant</option>
//         </select>
//       </div>

//       {/* Grid container for plant cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5, 1fr)",
//           gap: "15px",
//           justifyContent: "center",
//           padding: "50px",
//         }}
//       >
//         {filteredPlants.length > 0 ? (
//           filteredPlants.map((plant) => <Plant key={plant._id} plant={plant} onDelete={handleDelete} />)
//         ) : (
//           <p style={{ color: "white", textAlign: "center", gridColumn: "span 5" }}>No plants found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#28a745",
//   border: "none",
//   borderRadius: "5px",
//   color: "white",
//   fontSize: "16px",
//   cursor: "pointer",
// };

// export default MyPlants;



import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Plant from "./Plant";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import addPlantImg from './img/add.png'; // Add button image

const URL = "http://localhost:5000/plants";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setPlants(data.plants));
  }, []);

  const handleDelete = (deletedPlantId) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant._id !== deletedPlantId));
  };

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.plantName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || plant.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const generateReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Plant Care Report", 20, 20);

    const categoryCounts = plants.reduce(
      (counts, plant) => {
        if (plant.category === "Indoor Plant") counts.indoor += 1;
        else if (plant.category === "Outdoor Plant") counts.outdoor += 1;
        return counts;
      },
      { indoor: 0, outdoor: 0 }
    );

    doc.setFontSize(16);
    doc.text(`Indoor Plants: ${categoryCounts.indoor}`, 20, 40);
    doc.text(`Outdoor Plants: ${categoryCounts.outdoor}`, 20, 50);

    doc.text("Plant List:", 20, 60);
    let yPosition = 70;
    filteredPlants.forEach((plant) => {
      doc.text(`Name: ${plant.plantName}`, 20, yPosition);
      doc.text(`Category: ${plant.category}`, 20, yPosition + 10);
      doc.text(`Description: ${plant.description}`, 20, yPosition + 20);
      doc.text(`Watering Frequency: ${plant.wateringFrequency}`, 20, yPosition + 30);
      yPosition += 40;
    });

    doc.save("Plant_Care_Report.pdf");
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "left", color: "white", paddingLeft: "40px" }}>My Plants</h1>

      {/* Generate Report Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={generateReport} style={buttonStyle}>
          Download Report (PDF)
        </button>
      </div>

      {/* Search and Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInputStyle}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={selectStyle}
        >
          <option value="All">All Categories</option>
          <option value="Indoor Plant">Indoor Plant</option>
          <option value="Outdoor Plant">Outdoor Plant</option>
        </select>
      </div>

      {/* Grid container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "15px",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        {/* Add Plant Card First */}
        <div
          onClick={() => navigate("/addplant")}
          style={{
            width: '183px',
            height: '245px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginLeft: '30px',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src={addPlantImg}
            alt="Add Plant"
            style={{ width: '100px', height: '100px', marginBottom: '10px' }}
          />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: 'white' }}>Add New Plant</h2>
        </div>

        {/* Plant Cards */}
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <Plant key={plant._id} plant={plant} onDelete={handleDelete} />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center", gridColumn: "span 5" }}>
            No plants found.
          </p>
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const searchInputStyle = {
  padding: "10px",
  width: "500px",
  borderRadius: "5px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "rgba(255, 255, 255, 0.15)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

const selectStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "rgba(255, 255, 255, 0.15)",
  color: "black",
  fontSize: "16px",
  outline: "none",
};

export default MyPlants;
