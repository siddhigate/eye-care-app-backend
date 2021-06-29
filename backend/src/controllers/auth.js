const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const crypto = require('crypto');
const client = require("../db/db_config");

exports.signup= async(req, res) => {
    
 req.encry_pass = await hashPassword(req.body.password);
 console.log(req.encry_pass)
    try {
        
        const newCourse = await client.insert({
            table: 'userinfo',
            records: [
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.encry_pass,
                    score: req.body.score
                }
            ]
        });

        res.send({ newCourse });
    } catch (error) {
        res.send({ error });
    }
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

async function hashPassword (password) {

    const saltRounds = 10;
  
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
  }
