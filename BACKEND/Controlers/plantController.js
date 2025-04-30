// const Plant = require("../Model/plantModel");

// //display
// const getAllPlants = async(req, res, next) => {
   
//     let Plants;

//     //get plants
//     try{
//         plants = await Plant.find();
//     }catch (err){
//         console.log(err);
//     }

//     // not found
//     if(!plants){
//         return res.status(404).json({message:"Plant not found"});
//     }

//     //display all plants
//     return res.status(200).json({plants});

// };

// //data insert
// const addPlants = async (req, res, next) => {
//     const { 
//         plantName,
//         category,
//         description,
//         plantArea,
//         wateringFrequency,
//         //addedDate,
//         plantImage
//     } = req.body;

    

//     let plants;

//     try {
//         plants = new Plant({
//             plantName,
//             category,
//             description,
//             plantArea,
//             wateringFrequency,
//             //addedDate,
//             plantImage
//         });
//         await plants.save();
//     } catch (err) {
//         console.log(err);
//     }

//     //not insert plants
//     if(!plants){
//         return res.status(404).json({message:"Unable to add plants"});
//     }
//     return res.status(200).json({plants});
// }

// //get by id
// const plantgetById = async(req, res,next) => {
//     const pid = req.params.pid;

//     let plants;

//     try{
//         plants = await Plant.findById(pid);
//     }catch (err){
//         console.log(err);
//     }

//     //not available plant
//     if(!plants){
//         return res.status(404).json({message:"Plant not found"});
//     }
//     return res.status(200).json({plants});
    
// }

// //Update plant details
// const updatePlant = async (req, res, next) => {

//     const pid = req.params.pid;

//     const { 
//         plantName,
//         category,
//         description,
//         plantArea,
//         wateringFrequency,
//         //addedDate,
//         plantImage
//     } = req.body;

//     let plants;

//     try{
//         plants = await Plant.findByIdAndUpdate(pid,
//             {
//                 plantName:plantName,
//                 category:category,
//                 description:description,
//                 plantArea:plantArea,
//                 wateringFrequency:wateringFrequency,
//                 plantImage:plantImage
//             });
//             plants = await plants.save();
//     }catch (err){
//         console.log(err);
//     }

//     if(!plants){
//         return res.status(404).json({message:"Unable to update"});
//     }
//     return res.status(200).json({plants});

// }

// //delete plant
// const deletePlant = async (req, res, next) => {

//     const pid = req.params.pid;

//     let plant;

//     try{
//         plant = await Plant.findByIdAndDelete(pid);
//     }catch (err){
//         console.log(err);
//     }

//     //not available plant
//     if(!plant){
//         return res.status(404).json({message:"Unable to delete"});
//     }
//     return res.status(200).json({plant});
    
// }


// exports.getAllPlants = getAllPlants;
// exports.addPlants = addPlants;
// exports.plantgetById = plantgetById;
// exports.updatePlant = updatePlant;
// exports.deletePlant = deletePlant;


const Plant = require("../Model/plantModel");
const path = require("path");

// Get all plants
const getAllPlants = async (req, res, next) => {
    let plants;

    try {
        plants = await Plant.find();
    } catch (err) {
        console.log(err);
    }

    if (!plants) {
        return res.status(404).json({ message: "Plant not found" });
    }

    return res.status(200).json({ plants });
};

// Add plant with image upload
const addPlants = async (req, res, next) => {
    const {
        plantName,
        category,
        description,
        plantArea,
        wateringFrequency
    } = req.body;

    const plantImage = req.file ? req.file.filename : "";

    let plant;

    try {
        plant = new Plant({
            plantName,
            category,
            description,
            plantArea,
            wateringFrequency,
            plantImage
        });
        await plant.save();
    } catch (err) {
        console.log(err);
    }

    if (!plant) {
        return res.status(404).json({ message: "Unable to add plant" });
    }

    return res.status(200).json({ plant });
};

// Get plant by ID
const plantgetById = async (req, res, next) => {
    const pid = req.params.pid;
    let plant;

    try {
        plant = await Plant.findById(pid);
    } catch (err) {
        console.log(err);
    }

    if (!plant) {
        return res.status(404).json({ message: "Plant not found" });
    }

    return res.status(200).json({ plant });
};

// Update plant
const updatePlant = async (req, res, next) => {
    const pid = req.params.pid;

    const {
        plantName,
        category,
        description,
        plantArea,
        wateringFrequency
    } = req.body;

    let updateData = {
        plantName,
        category,
        description,
        plantArea,
        wateringFrequency
    };

    if (req.file) {
        updateData.plantImage = req.file.filename;
    }

    let plant;

    try {
        plant = await Plant.findByIdAndUpdate(pid, updateData, { new: true });
    } catch (err) {
        console.log(err);
    }

    if (!plant) {
        return res.status(404).json({ message: "Unable to update" });
    }

    return res.status(200).json({ plant });
};

// Delete plant
const deletePlant = async (req, res, next) => {
    const pid = req.params.pid;

    let plant;

    try {
        plant = await Plant.findByIdAndDelete(pid);
    } catch (err) {
        console.log(err);
    }

    if (!plant) {
        return res.status(404).json({ message: "Unable to delete" });
    }

    return res.status(200).json({ plant });
};

exports.getAllPlants = getAllPlants;
exports.addPlants = addPlants;
exports.plantgetById = plantgetById;
exports.updatePlant = updatePlant;
exports.deletePlant = deletePlant;
