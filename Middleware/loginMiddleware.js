const bcrypt = require("bcryptjs");
const mongoModel = require("../Database/mongooseSchema");
module.exports = loginAuthentication = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { email } = req.body;
    const oldAuth = await mongoModel.userData.find({ email });
    console.log(req.body);
    if (!oldAuth[0]) {
      return res.status(500).send("invalid username or password");
    }

    if (oldAuth[0] && bcrypt.compareSync(password.toString(), oldAuth[0].password, (err) => console.log(err))
    ) {
    
      const data = {
        id: oldAuth[0]._id,
        name: oldAuth[0].name,
        email: oldAuth[0].email,
      };
      req.auth = data;
      next();

      res.end();
    } else {
      return res.status(201).send("invalid username or password");
    }
  } catch (error) {
    if (error) {
      return res.status(500).send("server error failed to login");
    }
  }
};
