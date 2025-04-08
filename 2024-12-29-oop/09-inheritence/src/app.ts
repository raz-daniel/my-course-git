import Animal from './animal.js'
import Cat from './cat.js'
import Dog from './dog.js'
import Fish from './fish.js'
import SiameseCat from './siamesCat.js'

const gingo = new Cat(
    'orange',
    'mixed',
    1000,
    3
)

gingo.display()

const lucky = new Dog(
    'gold',
    'chinese pug',
    5000,
    true
)

lucky.display()

const nemo = new Fish(
    'gold',
    'lokus',
    10,
    false
)

nemo.display()

const jackieChan = new SiameseCat(
    'black',
    1000,
    9
)

jackieChan.display()

console.log(`number of animals in shop is ${Animal.numOfAnimals}`)