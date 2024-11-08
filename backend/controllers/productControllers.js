let Product = require('../models/product');

let addProducts = async (req, res) => {
  try {
    let { title, category, subCategory, price, images, rating, description, sizes, colors, reviews, gender, stock, loggedInUser } = req.body;
    let product = new Product({
      title,
      category,
      subCategory,
      price,
      images,
      rating,
      description,
      sizes,
      colors,
      reviews,
      gender,
      stock,
      seller_id: loggedInUser._id
    });
    await product.save();

    res.status(201).json({
      status: 'success',
      message: "Product created successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

let getProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

let getProductById = async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.body.productId });
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

let getProductsOfSeller = async (req, res) => {
  try {
    let products = await Product.find({ seller_id: req.body.loggedInUser._id });
    res.json({ success: true, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

let updatingStock = async (req, res) => {
  try {
    let { type, productId } = req.body;
    console.log("productId:", productId);
    console.log("type:", type);

    let product = await Product.findOneAndUpdate(
      { _id: productId },
      {
        $inc: { stock: type === 'increment' ? 1 : -1 }
      },
      { new: true }
    );

    res.json({ status: 'success', message: 'stock updated successfully', product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addProducts, getProducts, getProductsOfSeller, getProductById, updatingStock };
