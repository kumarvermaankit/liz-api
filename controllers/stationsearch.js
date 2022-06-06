const data = require("../metro-coordinates.json");// retrieving data from JSON file.

var Distance = require('geo-distance');


var stationsbyName = new Object()
var stationName = []
data.map((each) => {
    var values = {

        lon: each.details.longitude,
        lat: each.details.latitude,

    }
    stationName.push(each.name.toLowerCase())
    stationsbyName[each.name.toLowerCase()] = values

})



async function search(str, location) {


    var result = stationName.filter(element => element.includes(str.toLowerCase()))
    console.log(result)
    var distances = [{}]
    for (var i = 0; i < result.length; i++) {
        console.log(stationsbyName[result[i].toLowerCase()])
        var sname = result[i]
        distances.push({ distance: Number(Distance.between(stationsbyName[result[i].toLowerCase()], location).human_readable().distance), name: sname })
    }
    distances.sort((a, b) => {
        return a.distance - b.distance



    })

    console.log(distances)
    return distances
}

async function allsearch(location) {

    var distances = [{}]
    for (var i = 0; i < stationName.length; i++) {
        // console.log(stationsbyName[stationName[i].toLowerCase()])
        console.log(stationName[i])
        var sname = stationName[i]
        distances.push({ distance: Number(Distance.between(stationsbyName[stationName[i].toLowerCase()], location).human_readable().distance), name: sname })
    }
    distances.sort((a, b) => {
        return a.distance - b.distance



    })

    // console.log(distances)
    return distances
}

// var SAMAYPURBADLI = { lat: 28.7448478539356, lon: 77.13836858812743 }
// search("Garden", SAMAYPURBADLI)

module.exports = { search, allsearch }