let express = require('express')
let {orderAdd,fetchOrderByUserId} = require('../controllers/orderControllers.js')
// const verify_token = require('../middleware/userVerification')
let router = express.Router()

router.post('/orderAdd',orderAdd)
router.post('/fetchOrderByUserId',fetchOrderByUserId)

module.exports = router