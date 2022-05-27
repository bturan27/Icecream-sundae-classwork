//we will import the model here 
//all we are going to be doing  here is building just the function part of aa route
///no actual route name, just a function
//each route that we add, anything revolving  around sundae as a route will be in this file
const Sundae = require("../models/sundae.model")


module.exports.testResponse =(req,res)=>{
    res.json({message: "oooghhhh i am in different file now, hello from the controller"})
}

module.exports.findAllSundaes = (req, res) => {
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "this is not working", err}))
}

module.exports.createSundae = (req, res) =>{
    Sundae.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "this is not working", err}))
}

module.exports.findOneSundae = (req,res) => {
    Sundae.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that did not quite work", err}))
    }

module.exports.deleteOneSundae =(req,res) => {
    Sundae.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"that did not work", err}))
}

module.exports.updateOneSundae = (req, res) => {
    Sundae.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"that did not quite work,err"}))

}