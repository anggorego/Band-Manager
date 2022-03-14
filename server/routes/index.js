const express = require('express')
const indexRouter = express.Router();
const bandRouter = require('./bandRouter')
const memberRouter = require('./memberRouter')

indexRouter.use('/band',bandRouter)
indexRouter.use('/member',memberRouter)

module.exports = indexRouter