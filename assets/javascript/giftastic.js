// giphy api = 41dc8005cbd146aa9b115ae9b467df3d
var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "?api_key=41dc8005cbd146aa9b115ae9b467df3d";
var query = "&q=dog";
var limit = "&limit=10";

var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret"];

var url = api + apiKey + query + limit;

//for (var i = 0; i < giphy.data.length; i++)
//data[i].images.original.url

//appends a new element to array topics from form when submit is clicked
document.getElementById("addGif").addEventListener("click", function(event){
  event.preventDefault()
});
$("#addGif").click(function(){
  var newAnimal = $("#gif-input").val();
  topics.push(newAnimal);
  console.log(topics);
  $("#gifButtons").empty();
  addButton();
});

//adds a button for each element of the array topics
var addButton = function() {
  for(i = 0; i < topics.length; i++) {
    var button = document.createElement("button");
    var buttonLabel = document.createTextNode(topics[i]);
    button.appendChild(buttonLabel);
    button.setAttribute("id", "buttonId");
    document.getElementById("gifButtons").appendChild(button);
  }
  $("#buttonId").click(function(){
    $.ajax({
      url: url,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.data[i].images.original.url);
      document.getElementById("gifs").append(response.data[i].images.original.url);
    });
});
}

//adds a button for each element of the array topics when page is loaded
$(document).ready(function() {
  addButton();
});


//add gifs from giphy to page when clicking on a topic button.
//the gifs need to show the rating below them
//the gifs also need to animate on click and stop animating on next click
