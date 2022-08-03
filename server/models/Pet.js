const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  petAge: {
    type: String,
    required: true,
  },
  petSize: {
    type: String,
    required: true,
  },
  petBehavior: {
    type: String,
    required: true,
  },
  petLocality: {
    type: String,
    required: true,
  },
  petImage: {
    type: String,
    required: true,
  },
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
