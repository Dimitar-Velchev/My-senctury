const { Schema, model } = require("mongoose");

const schema = new Schema({
  username: { type: String },
  email: { type: String },
  hashedPassword: { type: String },
  offered: [{type: Schema.Types.ObjectId, ref: "Pet", default: []}],
  // booked: [{type: Schema.Types.ObjectId, ref: "Listing", default: []}],
});

module.exports = model("User", schema);
