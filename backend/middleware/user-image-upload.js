const multer = require("multer");

const userImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/user"); 
  }, 
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});


module.exports = userImageStorage