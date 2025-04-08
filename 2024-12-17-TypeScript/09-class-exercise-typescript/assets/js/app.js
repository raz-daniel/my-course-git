document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = document.getElementById('userInput');
    const result = userInput.value;
    console.log(result);
});
function test() {
    const toy = {
        type: 'yorkshare',
        eat: () => { console.log('eating bonzo'); }
    };
    const yossi = toy;
}
