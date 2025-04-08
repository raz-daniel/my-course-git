export default class Car {
    constructor(make, model, diesel, year, price, serialNumber = Math.floor(Math.random() * 10000000)) {
        this.make = make;
        this.model = model;
        this.diesel = diesel;
        this.year = year;
        this.price = price;
        this.serialNumber = serialNumber;
    }
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}...`);
    }
    displaySerialNumber() {
        console.log(`serial number is: ${this.serialNumber}`);
    }
    modifySerialNumber(newSerialNumber) {
        this.serialNumber = newSerialNumber;
    }
    displaySaleInfo() {
        console.log(`${this.year} ${this.make} ${this.model} for sale for ${this.price}`);
    }
}
