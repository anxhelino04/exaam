const PetController = require("../controllers/pet.controllers");

module.exports = (app) => {
  app.get("/api/getAllPets", PetController.getAllPets);
  app.post("/api/createPet", PetController.createPet);
  app.get("/api/getPet/:id", PetController.getOnePet);
  app.put("/api/editPet/:id", PetController.editPet);
  app.delete("/api/deletePet/:id", PetController.deletePets);
};
