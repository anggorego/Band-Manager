const express = require('express')
const bandRouter = express.Router();
const bandController = require('../controllers/bandController')
bandRouter.get('/', bandController.getbands )
bandRouter.post('/personnel', bandController.addBandPersonnel)
bandRouter.get('/:band_id', bandController.getBandsById )
bandRouter.patch('/:band_id', bandController.updateBand)
module.exports = bandRouter