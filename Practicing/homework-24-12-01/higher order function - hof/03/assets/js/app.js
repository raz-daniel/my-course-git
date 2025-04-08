const getRandom = (min, max) => Math.floor(Math.random()*(max-min))+min;

const generatePizza = () => ({
    const diameter = getRandom(20,50);
    const slices = getRandom(4,8);
    const toppings = getRandom(1,8);
    const price = getRandom(40,150);
});

const pizzas =[]    
for (let i=0; i < 20; i++) {
    pizzas.push(generatePizza())
    }
    
//1
// pizzaContainer.forEach(pizza => console.log(`diameter:${pizza.diameter},slices:${pizza.slices},toppings:${pizza.toppings},price:${pizza.price}`));
//2
// console.log(`First Pizza with no toppings:`, pizzaContainer.find(pizza => pizza.toppings === 0))
//3
// console.log(`First Pizza with prices less than 30:`, pizzaContainer.find(pizza => pizza.price < 30))
//4

//5

//6

//7 

//8

//9
console.log(pizzas)