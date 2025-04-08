import Car from "./car.js"

const micra = new Car()
micra.init('Nissan', 'micra', false, 2020, 13000 )

console.log(micra)
micra.drive()
micra.displaySerialNumber()
console.log(`HEY!! ${micra.modifySerialNumber(10)}`)
micra.displaySaleInfo()

const maxima = new Car()
maxima.init('nissan', 'maxima', true, 2015, 113000)

console.log(maxima)
maxima.drive()
maxima.displaySerialNumber()
maxima.displaySaleInfo()
