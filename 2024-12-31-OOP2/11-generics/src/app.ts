import Animal from "./animal.js";
import Cat from "./cat.js";
import Dog from "./dog.js";

const dog: Dog = {
    type: `nuxed`,
    name: `Noop`,
    weight: 30,
    breed: `Afghan Hound`
}

const cat: Cat = {
    type: `saimes`,
    name: `Eden`,
    weight: 8,
    numberOfSouls: 4
}

function clone<T extends Animal>(obj: T): T {
    return {...obj}
}

const aDuplicationOfDog = {...dog}
const anotherDuplicationOfDog = clone(dog)
console.log(typeof dog)
console.log(typeof  aDuplicationOfDog)
console.log(typeof  anotherDuplicationOfDog)

console.log(cat)

const aDuplicationOfCat = clone(cat)


const stamObject =  clone({
    type: `shes`,
    name: `yossi`,
    age: 22
})