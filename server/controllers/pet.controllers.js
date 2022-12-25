const Pet = require("../models/pet.model");

module.exports.getAllPets = (req, res) => {
  Pet.find()
    .then((allPets) => res.json(allPets))
    .catch((err) => res.json({ message: "Missing pets", err }));
};

module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((newPet) => res.json(newPet))
    .catch((err) => res.status(400).json({ message: "Pet not created!", err }));
};

module.exports.getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((onePets) => res.json(onePets))
    .catch((err) => res.json({ message: "Missing pet", err }));
};
module.exports.editPet = (req, res) => {
  Pet.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((newPet) => res.json(newPet))
    .catch((err) => res.json({ message: "Couldn't edit pet", err }));
};

module.exports.deletePets = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((deletedOne) => res.json(deletedOne))
    .catch((err) => res.json({ message: "Couldn't delete the pet", err }));
};
