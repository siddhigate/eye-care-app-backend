var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const {signout, signup, signin, calchash} = require("../controllers/auth");


router.post("/signup",  signup);

router.post("/signin", signin);

router.get("/signout", signout);

module.exports = router;