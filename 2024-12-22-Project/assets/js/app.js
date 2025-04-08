'use strict';
(() => {


document.getElementById('navCoins').addEventListener('click', () => {
    document.getElementById('coins').style.display = "none"
    document.getElementById('reports').style.display = "none"
    document.getElementById('about').style.display = "none"
})

document.getElementById('navReports').addEventListener('click', () => {
    document.getElementById('coins').style.display = 'none';
    document.getElementById('reports').style.display = 'block';
    document.getElementById('about').style.display = 'none';

})

document.getElementById('navAbout').addEventListener('click', () => {    
    document.getElementById('coins').style.display = 'none'
    document.getElementById('reports').style.display = 'none'
    document.getElementById('about').style.display = 'block'
})

})()