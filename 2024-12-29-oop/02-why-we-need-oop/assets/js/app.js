const carMake = 'Opel';
const carModel = 'Corsa';
const carYear = '2012';
const carPrice = '13000';
function igniteCar(carMake) {
    console.log(`ignited... you can now drive your ${carMake}`);
}
const car = {
    make: 'Opel',
    model: 'Corsa',
    year: 2012,
    price: 13000,
    igniteCar: (carMake) => {
        console.log(`ignited... you can now drive your ${carMake}`);
    }
};
const anotherCar = {
    make: 'BMW',
    model: '535i',
    diesel: true,
    yearMade: 2012,
    price: 13000,
    igniteCar: (carMake) => {
        console.log(`ignited... you can now drive your ${carMake}`);
    }
};
const nissanMicra = {
    make: 'nissan',
    model: 'micra',
    year: 2015,
    diesel: false,
    price: 12000,
    ignite: () => {
        console.log('starting...');
    }
};
const nissanMaxima = {
    make: 'nissan',
    model: 'maxima',
    year: 2012,
    diesel: true,
    price: 112000,
    ignite: () => {
        console.log('igniting...');
    }
};
