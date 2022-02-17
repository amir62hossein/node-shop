const productScema = require("../models/product-model");

// this controller return all product in database
async function getAllProducts(req, res) {
  try {
    const products = await productScema.find();
    const productCount = await productScema.find().count();
    res.json({ products: products, productCount: productCount });
  } catch (error) {
    console.log(error);
  }
}
// this controller return product by producct id
async function getProductById(req, res) {
  const id = req.params.id;
  const singleProduct = await productScema.findById(id);
  if (!singleProduct) {
    res.status(404).json({ message: "محصول پیدا نشد" });
    return;
  }
  res.status(200).json(singleProduct);
}
// this cntroller create one product and add it to database
async function createProduct(req, res) {
  const { title, description, price, available } = req.body;
  const image = req.file.path;
  const newProduct = productScema({
    title: title,
    description: description,
    price: price,
    available: available,
    image: image,
  });
  try {
    const product = await newProduct.save();
    res.json({ product: product });
  } catch (err) {
    res.json({ error: err.message });
  }
}
// this controller will delete one product by id from database
async function deleteProductById(req, res) {
  const id = req.params.id;
  try {
    const response = await productScema.findByIdAndRemove(id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.deleteProductById = deleteProductById