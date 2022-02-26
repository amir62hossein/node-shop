const expres = require("express");
const multer = require("multer");
const productRouter = expres.Router();
const verify = require("../middleware/auth.middleware");

const productImageStorage = require("../middleware/product-Image-upload");
const productController = require("../controller/product-controller");

const uploadImage = multer({ storage: productImageStorage });

productRouter.get("/", verify,productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post(
  "/",
  uploadImage.single("image"),
  productController.createProduct
);
productRouter.delete("/:id", verify, productController.deleteProductById);

module.exports = productRouter;
