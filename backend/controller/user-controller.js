const userSchema = require("../models/user-model");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const profilePic = req.file.path;
  const newUser = userSchema({
    name: name,
    email: email,
    password: password,
    profilePic: profilePic,
  });

  try {
    const user = await newUser.save();
    res.json({ user: user });
  } catch (err) {
    res.json({ error: err.message });
  }
}
exports.createUser = createUser