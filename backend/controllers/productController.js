const asyncHandler = require('express-async-handler')


//@ desc   GET PRODUCTS 
// @route  GET /API/PRODUCTS
// @access Private
const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Products.' })
})

//@ desc   SET PRODUCTS 
// @route  SET /API/PRODUCTS
// @access Private
const postProduct = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field.')
    }
    res.status(200).json({ message: 'Posted Product .' })
})

//@ desc   UPDATE PRODUCT 
// @route  GET /API/PRODUCTS:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
    res.status(200)
    
})

//@ desc   Delete PRODUCTS 
// @route  DELETE /API/PRODUCTS
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleted Product ${req.params.id}.` })
})




module.exports = {
    getProducts, postProduct, updateProduct, deleteProduct
}