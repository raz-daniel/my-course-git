export default class Mobile {
    
    //data members / class feilds
    private type: string
    private screenSize: number
    private price: number
    private camerasNum: number
    private pinCode: number = Math.floor(Math.random() * (9999 - 1000)) +1000

    //methods
    public constructor(type: string, screenSize: number, price: number, camerasNum: number) {
        this.type = type
        this.screenSize = screenSize
        this.price = price
        this.camerasNum = camerasNum
    }

    public displaySaleInfo() {
        console.log(`A ${this.type} is for sale`)
    }
    
    public getPinCode() {
        return this.pinCode
    }

    public takePicture() {
        console.log(`I'm taking a pictures with my ${this.type} camera`)
    }

    public turnOn() {
        console.log(`I'm turning home my ${this.type}`)
    }

    public turnOff() {
        console.log(`I'm shutting down my ${this.type}`)
    }
}

