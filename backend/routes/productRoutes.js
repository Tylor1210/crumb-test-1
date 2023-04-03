const express = require('express')
const router = express();
const {getProducts, 
    postProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/productController')

const {protect} = require('../middleware/authMiddleware')




router.route('/').get(protect, getProducts).post(protect, postProduct) 
router.route('/:id').delete(protect, deleteProduct).put(protect, updateProduct) 

//
//router.get('/', protect, getProducts)
//router.post('/', protect, postProduct)
//router.put('/:id', protect, updateProduct)
//router.delete('/:id', protect, deleteProduct)
//

module.exports = router