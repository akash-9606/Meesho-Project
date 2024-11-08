let express = require('express')
let router = express.Router()
let {addProducts} = require('../controllers/productControllers')
let {getProducts} = require('../controllers/productControllers')
let {getProductsOfSeller,getProductById, updatingStock} = require('../controllers/productControllers')


router.post('/addProduct',addProducts)
router.get('/getProducts',getProducts)
router.post('/getProductById',getProductById)
router.post('/getProductsOfSeller',getProductsOfSeller)
router.post('/updatingStock',updatingStock)

module.exports = router