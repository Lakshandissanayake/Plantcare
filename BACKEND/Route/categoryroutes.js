const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const Category = require("../Model/categorymodel");//insert model
const categorycontroller = require("../Controlers/catogerycontroller");//insert controller

router.get("/",categorycontroller.getAllcategories);
router.get("/:id", categorycontroller.getCategoryById);
// Image Upload Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/"); // Save images in public/uploads/
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Add a new category with an image
router.post("/add", upload.single("photo"), async (req, res) => {
    try {
        const { name, description, careInstruction, noOfplants } = req.body;
        let photo = req.file ? req.file.filename : null; // Save path or null

        if (!name || !description || !careInstruction || noOfplants === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newCategory = new Category({
            name,
            description,
            careInstruction,
            photo,
            noOfplants,
        });

        await newCategory.save();
        res.status(201).json({ message: "Category added successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Error adding category", error: error.message });
    }
});

//update careInstruction or noOfplants
router.put("/update/:id", async (req, res) => {
    try {
        const { careInstruction, noOfplants } = req.body;
        const parsedNoOfplants = noOfplants !== undefined ? Number(noOfplants) : undefined;

        // Check if at least one field is provided for update
        if (!careInstruction && noOfplants === undefined) {
            return res.status(400).json({ message: "Provide careInstruction or noOfplants to update" });
        }

        // Find the category and update only provided fields
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                ...(careInstruction && { careInstruction }), // Update only if provided
                ...(typeof parsedNoOfplants !== "undefined" && { noOfplants: parsedNoOfplants }),
            },
            { new: true } // Return the updated document
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Category updated successfully",
            category: updatedCategory,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        // Find the category by ID
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        // Check if noOfplants is less than 1
        if (category.noOfplants >= 2) {
            return res.status(400).json({
                message: "Cannot delete category. There are still plants in this category.",
            });
        }

        // Delete the category if noOfplants is less than 1
        await Category.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
});


//export
module.exports =router;