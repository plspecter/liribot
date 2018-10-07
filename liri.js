//request npm first
var request = require("request");

//the movie or song you type in the terminal will be the third argument
var Moviename = process.agrv[2];
var Songname = process.agrv[2];
//this is the movie api (omdbapi)

var queryUrl = "http://www.omdbapi.com/?t=" + Moviename + "tt3896198&apikey=cd19a446";
console.log(queryUrl);




//this is the music api
var queryUrl = "https://api.napster.com/v2.1/tracks/top?apikey=" + Songname + "NmFkMGI5M2QtODFlNy00MzMyLWIwYzItNzUxZWRiZTc1OTBm";
console.log(queryUrl);


