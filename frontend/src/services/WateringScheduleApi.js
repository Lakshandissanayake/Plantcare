import axios from "axios";

// Function to fetch the watering schedule
export const getWateringSchedule = async () => {
  try {
    
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/water/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching watering schedule:", error);
    return [];
  }
};
//getidtowaterscheduling
export const getIdtoWateringSchedule = async (pid) => {
  try {
    const res = await axios.get(`http://localhost:4000/water/${pid}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching watering schedule:", err);
    throw err;
  }
};


// Function to delete a watering schedule entry
export const deleteWateringSchedule = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/water/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting schedule:", error);
    return false;
  }
};

// Function to insert a watering schedule entry (dummy function)
export const insertWateringSchedule = async (insertData) => {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/water/`, insertData);
    return true;
  } catch (error) {
    console.error("Error inseting schedule:", error);
    return false;
  }
};

// Function to edit a watering schedule entry (dummy function)
export const editWateringSchedule = async (id, updatedData) => {
  try {
    await axios.put(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/water/${id}`, updatedData);
    return true;
  } catch (error) {
    console.error("Error updating schedule:", error);
    return false;
  }
};
