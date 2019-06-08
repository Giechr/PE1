// Get people
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var numberOfPeople = data['number'];
    $('#spacepeeps').html(numberOfPeople);

    data['people'].forEach(function (d) {
         $('#astronames').append('<ul>' + d['name'] + '</ul>');
    });
});

// Source: http://open-notify.org/