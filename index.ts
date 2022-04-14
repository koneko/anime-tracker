const express = require("express")
const utils = require("./utils")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 3000
const dbUrl = process.env.DBURL || "mongodb://127.0.0.1/anime-tracker" 
const log = utils.log
app.use(express.static("public"))

app.get("/js/:filename", (req,res) => {
    //interprets which file is requested and sends the built js file to the client
    res.sendFile(__dirname + "\\public\\ts\\" + req.params.filename)
})


app.listen(port, () => log("Web running on " + port + ".", "info"))
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => log("Database connected.", "info"))