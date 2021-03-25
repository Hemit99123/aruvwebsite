const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  information: {
    type: String,
    required: true,
  } , 
  date: {
    type: Date,
    required: true,
  }
});

module.exports = new mongoose.model("Item", ItemSchema);