const express = require("express");
const router = express.Router();
//CONTROLLER
const getOrder = require("../Controllers/getOrder")
const createProduct = require("../Controllers/createProduct");
const getProduct = require("../Controllers/getProduct");
const paymentGateway = require("../Controllers/paymentGateway");
const login = require("../Controllers/login");
const register = require("../Controllers/register");
const order = require("../Controllers/order");
//CONTROLLER

//MIDDLE WARE
const loginMiddleware = require("../Middleware/loginMiddleware");
const upload = require("../Middleware/multer");
//MIDDLE WARE

const bodyParser = require("body-parser");
const cors = require("cors");
// ***********************************************ROUTER MIDDLEWARE*******************************************

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    origin: true,
  })
);

router.route("/home").get((req, res) => {
  res.send("E commerce");
});
// PAYMENT GATEWAY
router.route("/paymentGateway").post(paymentGateway);
// PAYMENT GATEWAY

// FILE UPLOAD
router
  .route("/createProduct")
  .post(upload.upload.single("file"), createProduct);
router.route("/getProduct").get(getProduct);
// FILE UPLOAD

//USER AUTH
router.route("/login").post(loginMiddleware, login);
router.route("/register").post(register);
//USER AUTH

//ORDER
router.route("/order").post(order);
router.route("/getOrder/:auth").get(getOrder);
//ORDER
module.exports = router;
