// ***********      Arrays of Objects        *****************
// ************** Homework! Exercise 01  *********************

//************************ 01 *****************************
// Creating 3 Object of Cars - with properties of 3 keys: model, year, color and add values:

/*
const car1 = {
    model: `Honda`,
    year: 2021,
    color: `yellow`
}

const car2 = {
    model: `Toyota`,
    year: 2024,
    color: `pink`
}

const car3 = {
    model: `Kia`,
    year: 2023,
    color: `red`
}

const carsArray = [car1, car2, car3];
// console.log(carsArray[0]);
// console.log(`First Car: ${JSON.stringify(carsArray[0])}`);
// console.log(`The First Car is a: ${carsArray[0].model}, manufactured at: ${carsArray[0].year} and comes in ${carsArray[0].color} color.`);
console.log(` ********** `)
for (let car of carsArray) {
    
    for (const key in car) {
        console.log(`${key}: ${car[key]}`)
    }
    console.log(` ********** `)
}
*/

//************************ 02 *****************************
// Array of 5 clothes objects - Hard Way (One Line)

/*
const clothes = [{type: `T-Shirt`, size: `Xs`, price: 1200, color: `red`},{type: `T-Shirt`, size: `M`, price: 800, color: `light blue sky`},{type: `Jeans`, size: `L`, price: 1400, color: `dark gray`},{type: `Skirt`, size: `M`, price: 860, color: `pink`},{type: `Boxer`, size: `Xl`, price: 120, color: `black`}]
for (const cloth of clothes) {
    // console.log(`*** *** *** ***`)
    for (const item in cloth) {
        console.log(`${item}: ${cloth[item]}`);
    }
}
console.log(`*** *** *** ***`)
*/

//************************ 03 *****************************
// Array with 3 GeoLocation objects, Adding the Inputs into the arrays! and Printing them!.

/*
const geolocations = [
    {
        latitude: null,
        longitude: null
    },
    {
        latitude: null,
        longitude: null
    },
    {
        latitude: null,
        longitude: null
    }
]
let i =0;
for (const geolocation of geolocations) {
    i++;
    console.log(`**** location ${i} *****`);
    for (const titude in geolocation) {
        let value;
        do {
            value = +prompt(`Please enter ${titude} for location ${i}:`);
        } while (
            isNaN(value) || 
            (titude === `latitude` && (value > 90 || value < -90)) ||
            (titude === `longitude` && (value > 180 || value < -180)));
        console.log(`The ${titude} for geolocation ${i} is: ${geolocation[titude]}`);
    }    
}
console.log(`**** ***** *****`);

*/