const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: "luckyskiller",
  api_key: "384755682118749",
  api_secret: "uuQkPLRMNGtOL7Lf5BMJRYbXexA",
});


// Configure multer storage
const storage = multer.diskStorage({});


// Create the Multer instance
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10241 * 10214, // Maximum file size (optional)
    },
    fileFilter: (req, file, cb) => {
      // Perform file filtering (optional)
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
      }
    },
  });
  

module.exports = {upload}
