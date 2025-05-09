const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterScheduleSchema = new Schema({

      pid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant',  // Reference to the Plant model
        required: true, // Ensure every growth record is tied to a plant
    },
    userid: {
        type: String,
        required: true
    },
    plantname: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    wateringtime: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model(
    "WaterSchedule", waterScheduleSchema);  