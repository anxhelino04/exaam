const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/ourPetsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log("Not connected", err));
