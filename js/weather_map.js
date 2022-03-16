"use strict"
$(window).on('load', function(){
    getLocation();
    getForecast();

});

// MAP JAVASCRIPT
mapboxgl.accessToken = MAPBOX_API_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 31.4241],
    zoom: 5
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
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        search = $('#search-bar').val();
        searchBar();
    }
});

function searchBar() {
    geocode(search, MAPBOX_API_TOKEN).then(function (search){
        marker.setLngLat(search);
        weatherCoordinates = marker.getLngLat().toArray().reverse();
        getForecast();
        getLocation();
        map.flyTo({
            center:(search),
            zoom: 6,
            speed: 0.5
        });
    });
}

function getLocation() {
    var coord = marker.getLngLat();
    console.log(coord)
    var lngLat = {lng: coord.lng, lat: coord.lat};
    reverseGeocode2(lngLat, MAPBOX_API_TOKEN).then(function (data) {
        // console.log(data.features[3].place_name)
        var currentLocationData = data.features[3].place_name;
        var currentLocationArray = currentLocationData.split(' ')
        console.log(currentLocationArray)
        currentLocationArray.pop()
        currentLocationArray.pop()
        var currentLocationString = currentLocationArray.join(' ')
        console.log(currentLocationArray)
        $('#header-3').html(currentLocationString);
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
        exclude: 'minutely,hourly,alerts',
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
            var date = new Date(data.daily[e].dt * 1000).toDateString().split(' ');
            date.pop()
            console.log(date)
            return date.join(' ')

        }
        function getIcon(e) {
            var icon = data.daily[e].weather[0].icon;
            return '<img src="http://openweathermap.org/img/w/'+ icon +'.png">';
        }
        function getHumidity(e){
            return 'Humidity: ' + '<strong>' + data.daily[e].humidity + '</strong>';
        }
        function getUvi(e){
            return 'UV index: ' + '<strong>' + data.daily[e].uvi + '</strong>';
        }

            var weather = '';
            for (var i = 0; i < 5; i++) {
                weather += '<div id="weather-box">' +
                        '<div class="weather">' + getDate(i) + '</div>' +
                        '<div class="weather">' + getTemp(i) + '</div>' +
                        '<div class="weather">' + getDescription(i) + getIcon(i) + '</div>' +
                        '<div class="weather">' + getPrecipitation(i) + '</div>' +
                        // '<div class="weather">' + getWind(i) + '</div>' +
                        '<details>' + getHumidity(i) + '%' + '<br>' + getUvi(i) + '<br>' + getWind(i) + '</details>' +

                    '</div>';
            }
        $('#forecast').html(weather);


        var currentTemp = Math.ceil(data.current.temp) +  '°'
        var currentDescription  = data.current.weather[0].main
        var icon = data.current.weather[0].icon
        var currentIcon =  '<img src="http://openweathermap.org/img/w/'+ icon +'.png">';

        var weather2 = '';
            weather2 += '<div class="current-weather">' + currentTemp + ' ' + currentDescription + currentIcon + '</div>'

        $('#current').html(weather2);
    });
}







// function currentWeather () {
//     $.get('https://api.openweathermap.org/data/2.5/onecall', {
//         lat: weatherCoordinates[0],
//         lon: weatherCoordinates[1],
//         appid: WEATHER_API_TOKEN,
//         exclude: 'minutely,hourly,alerts',
//         units: 'imperial'
//     }).done(function (data) {
//
//         var currentTemp = data.current.temp
//         var currentDescription  = data.current.weather[0].main
//         var icon = data.current.weather[0].icon
//         var currentIcon =  '<img src="http://openweathermap.org/img/w/'+ icon +'.png">';
//
//
//         var weather = '<div>' +
//             '<div class="current-weather">' + currentTemp + currentDescription + currentIcon + '</div>'
//
//         $('#current').html(weather);
//     });
// }
