import Mobile from "./mobile.js"

const iphone = new Mobile()
iphone.type = 'iPhone V22'
iphone.screenSize = 16
iphone.price = 4200
iphone.camerasNum = 4
console.log(iphone)
iphone.takePicture()
iphone.turnOn()
iphone.turnOff()

const samsung = new Mobile()
samsung.type = 'samSung V28A'
samsung.screenSize = 16
samsung.price = 2200
samsung.camerasNum = 2
console.log(samsung)
samsung.takePicture()
samsung.turnOn()
samsung.turnOff()