const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  console.log(req.params.auth)
  try {
    const allOrder = await mongoModel.Order.find({
      author: req.params.auth,
    })
      .populate("product", ["name","description","imageUrl"])
      
    res.status(201).send(allOrder); 
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};
