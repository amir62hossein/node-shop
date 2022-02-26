const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("access Denied");
  }

  try {
    const verified = jwt.verify(token, "powerfulKey");
    req.user = verified;
    next()
  } catch (err) {
    res.send(err);
  }
};
