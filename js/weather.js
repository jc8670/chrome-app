navigator.geolocation.getCurrentPosition(onGeoSucess,onGeoFailure);


function onGeoSucess(){
console.log(navigator);
console.log("geo success");
}




function onGeoFailure(){
    console.log("geo failure");

}