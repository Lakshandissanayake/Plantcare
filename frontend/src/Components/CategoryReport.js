import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const URL = "http://localhost:5000/plants"; // API endpoint for fetching plants

function CategoryReport() {
  const [categoryData, setCategoryData] = useState({ indoor: 0, outdoor: 0 });

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        const plants = res.data.plants;

        // Count Indoor and Outdoor Plants
        const indoorCount = plants.filter((plant) => plant.category === "Indoor Plant").length;
        const outdoorCount = plants.filter((plant) => plant.category === "Outdoor Plant").length;

        setCategoryData({ indoor: indoorCount, outdoor: outdoorCount });
      })
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Chart Data
  const data = {
    labels: ["Indoor Plants", "Outdoor Plants"],
    datasets: [
      {
        data: [categoryData.indoor, categoryData.outdoor],
        backgroundColor: ["#4CAF50", "#FF9800"], // Green for Indoor, Orange for Outdoor
        hoverBackgroundColor: ["#45A049", "#E68900"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "black" }}>Plant Category Distribution</h2>
      <Pie data={data} />
    </div>
  );
}

export default CategoryReport;
