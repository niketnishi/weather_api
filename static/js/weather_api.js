document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#city_name').onkeypress = function() {
        findWeather(event)
    }
});

function findWeather(eventObj) {
    if (eventObj.keyCode == 13) {
        var cityName = document.querySelector('#city_name').value;
        if (cityName.length > 0) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                document.querySelector('#climate_info').style.padding = "5px";
                if (this.readyState != 4) {
                    document.querySelector('#climate_info').innerHTML = "Loading...";
                }
                else if (this.status == 404) {
                    document.querySelector('#climate_info').innerHTML = "Please check your spellings...";
                }
                else if (this.readyState == 4 && this.status == 200) {
                    var weatherData = JSON.parse(this.responseText);
                    document.querySelector('#city_name').value = "";
                    document.querySelector('#climate_info').innerHTML = "";
                    createStructure(weatherData);
                }
            };
            xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&APPID=35f46ef7e19f9388eb90c4b5cd191df6", true);
            xhttp.send();
        } else {
            alert('Please enter a city name to proceed!');
        }
    }
}

function createStructure(weatherData) {
    console.log(weatherData);
    let citySpan = document.createElement('span');
    citySpan.innerHTML = "City:&nbsp;" + weatherData.name;

    let tempSpan = document.createElement('span');
    tempSpan.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Temp:&nbsp;" + weatherData.main.temp + "&deg;C";

    let climateSpan = document.createElement('span');
    climateSpan.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Weather:&nbsp;" + weatherData.weather[0].main;

    document.querySelector('#climate_info').appendChild(citySpan);
    document.querySelector('#climate_info').appendChild(tempSpan);
    document.querySelector('#climate_info').appendChild(climateSpan);
}
