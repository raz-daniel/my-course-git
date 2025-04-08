document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const userInput = document.getElementById('userInput') as HTMLInputElement
    const result = userInput.value
    console.log(result)

})

function test() {
    type Human = {
        name: string | undefined, //union type - or string or undefined
        middleName?: string
        familyName: string
        age: number,
        birthdate: Date
    }

    type Animal = {
        type: string,
        eat: Function
    }

    const toy: Animal = {
        type: 'yorkshare',
        eat: () => { console.log('eating bonzo') }
    }

    const yossi: Human = toy as unknown as Human

}