require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const plantRoutes = require("./Route/plantRoutes"); 
const growthRoutes = require("./Route/growthRoutes"); 
const router = require('./Route/waterSchedule');
const routes =require("./Route/categoryroutes");
const app = express();
app.use(express.json());
app.use(cors());

// Multer setup to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/'); // Path where files will be stored (ensure this folder exists)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique file names
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Accept only specific image formats
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file format. Only jpeg, jpg, png, gif allowed.'));
    }
  }
});

app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use("/public", express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads"))); 

// MongoDB connection setup
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connection success!"))
  .catch((err) => console.error("MongoDB Connection failed:", err));

// Routes setup
app.use("/plants", plantRoutes);   
app.use("/growth", growthRoutes(upload));
app.use("/water",router); 
app.use("/categories", routes);


app.use('/uploads', express.static('uploads'));


// General Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
