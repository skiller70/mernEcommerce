const mongoModel = require("../Database/mongooseSchema");
const { v2: cloudinary } = require("cloudinary");
module.exports = async (req, res) => {
  

  try {
    if (req.body) {
      // Create a new product
      const newProduct = new mongoModel.Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        stock: req.body.stock,
      });

      // File uploaded successfully
      console.log("File uploaded:", req.file);

      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Access the Cloudinary URL and public ID
      console.log("Cloudinary URL:", result.secure_url);
      console.log("Cloudinary public ID:", result.public_id);

      // Set the image URL and public ID on the product
      newProduct.imageUrl = result.secure_url;
      newProduct.imagePublicId = result.public_id;

      // Save the product to the database
      const savedProduct = await newProduct.save();
      res.status(200).send("File uploaded successfully");
    } else {
      // No file uploaded
      res.status(400).send("No file uploaded");
    }
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).send("File upload failed");
  }
};
