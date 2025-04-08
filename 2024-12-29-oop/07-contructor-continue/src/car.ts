export default class Car {
    
   public constructor(
    private make: string,
    private model: string,
    private diesel: boolean,
    private year: number,
    private price: number,
    private serialNumber: number = Math.floor(Math.random() * 10000000)
) {

}
    
    public drive() {
        console.log(`I am driving my ${this.make} ${this.model}...`)
    }

    public displaySerialNumber() {
        console.log(`serial number is: ${this.serialNumber}`)
    }

    public modifySerialNumber(newSerialNumber: number) {
        this.serialNumber = newSerialNumber
    }

    public displaySaleInfo() {
        console.log(`${this.year} ${this.make} ${this.model} for sale for ${this.price}`)
    }
}

