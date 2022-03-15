 var weatherCoordinates = [
    {
        lat: 29.4252,
        lon: -98.4916,
    }
]
function getForecast () {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: weatherCoordinates[0].lat,
        lon: weatherCoordinates[0].lon,
        appid: WEATHER_API_TOKEN,
        exclude: 'minutely,hourly,current,alerts',
        units: 'imperial'
    }).done(function (data) {

        function getTemp(e) {
            // temperature variables
            var minTemp = data.daily[e].temp.min
            var maxTemp = data.daily[e].temp.max
            var tempLog = 'High : ' + maxTemp + ' / ' + 'Low: ' + minTemp
            console.log(tempLog);
            return tempLog;
        }
        function getDescription(e) {
            // weather description variables
            var description = data.daily[e].weather[0].main
            console.log(description);
            return description;
        }
        function getPrecipitation(e) {
            // percentage of precipitation
            var pop = 'Chance Of Rain: ' + data.daily[e].pop * 100 + '%'
            console.log(pop);
            return pop;
        }
        function getDate(e) {
            // current date
            var date = new Date(data.daily[e].dt * 1000).toDateString()
            console.log(date);
            return date;
        }
            var body = '';
            for (var i = 0; i < 5; i++) {
                body += '<div id="weather-box">' +
                    '<div class="weather">' + getDate(i) + '</div>' +
                        '<div class="weather">' + getTemp(i) + '</div>' +
                        '<div class="weather">' + getDescription(i) + '</div>' +
                        '<div class="weather">' + getPrecipitation(i) + '</div>' +
                    '</div>';
            }
        $('header').html(body);
    });
}

getForecast();



