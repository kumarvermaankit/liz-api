const router = require("express").Router()
const { search, allsearch } = require("../controllers/stationsearch")
router.get("/some/:str/:lat/:lon", async (req, res) => {
    console.log(req.params)
    const location = {
        lat: parseFloat(req.params.lat),
        lon: parseFloat(req.params.lon)
    }

    var result = await search(req.params.str, location)
    if (result) {
        console.log(result)
        res.send(result)
    }


})

router.get("/all/:lat/:lon", async (req, res) => {

    const location = {
        lat: parseFloat(req.params.lat),
        lon: parseFloat(req.params.lon)
    }

    var result = await allsearch(req.params.str, location)
    if (result) {
        console.log(result)
        res.send(result)
    }


})

module.exports = router