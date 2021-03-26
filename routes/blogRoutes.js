const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsController')

router.get('/blogs', blogsController.getBlogs)

module.exports = router