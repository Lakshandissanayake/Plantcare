// const express = require("express");
// const router = express.Router();

// //insert model
// const Plant = require("../Model/plantModel");

// //insert user controller
// const plantController = require("../Controlers/plantController");

// router.get("/", plantController.getAllPlants);
// router.post("/", plantController.addPlants);
// router.get("/:pid", plantController.plantgetById);
// router.put("/:pid", plantController.updatePlant);
// router.delete("/:pid", plantController.deletePlant);


// //export
// module.exports = router;


const express = require("express");
const router = express.Router();
const plantController = require("../Controlers/plantController");
const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Routes
router.get("/", plantController.getAllPlants);
router.post("/", upload.single("plantImage"), plantController.addPlants);
router.get("/:pid", plantController.plantgetById);
//router.put("/:pid", plantController.updatePlant);
router.put("/:pid", upload.single("plantImage"), plantController.updatePlant);

router.delete("/:pid", plantController.deletePlant);

module.exports = router;
