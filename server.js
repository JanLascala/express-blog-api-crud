//expors
const express = require('express');
const app = express();
const port = 3000;
//posts main data
const posts = require('./data/posts.js')
//add static image? here later??

//server listen
app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`);
})
