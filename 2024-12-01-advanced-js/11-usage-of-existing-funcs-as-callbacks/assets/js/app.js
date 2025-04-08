const showUserLocation = () => navigator.geolocation.getCurrentPosition(myLocation => console.log(myLocation))


showUserLocation()


//

navigator.geolocation.getCurrentPosition(console.log)
