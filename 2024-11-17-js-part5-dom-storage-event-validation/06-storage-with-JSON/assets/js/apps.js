const products = [
    {
        id: 1,
        name: `Lenovo laptop`,
        price: 1000
    },
    {
        id: 2,
        name: `HP screen 25`,
        price: 600
    },
    {
        id: 3,
        name: `Logitech mouse`,
        price: 20
    }
]

// const json = JSON.stringify(products)
// localStorage.setItem(`products`, json)
localStorage.setItem(`products`, JSON.stringify(products))


const info = JSON.parse(localStorage.getItem(`products`));
console.log(info[2]);