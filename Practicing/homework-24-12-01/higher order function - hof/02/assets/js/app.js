const points = [];
for (let i=0; i < 20; i++) {
    const pointX = Math.round(Math.random()*100);
    const pointY = Math.round(Math.random()*100);
    points.push({
        x: pointX,
        y: pointY
    })
}
//1
points.forEach(point => console.log(`x:${point.x},y:${point.y}`));
//2
console.log(`First X > Y`, points.find(point => point.x > point.y))
//3
console.log(`First Y > 50`, points.find(point => point.y > 50))
//4
console.log(`All X Odd`, points.filter(point => point.x % 2 !== 0))
//5
console.log(`All Y > 50`, points.filter(point => point.y > 50))
//6
console.log(`Index First X > 50`, points.findIndex(point => point.x > 50))
//7 
points.forEach(point => console.log(`Sqrt(X^2+Y^2)`, Math.sqrt(point.x ** 2 + point.y ** 2)))
//8
console.log(`Min X is:`, points.reduce((min, currentNum) => currentNum.x < min ? currentNum.x : min, Infinity));
//9
