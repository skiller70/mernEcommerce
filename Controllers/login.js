const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  console.log("ssss")
 try {
  const token = jwt.sign(req.auth, process.env.JWT_TOKEN);

  res.status(201).send(token);
 } catch (error) {
  res.status(500).send("login failed")
 }
};  