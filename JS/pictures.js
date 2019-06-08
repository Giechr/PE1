// GET earlier pictures of the day * 5
$.getJSON('https://api.nasa.gov/planetary/apod?api_key=baemOzSD632ocmFpwkBgdmxlPFTe6yXDQgzzV7e7&count=10', function(result) {

    for (i = 0; i < result.length; i++) {

        pictures.innerHTML += '<div class="card">' +
        '<h2 class="title">' + result[i].title + '</h2>' +
        '<div><img class="img" src="'+result[i].url+'"></div>' +
   '<p>'+result[i].explanation+'</p>'+'</div>'

}})

var pictures = document.getElementById('cards'); 