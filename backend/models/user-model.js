const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minlength: [5, "طول پسورد باید بیشتر از پنج عضو باشد"],
  },
  profilePic: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
