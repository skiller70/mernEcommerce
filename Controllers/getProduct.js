const mongoModel = require("../Database/mongooseSchema")


module.exports = async (req,res) =>{
try {
    const allProduct = await mongoModel.Product.find({})

console.log(allProduct)
res.status(200).send(allProduct)
    
} catch (error) {
    
    res.status(500).send("something went wrong")
}
}