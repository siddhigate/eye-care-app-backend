const client = require("../db/db_config");
const { check, validationResult } = require('express-validator');

exports.getUserById = async (req, res, next, id) =>{
    const user = await client.query(`SELECT * FROM user.userinfo WHERE id="${id}"`);
    req.user = user;
    next();
}

exports.getUser =  (req, res) =>{
    res.json(req.user);
} 

exports.updateUser = (req,res) => {
    
    console.log("update user")
}
