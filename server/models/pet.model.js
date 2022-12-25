const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const PetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory!"],
      minLength: [3, "Name can't be less than 3 chars!"],
      unique: true,
    },
    type: {
      type: String,
      minLength: [3, "Type can't be less than 3 chars!"],
    },
    description: {
      type: String,
      minLength: [3, "Description can't be less than 3 chars!"],
    },
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },

    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);
PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
