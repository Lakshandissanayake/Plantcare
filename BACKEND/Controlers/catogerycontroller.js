const Category =require("../model/categorymodel");
const getAllcategories =async (req, res)=>{
    let categorys;
    //get all categorys
    try{
        categories = await Category.find();

    }catch(err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching categories" });
    }
    //not found
    if (!categories || categories.length === 0) {
        return res.status(404).json({ message: "No categories found" });
    }
    //disply all users
    return res. status(200).json({ categories });
    
}
exports.getAllcategories = getAllcategories;