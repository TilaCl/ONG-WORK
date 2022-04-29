window.addEventListener('load',()=>{
    let lon
    let lat
    if(Geolocation){
        navigator.geolocation.getCurrentPosition( posicion =>{
            //console.log(posicion)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
        })
    }
 
})