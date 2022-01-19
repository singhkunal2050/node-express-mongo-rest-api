const express = require('express'),
    router = express.Router(),
pet = require('../controller/pet.controller');

router.post('/', pet.create);
router.get('/', pet.findAll);
router.get('/:id', pet.findOne);
router.put('/:id', pet.update);
router.delete('/:id', pet.delete);

module.exports.router = router;
