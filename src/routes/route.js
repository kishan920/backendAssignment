const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const middleware = require('../middlewares/auth')

// user can register by this api
router.post('/register', userController.userCreation)
// user can login by this api (use JWT) 
router.post('/login', userController.userLogin)
//user can see our profile by userId
router.get('/user/:userId/profile', middleware.userAuth, userController.getProfile)
//user can update our profile by userId
router.put('/user/:userId/profile', middleware.userAuth, userController.updateProfile)

//product creation
router.post('/products/:userId', productController.productCreation)
//any user can see all product list
router.get('/products', productController.getAllProducts)
//user can update(add,remove) the product detail
router.put('/updateproducts/:productId', middleware.userAuth, productController.updateProduct)
//user can delete the product
router.delete('/products/:productId', middleware.userAuth, productController.deleteProduct)


module.exports = router;