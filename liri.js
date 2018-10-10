
require("dotenv").config();
// require("bandsintown").config();

var keys = require("./keys.js")//we are importing keys file here using request method
// var spotify = new spotify(keys.spotify);//access spotify keys

//var spotify = new Spotify(keys.spotify);//this will give acess to spotify object in keys.js

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");//these needs to be installed 

// Store all of the arguments in an array

// Create an empty variable for holding the movie name
var movieName = process.argv[2];

//Create an empty variable for holding the artist name
var artist = process.argv[2];


//Create an empty variable for holding the song name
var song = process.argv[2];



// Then run a request to the OMDB API with the movie specified
var omdbapi = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//for bandsintown api
var bandsintown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//not sure if this is the right html link?
var spotify = "https://api.spotify.com/v1/tracks/" + song + "4304517fc1f640a99a614b5b73c4e64a"



//Console log the apis'
console.log(omdbapi);
console.log(bandsintown);
console.log(spotify);

request(omdbapi, function(error, response, body) {

  // If the request is successful for omdbapi 
  if (!error && response.statusCode === 200) {
console.log(body)
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});

request(bandsintown, function(error, response, body) {

    // If the request is successful for bandsintown
    if (!error && response.statusCode === 200) {
  console.log(body)
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log(JSON.parse(body).venue);
    }
  });


request(spotify, function(error, response, body) {

    // If the request is successful for bandsintown
    if (!error && response.statusCode === 200) {
  console.log(body)
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("This song is " + JSON.parse(body).album_type);
    }
  });

  //What to type in terminal
  //node liri.js movie-this '<movie name here>'
  //node liri.js do-what-it-says
  //spotify-this-song
  //concert-this

  //Spotify id and secret
  //Id - 4304517fc1f640a99a614b5b73c4e64a
//Secret - 03c34ad5bf1342b8b9714223f90b6b95