const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PetModel = require("./models/Pet");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://user:a1b2c3d4@cluster0.axwcu.mongodb.net/adopet?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/", async (req, res) => {
  const pet = new PetModel({
    petName: "Dunga",
    petAge: "2 anos",
    petSize: "Pequeno porte",
    petBehavior: "Calmo e dócil",
    petLocality: "Rio de Janeiro (RJ)",
  });

  try {
    await pet.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
