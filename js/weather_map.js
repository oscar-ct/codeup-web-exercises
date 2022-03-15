"use strict"
$(window).on('load', function(){
    getLocation()
    getForecast();
});

// MAP JAVASCRIPT
mapboxgl.accessToken = MAPBOX_API_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 31.4241],
    zoom: 5.5
});
var marker = new mapboxgl.Marker({draggable: true}) // initial marker location
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

function onDragEnd() {
    weatherCoordinates = marker.getLngLat().toArray().reverse();
    getForecast();
    getLocation();
}
marker.on('dragend', onDragEnd);

var search = '';
$('button').click(function (){
    search = $('#search-bar').val();
    searchBar();
});

function searchBar() {
    geocode(search, MAPBOX_API_TOKEN).then(function (search){
        marker.setLngLat(search);
        weatherCoordinates = marker.getLngLat().toArray().reverse();
        getForecast();
        getLocation();
        map.flyTo({
            center:(search),
            zoom: 5.5,
            speed: 0.6
        });
    });
}

function getLocation() {
    var coord = marker.getLngLat();
    console.log(coord)
    var lngLat = {lng: coord.lng, lat: coord.lat};
    reverseGeocode2(lngLat, MAPBOX_API_TOKEN).then(function (data) {
        // console.log(data.features[3].place_name)
        $('#header-3').html(data.features[3].place_name);
    });
}

// WEATHER JAVASCRIPT
var weatherCoordinates = [
        29.4252,
        -98.4916
]
function getForecast () {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: weatherCoordinates[0],
        lon: weatherCoordinates[1],
        appid: WEATHER_API_TOKEN,
        exclude: 'minutely,hourly,current,alerts',
        units: 'imperial'
    }).done(function (data) {

        function getWind(e) {
            return 'Wind: ' + '<strong>' + data.daily[e].wind_speed + ' mph' + '</strong>';
        }
        function getTemp(e) {
            var max = 'High : ' + '<strong>' + Math.ceil(data.daily[e].temp.max) + '</strong>' + '°';
            var min = 'Low: ' + '<strong>' + Math.ceil(data.daily[e].temp.min) + '</strong>' + '°';
            return  max + ' / ' + min
        }
        function getDescription(e) {
            return data.daily[e].weather[0].main;
        }
        function getPrecipitation(e) {
            return 'Chance Of Rain: ' + '<strong>' + (data.daily[e].pop * 100).toFixed(0) + '</strong>' + '%';
        }
        function getDate(e) {
            return new Date(data.daily[e].dt * 1000).toDateString();
        }
        function getIcon(e) {
            var icon = data.daily[e].weather[0].icon;
            return '<img src="http://openweathermap.org/img/w/'+ icon +'.png">';
        }
            var weather = '';
            for (var i = 0; i < 5; i++) {
                weather += '<div id="weather-box">' +
                        '<div class="weather">' + getDate(i) + '</div>' +
                        '<div class="weather">' + getTemp(i) + '</div>' +
                        '<div class="weather">' + getDescription(i) + getIcon(i) + '</div>' +
                        '<div class="weather">' + getPrecipitation(i) + '</div>' +
                        '<div class="weather">' + getWind(i) + '</div>' +
                    '</div>';
            }
        $('#forecast').html(weather);
    });
}

