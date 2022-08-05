navigator.geolocation.getCurrentPosition(onGeoSucess,onGeoFailure);

const API_KEY = "dd892916e8b17ee80c62e0b5e61debde";

function onGeoSucess(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetch(URL)
        .then((response) => response.json())
        .then((data)=> {
        const name = data.name;
        const weather = data.weather[0].main;
        });
}




function onGeoFailure(){
    alert("Can't find you.")
}