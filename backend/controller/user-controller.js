const userSchema = require("../models/user-model");
const _ = require("lodash");

const passwordService = require("../services/hash")

async function createUser(req, res) {
  let user = await userSchema.findOne({ email: req.body.email });
  if (user)
    return res
      .status(400)
      .json({ message: "کاربری با این ایمیل ثبت نام کرده" });

  let { name, email, password } = req.body;
  const profilePic = req.file.path;

  password = await passwordService.encodingPassword(password)

  

  const newUser = userSchema({
    name: name,
    email: email,
    password: password,
    profilePic: profilePic,
  });

  try {
    const user = await newUser.save();
    res.json(_.pick(user, ["_id", "name", "email"]));
  } catch (err) {
    res.json({ error: err.message });
  }
}
exports.createUser = createUser;
