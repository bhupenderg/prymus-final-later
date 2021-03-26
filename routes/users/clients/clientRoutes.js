const express = require('express')
const authController = require('../../../controllers/auth')
const clientsController = require('../../../controllers/clientsController')
const router = express.Router()

//const campaignController = require('../controllers/campaignsController')

router.get('/registerclient', clientsController.getRegisterClient)

//auth

router.post('/registerclient', authController.signup)
router.post('/myaccount', authController.login)
router.post('/logout', authController.logout)



//auth

// verfication email

router.put('/isverified', clientsController.isVerified)

// verification email

//router.post('/client-register', campaignController.createCampaign)

//router.get('/client-myaccount', campaignController.getCampaign)

//router.post('/client-create-campaign', (req, res) => {
//     res.send("client registered")
// })

router.get('/myplan', authController.mustBeLoggedIn, clientsController.getMyPlan)

// Payments

router.get('/payments', authController.mustBeLoggedIn, clientsController.payments)

router.get('/myaccount', authController.mustBeLoggedIn, clientsController.myaccount)

module.exports = router;