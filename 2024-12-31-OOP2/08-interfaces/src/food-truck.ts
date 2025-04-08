import CoffeeMaker from "./coffee.js";
import HotdogsMaker from "./hotdogs.js";
import Schnitzel from "./schnitzel.js";

export default class FoodTruck implements HotdogsMaker, CoffeeMaker, Schnitzel{
    pan: object;
    fry(addons: object[]): Object {
        console.log(`making schnitzel`)
        return {}
    }

    hotdogsMachine: Object
    makeHotdogs(): object {
        console.log(`making hotdog`)
        return {}
    }

    espressoMachine: object
    makeLatte(): Object {
        console.log(`making latte`)
        return {}
    }
    makeAmericano(): object {
        console.log(`making americano`)
        return {}
    }

}