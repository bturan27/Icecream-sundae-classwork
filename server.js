const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(),express.urlencoded({extended:true})); //for post
const cors = require("cors");
const { application } = require("express");
app.use(cors());

// app.get("/api/test",(req,res)=>{
//     res.json({message: "test response here"})
// })
require("./server/config/mongoose.config");
require("./server/routes/sundae.routes")(app);


app.listen(port,()=>console.log(`running on ${port} is a new way I like to be`));



//import  require,line 3 for post request,dependendcy injection, cors we need it for full stack
//we are smart developers we dont keep routes in server.js file
