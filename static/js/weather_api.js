document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#city_name').onkeypress = function() {
        findWeather(event)
    }
});

function findWeather(eventObj) {
    if (eventObj.keyCode == 13){
        let cityName = document.querySelector('#city_name');
        alert(`${cityName}`);
        if (cityName.length > 0) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.querySelector('#climate_info').innerHTML = this.responseText;
                    alert("you are in");
                } else {
                    document.querySelector('#climate_info').innerHTML = "Sorry your request can not be processed right now."
                }
            };
            xhttp.open("GET", "api.openweathermap.org/data/2.5/weather?q=London", true);
            xhttp.send();
        } else {
            alert('Please enter a city name to proceed!');
        }
    }
}