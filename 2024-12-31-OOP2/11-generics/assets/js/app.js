const dog = {
    type: `nuxed`,
    name: `Noop`,
    weight: 30,
    breed: `Afghan Hound`
};
const cat = {
    type: `saimes`,
    name: `Eden`,
    weight: 8,
    numberOfSouls: 4
};
function clone(obj) {
    return Object.assign({}, obj);
}
const aDuplicationOfDog = Object.assign({}, dog);
const anotherDuplicationOfDog = clone(dog);
console.log(typeof dog);
console.log(typeof aDuplicationOfDog);
console.log(typeof anotherDuplicationOfDog);
console.log(cat);
const aDuplicationOfCat = clone(cat);
const stamObject = clone({
    type: `shes`,
    name: `yossi`,
    age: 22
});
export {};
