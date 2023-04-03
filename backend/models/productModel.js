const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add product name']
    },
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Product', productSchema)