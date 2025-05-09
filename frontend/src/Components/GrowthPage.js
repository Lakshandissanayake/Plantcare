import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Filler } from "chart.js";
import Nav from "./NavBar";
import { saveAs } from "file-saver";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GrowthPage = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    if (!pid) return;

    const fetchGrowthData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/growth/${pid}`
        );
        setData(response.data);

        // Log the image path to the console
        if (response.data.length > 0) {
          console.log("Image path:", response.data[0].image); // Log the image path of the first growth record
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGrowthData();
  }, [pid]);

  const deleteGrowthRecord = async (growthId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this growth record?");
    if (!confirmDelete) return; 
  
    try {
      const response = await axios.delete(`http://localhost:4000/growth/${growthId}`);
      if (response.status === 200) {
        setData((prevData) => prevData.filter((item) => item._id !== growthId));
        alert("Growth record deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting growth record:", error);
      alert("Failed to delete growth record.");
    }
  };
  

  const sortedData = [...data].sort(
    (a, b) => new Date(b.Date) - new Date(a.Date)
  );

  const filteredData = sortedData.filter((growth) =>
    searchDate
      ? new Date(growth.Date).toLocaleDateString() ===
        new Date(searchDate).toLocaleDateString()
      : true
  );

  const latestGrowth = filteredData.length > 0 ? filteredData[0] : null;

  const chartData = {
    labels: filteredData.map((growth) =>
      new Date(growth.Date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Height (cm)",
        data: filteredData.map((growth) => growth.Height),
        borderColor: "rgb(212, 123, 29)",
        backgroundColor: "rgba(192, 116, 75, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Leaf Count",
        data: filteredData.map((growth) => growth.L_count),
        borderColor: "rgb(97, 217, 86)",
        backgroundColor: "rgba(104, 255, 99, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: { size: 14, family: "Arial", weight: "bold" },
        },
      },
      tooltip: {
        titleColor: "white",
        bodyColor: "white",
        bodyFont: { size: 14, family: "Arial", weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          font: { size: 14, family: "Arial", weight: "bold" },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: { size: 14, family: "Arial", weight: "bold" },
        },
      },
    },
  };

  const generateReport = () => {
    const reportData = sortedData.map((growth) => {
      const createdDate = new Date(growth.created);
      const validCreatedDate =
        createdDate instanceof Date && !isNaN(createdDate)
          ? createdDate.toLocaleDateString("en-GB")
          : "Invalid Date";

      return {
        formattedData: `Updated date -> ${new Date(
          growth.Date
        ).toLocaleDateString("en-GB")} | ${growth.Height}cm Height | ${
          growth.L_count
        } Leafs`,
      };
    });

    const csvHeader = "Growth Report\n";
    const csvRows = reportData.map((row) => row.formattedData).join("\n");
    const csvContent = csvHeader + csvRows;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "growth_report.csv");
  };

  const openGrowthForm = () => {
    if (!pid) return;
    navigate(`/growth/${pid}`);
  };

  const openGrowth = (growthId) => {
    if (!growthId) return;
    navigate(`/upgrowth/${growthId}`);
  };

  const styles = {
    body: {
      background:
        "url(../img/photo-1520412099551-62b6bafeb5bb.jpeg) no-repeat center/cover",
      margin: 0,
      fontFamily: "Arial, sans-serif",
    },
    title: {
      backgroundColor: "#c0f18810",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem 1rem",
      margin: "3em",
      borderRadius: "5em",
      border: "2px solid #91b46789",
      fontWeight: 550,
      textTransform: "uppercase",
      backdropFilter: "blur(20px)",
    },
    state: {
      background: "url(../img/Rectangle-2.png) no-repeat",
      width: "943px",
      height: "251px",
      backdropFilter: "blur(3px)",
      color: "#ffffff",
      padding: "1em",
      paddingLeft: "3em",
      display: "flex",
    },
    stateCHART: {
      background: "url(../img/Rectangle---2.png) no-repeat",
      width: "943px",
      height: "251px",
      backdropFilter: "blur(3px)",
      color: "#ffffff",
      padding: "1em",
      paddingLeft: "3em",
      display: "flex",
    },
    image: {
      width: "15px",
      marginLeft: "650px",
      marginTop: "-230px",
    },
    growthbutton: {
      color: "#f1f1f1",
      backgroundColor: "#c0f18810",
      padding: ".5em",
      borderRadius: ".5em",
      cursor: "pointer",
      transition: ".8s",
    },
    get: {
      marginInlineStart: "35%",
      width: "25%",
      marginTop: "2em",
      marginBottom: "2em",
      padding: ".4em",
      color: "#f1f1f1",
      backgroundColor: "#c0f18810",
      backdropFilter: "blur(20px)",
      borderRadius: "2em",
      transition: ".8s",
      cursor: "pointer",
    },
    getHover: {
      backgroundColor: "#2542049d",
    },
    searchBar: {
      display: "flex",
      justifyContent: "left",
      marginBottom: "1em",
      marginTop: "2em",
    },
    searchInput: {
      padding: "0.5em",
      fontSize: "16px",
      borderRadius: "5px",
      backgroundColor: " #91b46789",
      border: "2px solid #91b46789",
      width: "250px",
      marginRight: "1em",
    },
    searchButton: {
      backgroundColor: "#c0f18810",
      padding: "0.5em 1em",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      color: "#fff",
      transition: "0.3s",
    },
    reminder: {
      position: "fixed",
      right: "3em",
      top: "65%",
      background: "url(../img/Rectangle_5.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "263px",
      height: "600px",
      color: "#f1f1f1",
      paddingTop: "1em",
    },
  };

  return (
    <div style={styles.body}>
      <Nav />
      <div className="left">
        <h1 style={{ color: "#fff", marginBottom: ".5em" }}>
          Current Growth Stats
        </h1>

        <div style={styles.searchBar}>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.state}>
          {loading ? (
            <p>Loading growth data...</p>
          ) : latestGrowth ? (
            <div>
              <div>
                <h3>
                  🌱 Added on:{" "}
                  {new Date(latestGrowth.created).toLocaleDateString()}
                </h3>
                <h3>📏 Current Height: {latestGrowth.Height} cm</h3>
                <h3>🍃 Leaf Count: {latestGrowth.L_count} Leaves</h3>
                <h3>
                  📆 Last Update:{" "}
                  {new Date(latestGrowth.Date).toLocaleDateString()}
                </h3>
              </div>

              <div style={styles.image}>
                <img
                  src={
                    latestGrowth.image
                      ? `http://localhost:4000/public/${latestGrowth.image
                          .split("/")
                          .pop()}`
                      : "defaultImagePath.jpg" // Handle default image
                  }
                  alt="Plant Growth"
                  className="growth-img"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    position: "relative",
                    right: "-20px",
                    top: "30px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          ) : (
            <p>No growth data available.</p>
          )}
        </div>



        <div>
          <button style={styles.growthbutton} onClick={openGrowthForm}>
            ADD GROWTH
          </button>
          <button
            style={styles.growthbutton}
            onClick={() =>
              latestGrowth?._id && openGrowth(latestGrowth._id)
            }
          >
            EDIT
          </button>
          <button
            style={styles.growthbutton}
            onClick={() =>
              latestGrowth?._id && deleteGrowthRecord(latestGrowth._id)
            }
          >
            DELETE
          </button>
        </div>

        <h1 style={{ color: "#fff" }}>Growth Chart</h1>
        <div style={styles.stateCHART}>
          <div style={{ width: "800px", height: "230px", color: "white" }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        <h1 style={{ color: "#fff" }}>Growth Timeline</h1>
        <div style={styles.state}>
          {filteredData.map((growth) => (
            <div key={growth._id}>
              <h3>✅ {new Date(growth.created).toLocaleDateString()}</h3>
              <h3>📏 Height: {growth.Height} cm</h3>
              <h3>🍃 Leaf Count: {growth.L_count}</h3>
              <h3>
                📆 Last Update: {new Date(growth.Date).toLocaleDateString()}
              </h3>
            </div>
          ))}
        </div>

        <button
          style={styles.get}
          onClick={generateReport}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.getHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.get.backgroundColor)
          }
        >
          GET REPORT
        </button>
      </div>

      <div className="right">
        <div style={styles.reminder}>
          <h3 style={{ marginLeft: "10px" }}>REMINDER</h3>
          <img
            src="/img/Group_11.png"
            alt="Reminder"
            style={{ width: "250px", height: "auto", marginLeft: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GrowthPage;
