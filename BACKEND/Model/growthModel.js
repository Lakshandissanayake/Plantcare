const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Growth Schema definition
const growthSchema = new Schema({
  pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',  // Reference to the Plant model
    required: true, // Ensure every growth record is tied to a plant
  },
  Date: {
    type: Date,
    required: true
  },
  Height: {
    type: Number,
    required: true
  },
  L_count: {
    type: Number,
    required: true
  },
  Note: {
    type: String,
    required: true
  },
  file: {
    type: String, // Image path
    required: false // Optional, could be null if no image
  },
}, { timestamps: true });

module.exports = mongoose.model('Growth', growthSchema);
