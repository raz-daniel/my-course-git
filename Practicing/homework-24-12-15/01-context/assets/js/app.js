'use strict';
(()=>{

const paragraphs = document.getElementsByTagName('p');

const getRandomColor = () => {
    const colors = ['red', 'blue', 'yellow', 'pink'];
    return colors[Math.floor(Math.random()*colors.length)];

}

for (const p of paragraphs) {
    p.addEventListener('click', function () {
        setTimeout(() => {
            this.style.backgroundColor = getRandomColor();
        }, 1000);
    })
}






})()