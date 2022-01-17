const req = require('express/lib/request');

module.exports = (app) => {
    const owner = require('../controller/owner.controller.js');

    // Create a new Owner
    app.post('/owner', owner.create);

    // Retrieve all Owners
    app.get('/owner', owner.findAll);

    // Retrieve a single owner with Id
    app.get('/owner/:id', owner.findOne);

    // Update a Owner with id
    app.put('/owner/:id', owner.update);

    // Delete a Owmer with id
    app.delete('/owner/:id', owner.delete);

}