// INITIAL COORDINATES
var coordinates = [-98.4936, 29.4241];
var lon = coordinates[0];
var lat = coordinates[1];

// MAP
// mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // ID
    // style: 'mapbox://styles/mapbox/dark-v10',
    style: mapStyle,
    center: coordinates, // [lng, lat]
    zoom: 9
});

// CREATE MARKER
var marker = new mapboxgl.Marker({
    color: 'red',
})
    .setLngLat(coordinates)
    .setDraggable(true)
    .addTo(map);

// GET OPEN WEATHER DATA AND FEED INTO SITE
function setWeather() {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lon: lon,
        lat: lat,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        $("#weather").html("");
        for (var i = 0; i < data.daily.length-1; i++) {
            var today = data.daily[i];
            var date = new Date(today.dt * 1000);
            var day = date.toLocaleString('en-us', {weekday: 'short'});
            var humanDate = date.toLocaleString('en-us', {day: 'numeric'});
            var iconurl = "http://openweathermap.org/img/w/" + today.weather[0].icon + ".png";
            var html =
                `<div class="weather bg-white w-100 row border m-lg-1">
                    <div class="col-3 col-sm-2 col-lg-12 d-flex align-items-center font-weight-bold justify-content-center"> ${day} ${humanDate} </div>
                    <div class="d-none d-sm-block col-sm-3 col-lg-12 text-center m-auto"><em> ${today.weather[0].description.replace('intensity', ' ')} </em> </div>
                    <div class="col-3 col-sm-4 col-lg-12 m-auto">
                        <div id="farenheight" class="d-flex row justify-content-center">
                            <div class="text-center col-12" id="icon"> <img alt="Weather" id="wicon" src= ${iconurl} > </div>
                            <div class="text-danger m-1"> ${today.temp.max.toFixed(0)} </div>
                            <div class="text-primary m-1"> ${today.temp.min.toFixed(0)} </div>
                            <span class="p-1">&#8457;</span>
                        </div>
                    </div>
                    <div class="col-4 col-sm-3 col-lg-12 m-auto">
                        <div class="text-left text-lg-center"> <i class="fas fa-tint mr-2 text-primary"> </i> ${(today.pop * 100).toFixed(0)} % </div>
                        <div class="text-left text-lg-center mt-1"> <i class="fas fa-wind mr-2"> </i> ${today.wind_speed.toFixed(0)} mph </div>
<!--                        <div class="text-left">Humidity: <strong> ${today.humidity} </strong> </div>-->
                    </div>
                </div>`;
            $('#weather').append(html);
        }

        // WEATHER ALERTS
        function severeWeather() {
            $('#alerts').html("");
            for (var i = 0; i < data.alerts.length; i++) {
                var warning =
                    `<div class="text-uppercase font-weight-bold"> ${data.alerts[i].event} :</div> <div class="">${data.alerts[i].description}</div> <br>`;
                $('#alerts').append(warning);
            }
        }
        // CURRENT WEATHER
        function current() {
            $('#temperature').html("");
            var iconurl = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
            var currentConditions =
                `${data.current.temp.toFixed(0)} <span>&#8457;</span> <img class="" alt="Weather" id="icon" src=' ${iconurl} '>`
            $('#temperature').append(currentConditions);
        }
        current();
        severeWeather();
    });
}
setWeather();

// UPDATES FORECAST TO AREA OF MAP MARKER IS DRAGGED!
marker.on('dragend', function () {
    lon = marker.getLngLat().lng;
    lat = marker.getLngLat().lat;
    setWeather();
    reverseGeo();
});

// FLY TO NEW LOCATION AND RESET MARKER VIA SEARCHBOX INFO
function fly() {
    var userInput = $('#input').val();
    geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
        console.log(info);
        var newCenter = {
            lng: info[0],
            lat: info[1]
        };
        map.flyTo({center: newCenter});
        marker
            .setLngLat(newCenter)
            .setDraggable(true)
            .addTo(map)
        lon = info[0]
        lat = info[1]
        setWeather();
        reverseGeo();
    });
}
// click button or press enter, both trigger fly function
$("#input").keyup(function(event) {
    event.keyCode === 13? fly() : null;
});

// REVERSE GEOCODE TO FEED INTO SUBHEADER
function reverseGeo() {
    $.get("http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&limit=" + 5 + "&appid=" + OPEN_WEATHER_APPID)
        .done(function (data) {
            $("#subHead").html("");
            var html = data[0].name + ', ' + data[0].state
            $('#subHead').append(html);
        });
}
reverseGeo();

// ZOOM CONTROLS TOP RIGHT
map.addControl(new mapboxgl.NavigationControl());
