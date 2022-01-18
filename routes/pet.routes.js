
module.exports = (app) =>{
    const pet = require('../controller/pet.controller.js')   
    
    // Create new Pet
    app.post('/pet' , pet.create)

    // Get all Pets
    app.get('/pet' , pet.findAll)

    // Get Pet by ID
    app.get('/pet/:id', pet.findOne)

    // Updade Pet
    app.put('/pet/:id', pet.update)

    // Delete Pet
    app.delete('/pet/:id' , pet.delete)

}
