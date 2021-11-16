const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  age: { type: Number, required: [true, 'Age is required'] },
  sex: { type: String, required: [true, 'Sex is required'] },
  img: { type: String, required: [true, 'Image is required'] },
  // category: { type: String, required:[true, 'Category is required'],  enum: ['house', 'apartment', 'room', 'other'] },
  // description: { type: String },
  // owner: { type: Schema.Types.ObjectId, ref: "User" },
  // reviews: [{type: Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = model("Pet", schema);
