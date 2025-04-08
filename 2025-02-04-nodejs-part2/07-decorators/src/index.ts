function Mammal(target: any): any {
    return class extends target {
        birthdate: Date = new Date()
    }
}


function Min(value: number) {
    return function(target: any) {
        let _value: number

        // Object.defineProperty(target, proper)
    }
}

class Animal {

}

@Mammal
class Lion extends Animal {
    
    @Min(100)
    weight: number;

    constructor(weight: number) {
        super()
        this.weight = weight
    }

    sayHello() {
        console.log('roaring....')
    }
}

const simba = new Lion(400)
// console.log(`simba birthdate is: ${(simba as any).birthdate}`)
console.log(simba)