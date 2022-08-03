const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PetModel = require("./models/Pet");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://user:a1b2c3d4@cluster0.axwcu.mongodb.net/adopet?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/adicionar-pet", async (req, res) => {
  const petName = req.body.petName;
  const petAge = req.body.petAge;
  const petSize = req.body.petSize;
  const petBehavior = req.body.petBehavior;
  const petLocality = req.body.petLocality;
  const petImage = req.body.petImage;

  const pet = new PetModel({
    petName,
    petAge,
    petSize,
    petBehavior,
    petLocality,
    petImage,
  });

  try {
    await pet.save();
    res.send("Pet adicionado");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
