document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#city_name').onkeypress = function() {
        findWeather(event)
    }
});

function findWeather(eventObj) {
    if (eventObj.keyCode == 13){
        let cityName = document.querySelector('#city_name').value;
        if (cityName.length > 0) {
            var xhttp = new XMLHttpRequest();
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector('#climate_info').innerHTML = this.responseText;
                alert("you are in");
            } else {
                document.querySelector('#climate_info').innerHTML = "Sorry your request can not be processed right now."
            }
        } else {
            alert('Please enter a city name to proceed!');
        }
    }
}