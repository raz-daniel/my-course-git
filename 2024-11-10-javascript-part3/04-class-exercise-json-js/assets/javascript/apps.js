const store = [
    {
        name: `Health-Store`,
        city: `Hadar Am`,
        street: `Haholandim`,
        streetnum: 18,
        type: `treatments`
    }
]

//Java Script into JSON
const jsToJason = JSON.stringify(store);
console.log(jsToJason);

//JSON into Java Script
const item = JSON.parse(jsToJason);
console.log(item)

