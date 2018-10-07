//get the apis requires
var omdbpai = require("omdpai");
var napster = require("napster");

//call the api here?
var options = {
    provider: "omdbpai",
    apikey: "tt3896198&apikey=cd19a446",  
};

var omdbapi = omdbapiOptions(options);
//the movie or song you type in the terminal will be the third argument
var Songname = process.agrv[2];



//this is the movie api (omdbapi)

//or here?
var queryUrl = "http://www.omdbapi.com/?t=" + Moviename + "tt3896198&apikey=cd19a446";
console.log(queryUrl);

var Moviename = process.agrv[2];

//
request(queryUrl, function(error, response, body) {
//if the request works then..

if (!error && response.statusCode === 200) {

    console.log ()

}

})


//this is the music api
var queryUrl = "https://api.napster.com/v2.1/tracks/top?apikey=" + Songname + "NmFkMGI5M2QtODFlNy00MzMyLWIwYzItNzUxZWRiZTc1OTBm";
console.log(queryUrl);


