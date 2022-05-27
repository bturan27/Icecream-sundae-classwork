const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sundaes_may2022",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(()=>console.log("you are connected to the mongo database"))
    .catch(err=>console.log("heyyyy begum here is an error", err))
