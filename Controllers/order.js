const mongoModel = require("../Database/mongooseSchema");
const stripe = require("stripe")(
  "sk_test_51ISzS4G5oLdqdp8tyu4cZtezS4xnutgWa12YLyNqmLWYawvN9QKaQNPzm6CkPkSwOM0D6gYVQlzFrcLffAhkKhrb00GY0VyE3p"
);
const uuid = require("uuid").v4;
module.exports = async (req, res) => {
  const { auth, cartItem, token, totalAmount } = req.body;
  console.log(auth);
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const key = uuid();

    const charge = await stripe.charges.create({
      amount: totalAmount * 100,
      currency: "inr",
      customer: customer.id,
      description: "Example charge",
      // shipping: {
      //   name: token.card.name,
      //   address: {
      //     city: token.address_city,
      //     country: token.address_country,
      //     line1: token.address_line1,
      //     line2: token.address_line2,
      //     postal_code: token.address_zip,
      //   },
      // },
    });

    cartItem.map(async (item) => {
      const order = await new mongoModel.Order({
        qty: item.Qty,
        author: auth,
        product: item._id,
      });
      const ggwp = await order.save();
    });

    res.status(200).send(key);
  } catch (error) {
    res.status(500).send("payment failed");
  }
};
