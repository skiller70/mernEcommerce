require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoModel = require("../Database/mongooseSchema");
const saltRounds = bcrypt.genSaltSync(10);

module.exports = register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const oldUser = await mongoModel.userData.find({ email });

    if (oldUser[0] !== undefined) {
      return res.status(400).send("user already exist");
    } else {
      const encryptPassword = bcrypt.hashSync(password.toString(), saltRounds, (err) =>
        console.log(err)
      );

      const registerUser = new mongoModel.userData({
        name,
        email,
        password: encryptPassword,
      });
      await registerUser.save();

      //   const token = jwt.sign(
      //     {
      //       id: data._id,
      //       name: data.name,
      //       email: data.email,
      //     },
      //     process.env.JWT_TOKEN
      //   );

      return res.status(201).send("register successfully");
    }
  } catch (error) {
    if (error) {
      res.status(400).send("failed to register");
    }
  }
};
