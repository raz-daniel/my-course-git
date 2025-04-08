import Mobile from "./mobile.js"

const iphone = new Mobile('iPhone V22', 6.7, 5600, 2)

iphone.takePicture()
iphone.turnOn()
iphone.turnOff()
iphone.displaySaleInfo()
console.log(`pinCode is: ${iphone.getPinCode()}`)
const samsung = new Mobile('samSung V28A', 7.1, 3900, 4)

samsung.takePicture()
samsung.turnOn()
samsung.turnOff()
samsung.displaySaleInfo()
console.log(`pinCode is: ${samsung.getPinCode()}`)