const mongoose = require('mongoose')


const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false 
    if (typeof value === 'string' && value.trim().length === 0) return false 
    return true;
};
const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0; 
};

const isValidTitle = function(title) {
    return ['Mr', 'Mrs', 'Miss'].indexOf(title) !== -1
}


const validString = function(value) {
        if (typeof value === 'string' && value.trim().length === 0) return false 
        return true;
    }
   


const validInstallment = function isInteger(value) {
    if (value < 0) return false
    if (value % 1 == 0) return true;
}

const validatingInvalidObjectId = function(objectId) {
    if (objectId.length == 24) return true 
    return false
}

const validQuantity = function isInteger(value) {
    if (value < 1) return false
    if (isNaN(Number(value))) return false
    if (value % 1 == 0) return true
}


const isValidStatus = function(status) {
    return ['pending', 'completed', 'cancelled'].indexOf(status) !== -1
}

module.exports = {
    isValid,
    isValidRequestBody,
    isValidTitle,
    isValidObjectId,
    validString,
    validInstallment,
    validatingInvalidObjectId,
    validQuantity,
    isValidStatus
}