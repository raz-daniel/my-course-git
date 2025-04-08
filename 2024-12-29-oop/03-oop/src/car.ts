export default class Car {
    
    //data members / class feilds
    make: string
    model: string
    diesel: boolean
    year: number
    price: number

    //methods
    drive() {
        console.log(`I am driving my ${this.make} ${this.model}...`)
    }
}

