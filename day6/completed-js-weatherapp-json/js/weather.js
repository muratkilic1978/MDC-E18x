// This is a HttpRequest to the openweather.org API where we get the content
function collectData(url, callback_Function){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            callback_Function(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
} /* END of collectData - function */

function showData(jsonData){
     var jsonElements= JSON.parse(jsonData.responseText);
    document.getElementById("showWeather").innerHTML =
        "<h2>Location: "+jsonElements.name+", "+jsonElements.sys.country+"</h2>"+    
        "<p>Temperature: "+jsonElements.main.temp+" &#8451;</p>"+
        "<p>Pressure: "+jsonElements.main.pressure+"</p>"+
        "<p>Humidity: "+jsonElements.main.humidity+"</p>"+
        "<p>Min temp: "+jsonElements.main.temp_min+"</p>"+
        "<p>Max temp: "+jsonElements.main.temp_max+"</p>"+
        "<p>Wind: "+jsonElements.wind.speed+"</p>";
}


/* Main program */
document.getElementById("searchCityButton").addEventListener("click", function() {
    var city = document.getElementById("searchCityInputField").value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=b94ddb9d71b693ed8440e7263c21d6f6";
    collectData(url, showData);
    
})