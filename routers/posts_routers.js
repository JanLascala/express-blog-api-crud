//basic export for routers
const express = require('express');
const router = express.Router();
//export posts jinc
const posts = require('../data/posts.js')


//index
router.get('/',);

//show
router.get('/slug',);

//store
router.post('/',);

//update
router.put('/slug',);

// patch/modify
router.patch('/slug',);

//destroy
router.delete('/slug',);
