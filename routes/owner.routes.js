const express = require('express'),
    router = express.Router(),
owner = require('../controller/owner.controller');

router.post('/', owner.create);
router.get('/', owner.findAll);
router.get('/:id', owner.findOne);
router.put('/:id', owner.update);
router.delete('/:id', owner.delete);

module.exports.router = router;
