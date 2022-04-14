const express = require("express")
const app = express()
const chalk = require("chalk")
const port = 3000 || process.env.PORT
const utils = require("../utils")
const log = utils.log
app.use(express.static("public"))


app.listen(port, () => log("Server running on port " + port, "info"))