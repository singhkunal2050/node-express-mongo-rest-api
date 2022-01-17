const { request } = require('express');
const Owner = require('../model/owner.model.js');

// Create and Save a new Owner
exports.create = (req, res) => {
    console.log("Create Request Received")
    if(!req.body.name || !req.body.gender || !req.body.petCount || !req.body.address   ){
        return res.status(400).send({
            message: "Parameters not sent!"
        });
    }

    // Create User
    const owner = new Owner({
        name : req.body.name,
        gender : req.body.gender,
        petCount : req.body.petCount,
        address : req.body.address
    })

    // Save Owner in the database
    owner.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Owner."
        });
    });
};

// Retrieve and return all owners from the database.
exports.findAll = (req, res) => {
    console.log("Get Request Received")
    Owner.find()
    .then(owners => {
        res.send(owners);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single owner with a ownerId
exports.findOne = (req, res) => {

};

// Update a owner identified by the ownerId in the request
exports.update = (req, res) => {

};

// Delete a owner with the specified ownerId in the request
exports.delete = (req, res) => {

};