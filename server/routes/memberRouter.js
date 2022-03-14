const express = require('express')
const memberRouter = express.Router();
const memberController = require('../controllers/memberController')

memberRouter.get('/', memberController.getMembers)

module.exports = memberRouter