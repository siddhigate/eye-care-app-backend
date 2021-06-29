
const { check, validationResult } = require('express-validator');

exports.getUserById = (req, res, next, id) =>{
    console.log("get user by id");
}

exports.getUser = (req, res) =>{
    console.log("get user");
} 

exports.updateUser = (req,res) => {
    
    console.log("update user")
}
