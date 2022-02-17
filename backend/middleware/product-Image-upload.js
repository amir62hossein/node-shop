const multer = require("multer");

const productImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/product');
  }, 
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) 
  },
});


module.exports = productImageStorage