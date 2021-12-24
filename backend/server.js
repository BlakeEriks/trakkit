const { PORT = 4000 } = process.env
const express = require("express")
const middleware = require("./util/middleware")
const app = express()

middleware(app)

/* 

Three models in this app

Trak - Objects saved per user that record what they want to track

Trik - Holds logs on a day basis of what the user has recorded

Aktive - Holds open duration traks

TODO's - add middleware to require valid user id

*/


app.listen(PORT, () => console.log('listening'))