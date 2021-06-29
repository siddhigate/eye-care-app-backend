const express = require("express");
const router = express.Router();

const { getScoreById,  getScore} = require("../controllers/score");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

// params
router.param("userId", getUserById);
router.param("categoryId", getScoreById);

// read routes
router.get("/category/:categoryId", getScore);

// update routes
router.put("/category/:categoryId/:userId", 
// isSignedIn, 
isAuthenticated, updateScore);


module.exports = router;