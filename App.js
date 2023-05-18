const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const router = require("./Routes/route")
const path = require("path")
require("./Database/mongooseConnect")

app.use("/",router)
app.use(express.static(path.join(__dirname,"./frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/dist/index.html"))
})

app.listen(port,()=>{console.log(` server is running on this port ${port}`)})
