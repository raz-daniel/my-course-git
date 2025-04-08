export default class Mobile {
    //methods
    constructor(type, screenSize, price, camerasNum) {
        this.pinCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        this.type = type;
        this.screenSize = screenSize;
        this.price = price;
        this.camerasNum = camerasNum;
    }
    displaySaleInfo() {
        console.log(`A ${this.type} is for sale`);
    }
    getPinCode() {
        return this.pinCode;
    }
    takePicture() {
        console.log(`I'm taking a pictures with my ${this.type} camera`);
    }
    turnOn() {
        console.log(`I'm turning home my ${this.type}`);
    }
    turnOff() {
        console.log(`I'm shutting down my ${this.type}`);
    }
}
