const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const productSchema = new mongoose.Schema({
    userId: { type: ObjectId, ref: 'User_details', required: true },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currencyId: {
        type: String,
        required: true
    },
    currencyFormat: {
        type: String,
        required: true,
    },
    isFreeShipping: {
        type: Boolean,
        default: false
    },
    style: { type: String },
    availableSizes: {
        type: [String],
        required: true,
        trim: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
    },
    installments: { type: Number },
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model('Product_details', productSchema)