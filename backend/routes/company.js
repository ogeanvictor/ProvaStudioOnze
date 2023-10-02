'use strict'

const express = require("express");
const router = express.Router();

const controller = require("../controller/company");

router.post('/', controller.save);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;