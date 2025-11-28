const express = require('express')
const { getEmails, createEmail } = require('../controllers/emailController')

//router object
const router = express.Router()

//routes

//GET ALL STUDENTS LIST || GET
router.get('/getall', getEmails)

//CREATE EMAIL || Post
router.post('/create', createEmail)

module.exports = router