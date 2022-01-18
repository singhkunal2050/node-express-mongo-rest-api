const { request } = require("express");
const Pet = require('../model/pet.model')

exports.create = async (req,res) => {
    try{
        // check for body content
        if(!req.body.petname || !req.body.animal || !req.body.gender || !req.body.photo ){
            res.status(400).send({"message" : "Request Body Parameters Missing"})
        }else{
            //  create object
            const pet = Pet({
                petname:req.body.petname,
                animal:req.body.animal,
                gender:req.body.gender,
                photo:req.body.photo
            })

            // save to db
            let data = await pet.save()
            res.status(200).send(data)        }
    }
    catch(err){
        res.status(500).send({"message":`Something Went South! :: ${err.message}`})
    }
}

exports.findAll = async (req,res) => {
    try{
        let data = await Pet.find()
        res.status(200).send(data)
        }
    catch(err){
        res.status(500).send({"message":`Something Went South! :: ${err.message}`})
    }
}

exports.findOne = (req,res) => {
    res.send({"Message":"Received Pet findOne"})
}

exports.update = (req,res) => {
    res.send({"Message":"Received Pet update"})
}

exports.delete = (req,res) => {
    res.send({"Message":"Received Pet delete"})
}
