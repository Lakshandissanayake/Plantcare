
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Plant from './Plant';
import addPlantImg from './img/add.png'; // Import the add button image
import rightSideImg from '../Components/img/Group_11.png'; // Import the right-side image
import bgImage from '../Components/img/Rectangle_5.png';

const Home = () => {
  const [recentPlants, setRecentPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/plants')
      .then(response => {
        const sortedPlants = response.data.plants
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setRecentPlants(sortedPlants);
      })
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  return (
    <div>
      <NavBar />
      
      <h3 style={{
        color: 'white', 
        padding: '10px 20px', // Add padding
        display: 'flex', 
        alignItems: 'center', // Align image and text
        gap: '10px', // Space between image and text
        marginLeft:'45px',
        fontSize: '25px',
      }}>
        <img 
          src="./img/1.png" // Replace with your image path
          alt="Plant Icon"
          style={{ width: '30px', height: '30px' }} // Set small size
        />
        Plants
      </h3>

      {/* Flex container for left and right sections */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start', // Align both sections at the top
        justifyContent: 'space-between',
        padding: '20px',
      }}>
        
        {/* Left side - Plant Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '2px',  
          justifyContent: 'left', 
          flex: 1, // Makes sure this takes available space on the left
        }}>
          {recentPlants.map((plant, index) => (
            <Plant key={index} plant={plant} />
          ))}

          {/* Add Plant Card */}
          <div 
            onClick={() => navigate('/addplant')} 
            style={{
              width: '200px',
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
        </div>

        {/* Right side - Reminder & Image with Background */}
        <div style={{ 
          flex: 0.4,  // Decreased width
          height: '500px', // Increased height
          textAlign: 'center',
          minWidth: '200px', // Prevent shrinking
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: '80% auto',  // Ensure the width is 100% and height is auto, expanding only downwards
          backgroundPosition: 'top center', // Keep the top of the image fixed
          backgroundRepeat: 'no-repeat', 
          padding: '20px', 
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // Align items to the top of the container
        }}>
          {/* Reminder Text */}
          <p style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px', // Space before image
            textAlign: 'left', // Align text to the left
            width: '100%',  // Ensure it takes up the full width
            paddingLeft: '20px',
            marginLeft:'80px',
            marginTop:'50px' // Add padding to the left for proper alignment
          }}>
            Reminder
          </p>

          {/* Right-side Image */}
          <img 
            src={rightSideImg} 
            alt="Right Side" 
            style={{ 
              width: '100%', 
              maxWidth: '250px', 
              height: 'auto', 
              borderRadius: '8px',
              marginTop: '15px' // Space between text and image
            }} 
          />

          {/* Text below the image */}
          <p style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'left', 
            width: '100%',
            paddingLeft: '20px', // Add padding to the left for proper alignment
            marginTop: '25px', // Space before the new text
            marginLeft:'80px',
          }}>
            watering Snake Plant - 3/15  <br/> <br/>
            Fertilizing plant - 3/25
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;

