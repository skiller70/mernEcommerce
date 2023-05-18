require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_GATEWAY_API);

module.exports = async (req, res) => {

  console.log(req.body)
 try {
    // const checkout = await stripe.checkout.sessions.create({
        
    //     payment_method_type: "card",
    //     mode: "payment",
    //     line_items: {
    //       price_data: { currency: "inr", product_data: { name: "shoe" },unit_amount : 500,quantity: 1},
          
    //       success_url : "http://localhost:5173/order",
    //       cancel_url : "http://localhost:5173/cart"
    
    //     },
        
    //   });

    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 200,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url : "http://localhost:5173/order",
        cancel_url : "http://localhost:5173/cart"
      });















      res.send(session.success_url);
 } catch (error) {
   res.send("something went wrong")
 }
};
