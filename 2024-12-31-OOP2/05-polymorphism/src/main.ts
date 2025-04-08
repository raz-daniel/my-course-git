import Client from "./client.js";
import Employee from "./employee.js";
import Person from "./person.js";
import Supplier from "./supplier.js";

const Freddy = new Client(`Freddy`, new Date(), [90, 30,20]);
Freddy.printName()

const George = new Employee(`George`, new Date(), [6000, 6200, 6000])
George.printName()

const Jessica = new Supplier(`Jessica`, new Date(), [400, 500])
Jessica.printName()

const totalReveneue = Freddy.calcRevenue() + George.calcRevenue() + Jessica.calcRevenue()
console.log(totalReveneue)


function sendNewYearGreeting(person: Person) {
    console.log(`Happy new year ${person.name}`)
}

sendNewYearGreeting(Freddy)
sendNewYearGreeting(George)
sendNewYearGreeting(Jessica)