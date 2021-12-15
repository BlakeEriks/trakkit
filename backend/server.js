const { PORT = 4000 } = process.env
const express = require("express")
const middleware = require("./util/middleware")
const app = express()

middleware(app)

app.listen(PORT, () => console.log('listening'))