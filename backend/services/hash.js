const bcrypt = require("bcrypt");

async function encodingPassword(nonHashPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(nonHashPassword, salt);
  return hashedPassword;
}





exports.encodingPassword = encodingPassword