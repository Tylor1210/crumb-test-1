const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const User = require('../models/userModel')

//@ desc   GET PRODUCTS 
// @route  GET /API/PRODUCTS
// @access Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user.id })

    res.status(200).json({ products })
})

//@ desc   SET PRODUCTS 
// @route  SET /API/PRODUCTS
// @access Private
const postProduct = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field.')
    }

    const product = await Product.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json({ product })
})

//@ desc   UPDATE PRODUCT 
// @route  GET /API/PRODUCTS:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }

    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the product user
    if(product.user.toString()!== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedProduct)
    
})

//@ desc   Delete PRODUCTS 
// @route  DELETE /API/PRODUCTS
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }
    
    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the product user
    if(product.user.toString()!== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await product.deleteOne()
    
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getProducts, 
    postProduct, 
    updateProduct, 
    deleteProduct
}