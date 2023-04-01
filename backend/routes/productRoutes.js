const express = require('express')
const router = express();
const {getProducts, 
    postProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/productController')



////////////////////////////////////////////////////////////////////
// COULD REPLACE THE FOUR UNDER WITH THIS BUT WE WONT //////////////////
// router.route('/').get(getProducts).post(postProduct) /////////////
// router.route('/:id').delete(deleteProduct).put(updateProduct) ///
////////////////////////////////////////////////////////////////////




router.get('/', getProducts)

router.post('/', postProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)


module.exports = router