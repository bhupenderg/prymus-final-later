const express = require('express')
const authController = require('../controllers/auth')
const clientsController = require('../controllers/clientsController')
const campaignController = require('../controllers/campaignsController')
const paymentsController = require('../controllers/paymentsController')
const router = express.Router()

router.post('/meTrnPay', authController.mustBeLoggedIn, paymentsController.payAmount)
router.post('/meTrnSuccess', authController.mustBeLoggedIn, paymentsController.getResponse)

module.exports = router;
