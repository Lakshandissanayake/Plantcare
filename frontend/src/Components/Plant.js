

// import './css/Plant.css';
// import { useNavigate } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';

// function Plants(props) {
//   const { _id, plantName, plantImage } = props.plant;
//   const navigate = useNavigate();

//   // Card styling
//   const cardStyle = {
//     width: '200px',
//     background: 'rgba(255, 255, 255, 0.15)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     borderRadius: '8px',
//     padding: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     backdropFilter: 'blur(12px)',
//     WebkitBackdropFilter: 'blur(12px)',
//     marginRight: '2px',
//     marginLeft: '30px',
//   };

//   const imgStyle = {
//     width: '100%',
//     height: '180px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//     marginBottom: '10px',
//   };

//   const titleStyle = {
//     fontSize: '1.05rem',
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: '0',
//     marginBottom: '5px',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '15px',
//   };

//   const buttonStyle = {
//     fontSize: '14px',
//     padding: '8px 12px',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   };

//   const viewButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     color: '#fff',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     transition: 'background-color 0.3s ease',
//   };

//   const deleteButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     color: '#fff',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     transition: 'background-color 0.3s ease',
//   };

//   const handleView = () => {
//     if (!_id) {
//       console.error('No ID provided');
//       return;
//     }
//     navigate(`/plant/${_id}`);
//   };

//   const deleteHandler = async () => {
//     if (!_id) {
//       console.error("Error: No plant ID provided for deletion");
//       return;
//     }

//     const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
//     if (!confirmDelete) return; // If user cancels, exit function

//     try {
//       const response = await axios.delete(`http://localhost:4000/plants/${_id}`);
//       console.log(response.data); // Log successful response
//       window.alert("Plant deleted successfully!"); // Show success message
//       navigate("/myplants"); // Navigate to updated list
//     } catch (error) {
//       console.error("Delete request failed:", error.response ? error.response.data : error.message);
//       window.alert("Failed to delete plant. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <div style={cardStyle}>
//         <img src={plantImage} alt={plantName} style={imgStyle} />
//         <h2 style={titleStyle}>{plantName}</h2>
//         <div style={buttonContainerStyle}>
//           <button
//             style={viewButtonStyle}
//             onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
//             onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
//             onClick={handleView}
//           >
//             View
//           </button>

//           <button
//             style={deleteButtonStyle}
//             onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
//             onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
//             onClick={deleteHandler}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plants;


// import './css/Plant.css';
// import { useNavigate } from 'react-router-dom';
// import React from 'react';
// import axios from 'axios';

// function Plants(props) {
//   const { _id, plantName, plantImage } = props.plant;
//   const navigate = useNavigate();

//   // Card styling
//   const cardStyle = {
//     width: '200px',
//     background: 'rgba(255, 255, 255, 0.15)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     borderRadius: '8px',
//     padding: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     backdropFilter: 'blur(12px)',
//     WebkitBackdropFilter: 'blur(12px)',
//     marginRight: '2px',
//     marginLeft: '30px',
//   };

//   const imgStyle = {
//     width: '100%',
//     height: '180px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//     marginBottom: '10px',
//   };

//   const titleStyle = {
//     fontSize: '1.05rem',
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: '0',
//     marginBottom: '5px',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '15px',
//   };

//   const buttonStyle = {
//     fontSize: '14px',
//     padding: '8px 12px',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   };

//   const viewButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     color: '#fff',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     transition: 'background-color 0.3s ease',
//   };

//   const deleteButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     color: '#fff',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     transition: 'background-color 0.3s ease',
//   };

//   const handleView = () => {
//     if (!_id) {
//       console.error('No ID provided');
//       return;
//     }
//     navigate(`/plant/${_id}`);
//   };

//   const deleteHandler = async () => {
//     if (!_id) {
//       console.error("Error: No plant ID provided for deletion");
//       return;
//     }

//     const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
//     if (!confirmDelete) return; // If user cancels, exit function

//     try {
//       await axios.delete(`http://localhost:4000/plants/${_id}`);
//       window.location.reload(); // Refresh the page to show updated list
//     } catch (error) {
//       console.error("Delete request failed:", error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div>
//       <div style={cardStyle}>
//         <img src={plantImage} alt={plantName} style={imgStyle} />
//         <h2 style={titleStyle}>{plantName}</h2>
//         <div style={buttonContainerStyle}>
//           <button
//             style={viewButtonStyle}
//             onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
//             onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
//             onClick={handleView}
//           >
//             View
//           </button>

//           <button
//             style={deleteButtonStyle}
//             onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
//             onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
//             onClick={deleteHandler}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plants;



import './css/Plant.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function Plants(props) {
  const { _id, plantName, plantImage } = props.plant;
  const navigate = useNavigate();

  // Card styling
  const cardStyle = {
    width: '200px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    marginRight: '2px',
    marginLeft: '30px',
  };

  const imgStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '1.05rem',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '0',
    marginBottom: '5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  };

  const buttonStyle = {
    fontSize: '14px',
    padding: '8px 12px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const handleView = () => {
    if (!_id) {
      console.error('No ID provided');
      return;
    }
    navigate(`/plant/${_id}`);
  };

  const deleteHandler = async () => {
    if (!_id) {
      console.error("Error: No plant ID provided for deletion");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:4000/plants/${_id}`);
      window.location.reload(); // Refresh to update
    } catch (error) {
      console.error("Delete request failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <div style={cardStyle}>
        {/* ✅ Fixed image source */}
        <img
          src={`http://localhost:4000/uploads/${plantImage}`}
          alt={plantName}
          style={imgStyle}
        />
        <h2 style={titleStyle}>{plantName}</h2>
        <div style={buttonContainerStyle}>
          <button
            style={viewButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
            onClick={handleView}
          >
            View
          </button>

          <button
            style={deleteButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#556B2F'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plants;
