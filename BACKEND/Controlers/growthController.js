const Growth = require("../Model/growthModel");
const Plant = require("../Model/plantModel");

// Add Growth Record
const addGrowthRecord = async (req, res) => {
    console.log("Received body:", JSON.stringify(req.body, null, 2));
    console.log("Received file:", req.file);

    try {
        const { Date, Height, L_count, Note } = req.body;
        const pid = req.params.pid;
        const image = req.file;

        // Check if file was uploaded
        if (!image) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        // Validate required fields
        if (!Date || !Height || !L_count || !Note) {
            return res.status(400).json({ message: 'Missing required fields.', fields: { Date, Height, L_count, Note } });
        }

        const imagePath = `/public/${image.filename}`;
        console.log("Image path:", imagePath);

        // Create growth record
        const growthRecord = new Growth({
            pid,
            Date,
            Height,
            L_count,
            file: imagePath,
            Note,
        });

        await growthRecord.save();

        // Add record to plant
        const plant = await Plant.findById(pid);

        if (!plant) {
            return res.status(404).json({ message: "Plant not found" });
        }

        // Safely push to array
        if (!plant.growthRecords) {
            plant.growthRecords = [];
        }

        plant.growthRecords.push(growthRecord._id);
        await plant.save();

        return res.status(201).json({ message: 'Growth record added successfully.', growthRecord });

    } catch (err) {
        console.error("Error saving growth record:", err);
        return res.status(500).json({ message: 'Error adding growth record.', error: err.message });
    }
};

// Get all growth records
const getAllGrowthRecords = async (req, res) => {
    try {
        const growthRecords = await Growth.find();

        const recordsWithImages = growthRecords.map(record => ({
            ...record._doc,
            image: `${req.protocol}://${req.get("host")}/public/${record.file}`
        }));

        res.status(200).json(recordsWithImages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get growth records by plant ID
const getGrowthRecordBypid = async (req, res) => {
    try {
        const pid = req.params.pid;
        const growthRecords = await Growth.find({ pid });

        if (!growthRecords || growthRecords.length === 0) {
            return res.status(404).json({ error: "No growth records found for this plant." });
        }

        const recordsWithImages = growthRecords.map(record => ({
            ...record._doc,
            image: `${req.protocol}://${req.get("host")}/public/${record.file}`
        }));

        res.status(200).json(recordsWithImages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single growth record by growthId
const getGrowthRecordByGrowthId = async (req, res) => {
    try {
        const { growthId } = req.params;
        const growthRecord = await Growth.findById(growthId);

        if (!growthRecord) {
            return res.status(404).json({ error: "Growth record not found." });
        }

        const recordWithImage = {
            ...growthRecord._doc,
            image: `${req.protocol}://${req.get("host")}/public/${growthRecord.file}`
        };

        res.status(200).json(recordWithImage);
    } catch (err) {
        console.error("Error fetching growth record:", err);
        res.status(500).json({ error: err.message });
    }
};

// Update growth record
const updateGrowthRecord = async (req, res) => {
    try {
        const { id: growthRecordId } = req.params;
        const { height, L_count, Note } = req.body;

        const updateData = {};
        if (height) updateData.Height = height;
        if (L_count) updateData.L_count = L_count;
        if (Note) updateData.Note = Note;
        if (req.file) updateData.file = `/public/${req.file.filename}`;

        const growthRecord = await Growth.findByIdAndUpdate(growthRecordId, updateData, { new: true });

        if (!growthRecord) return res.status(404).json({ error: "Growth record not found" });

        return res.status(200).json({ message: "Growth record updated!", data: growthRecord });
    } catch (err) {
        console.error("Error updating growth record:", err);
        return res.status(500).json({ error: err.message });
    }
};

// Delete growth record
const deleteGrowthRecord = async (req, res) => {
    try {
        const deletedGrowth = await Growth.findByIdAndDelete(req.params.id);

        if (!deletedGrowth) {
            return res.status(404).json({ error: "Growth record not found" });
        }

        res.status(200).json({ message: "Growth record deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addGrowthRecord,
    getAllGrowthRecords,
    getGrowthRecordBypid,
    updateGrowthRecord,
    deleteGrowthRecord,
    getGrowthRecordByGrowthId
};
