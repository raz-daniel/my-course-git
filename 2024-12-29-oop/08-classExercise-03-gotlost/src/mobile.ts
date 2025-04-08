export default class Mobile {
    

    //methods
    public constructor(
        private readonly type: string,
        private readonly screenSize: number,
        private readonly camerasNum: number,
        private price: number
    ) {}

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

