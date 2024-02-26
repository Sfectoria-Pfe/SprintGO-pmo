const express = require('express')
//controller function
const {signupUser, loginUser}= require('../controllers/userController')
const router = express.Router()

//login route
router.get('/login', () => loginUser)

//signup route
router.post('/signup',() => signupUser)

module.exports= router