// GET GOOGLE Maps  

$.getJSON("http://api.open-notify.org/iss-now.json", function(data) {
lat = parseFloat(data.iss_position.latitude);
long = parseFloat(data.iss_position.longitude);
var details = document.getElementById("loc");
details.innerHTML = "  Latitude: " + lat + "" + "  Longitude: " + long + "" ;

var location = {lat: lat, lng: long };
var map = new google.maps.Map(document.getElementById("map"), {
zoom: 3,
center: location

});

var marker = new google.maps.Marker({
position: location,
map: map,
icon: {
    url: "..//PIC/ISS.png",
    scaledSize: new google.maps.Size(100,100)

    }
}); 
map.addListener("tilesloaded", function(){
    setInterval(function(){

        $.getJSON("http://api.open-notify.org/iss-now.json", function(data) {
            lat = parseFloat(data.iss_position.latitude);
            long = parseFloat(data.iss_position.longitude);
            var details = document.getElementById("loc");
             details.innerHTML = "Latitude: " +lat+"  "+" Longitude: "+long+"";
            map.panTo({lat:lat, lng:long}, animate=true);
         });
    },1000 );
});
}); 


// Get APOD
$.getJSON('https://api.nasa.gov/planetary/apod?api_key=baemOzSD632ocmFpwkBgdmxlPFTe6yXDQgzzV7e7', function(result) {

 
  if(result.media_type == "video") {
    $("#apodImg").css("display", "none");  
  }
  else {
    $("#apodImg").attr("src", result.hdurl);
  }
  $("#apodExp").text(result.explanation);
  $("#apodTitle").text(result.title);

})

