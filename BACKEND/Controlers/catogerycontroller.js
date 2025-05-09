const Category = require("../Model/categorymodel");
const Plant = require("../Model/plantModel");

const getAllcategories = async (req, res) => {
    let categories;
    try {
        categories = await Category.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching categories" });
    }

    if (!categories || categories.length === 0) {
        return res.status(404).json({ message: "No categories found" });
    }

    return res.status(200).json({ categories });
};

exports.getAllcategories = getAllcategories;
const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching category by ID" });
    }
};

exports.getCategoryById = getCategoryById;
