const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 5000

// const routes = require("./routes")
const routeFinder = require("./controllers/routeFinder")
const search = require("./routes/stationsearch")
// Allowing Cross origin request
app.use(cors())


// app.use("/api", routes)

app.use("/path", routeFinder)
app.use("/search", search)
// Listening the port
app.listen(port, () => {
    console.log("Server is running on Port", port)
})