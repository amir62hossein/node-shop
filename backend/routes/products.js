const expres = require("express");
const multer = require("multer");
const productRouter = expres.Router();

const productImageStorage = require("../middleware/product-Image-upload");
const productController = require("../controller/product-controller")

const uploadImage = multer({ storage: productImageStorage });

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id",productController.getProductById);
productRouter.post("/", uploadImage.single('image'), productController.createProduct);
productRouter.delete("/:id",productController.deleteProductById);

module.exports = productRouter;
