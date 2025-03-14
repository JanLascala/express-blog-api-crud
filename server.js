//expors
const express = require('express');
const app = express();
const port = 3000;
//posts main data
const posts = require('./data/posts.js')
// export routers
const postsRouters = require('./routers/posts_routers.js')

//add static image? here later??

//server listen
app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`);
})
// middle ware
app.use(express.json());
//set path for routes !!!!!!! remember to do it at the set up !!!!!!!!
app.use('/api/v1/posts', postsRouters);