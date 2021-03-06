const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  gender: { type: String, required: [true, "Gender is required"],  enum: ["male", "female"], },
  img: { type: String, required: [true, "Image is required"] },
  description: { type: String },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["dog", "cat"],
  },
  neutered: {type:Boolean, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  interested: [{type: Schema.Types.ObjectId, ref: "User", default: []}],
});

module.exports = model("Pet", schema);
