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
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  // reviews: [{type: Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = model("Pet", schema);
