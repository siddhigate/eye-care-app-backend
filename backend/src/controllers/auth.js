const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup= (req, res) => {

    console.log("signup");
}

exports.signin = (req, res) => {

    console.log("signin");
}

exports.signout = (req, res) =>{
    
    console.log("signout");
}

// custom middlewares
exports.isAuthenticated = (req, res, next) => {

    console.log("isauthenticated")
    next();
}
