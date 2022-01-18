const { request } = require("express");
const Pet = require("../model/pet.model");

exports.create = async (req, res) => {
  try {
    // check for body content
    if (
      !req.body.petname ||
      !req.body.animal ||
      !req.body.gender ||
      !req.body.photo
    ) {
      res.status(400).send({ message: "Request Body Parameters Missing" });
    } else {
      //  create object
      const pet = Pet({
        petname: req.body.petname,
        animal: req.body.animal,
        gender: req.body.gender,
        photo: req.body.photo,
      });

      // save to db
      let data = await pet.save();
      res.status(200).send(data);
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something Went South! :: ${err.message}` });
  }
};

exports.findAll = async (req, res) => {
  try {
    let data = await Pet.find();
    res.status(200).send(data);
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something Went South! :: ${err.message}` });
  }
};

exports.findOne = async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).send({ message: "ID not Sent" });
    } else {
      let data = await Pet.findById(req.params.id);
      if(!data){
          res.status(400).send({"Mesage":`Not found`})
      }else{
        res.status(200).send(data);
      }
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something Went South! :: ${err.message}` });
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).send({ message: "ID not Sent" });
    } else if (
      !req.body.petname ||
      !req.body.animal ||
      !req.body.gender ||
      !req.body.photo
    ) {
      res.status(400).send({ message: "One or More Body Parameters not Sent" });
    } else {
      // create object
      let data = await Pet.findByIdAndUpdate(
        req.params.id,
        {
          petname: req.body.petname,
          animal: req.body.animal,
          gender: req.body.gender,
          photo: req.body.photo,
        },
        { new: true }
      );
      res.status(200).send(data);
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something Went South! :: ${err.message}` });
  }
};

exports.delete = async (req, res) => {
  try {
    if(!req.params.id){
        res
        .status(400)
        .send({ message: `ID Not Passed` });
    }else{
        let data = await Pet.findByIdAndDelete(req.params.id)
        res.status(200).send({"message" : `Pet with ${req.params.id} deleted!`})
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: `Something Went South! :: ${err.message}` });
  }
};
