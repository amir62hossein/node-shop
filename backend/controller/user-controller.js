const userSchema = require("../models/user-model");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const passwordService = require("../services/hash");
const jwt = require("jsonwebtoken")

async function createUser(req, res) {
  let user = await userSchema.findOne({ email: req.body.email });
  if (user)
    return res
      .status(400)
      .json({ message: "کاربری با این ایمیل ثبت نام کرده" });

  const { name, email, password } = req.body;
  const profilePic = req.file.path;

  const newUser = userSchema({
    name: name,
    email: email,
    password: password,
    profilePic: profilePic,
  });

  newUser.password = await passwordService.encodingPassword(password);

  try {
    const user = await newUser.save();
    res.json(_.pick(user, ["_id", "name", "email"]));
  } catch (err) {
    res.json({ error: err.message });
  }
}

async function loginUser(req, res) {
  let user = await userSchema.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("ایمیل یا رمز عبور اشتباه است");

  const validateUser = bcrypt.compare(req.body.password, user.password);
  if (!validateUser)
    return res.status(400).send("ایمیل یا رمز عبور اشتباه است");


    const token = jwt.sign({ _id : user._id} , "powerfulKey")

  res.json({token});
}
exports.createUser = createUser;
exports.loginUser = loginUser;
