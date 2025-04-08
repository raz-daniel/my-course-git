export default class Mobile {
    
    //data members / class feilds
    type: string
    screenSize: number
    price: number
    camerasNum: number

    //methods
    takePicture() {
        console.log(`I'm taking a pictures with my ${this.type} camera`)
    }
    turnOn() {
        console.log(`I'm turning home my ${this.type}`)
    }
    turnOff() {
        console.log(`I'm shutting down my ${this.type}`)
    }
}

