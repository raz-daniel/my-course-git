let num = +prompt(`add num`);
while (num !== 0 ) {
    alert(num % 7 ==0 ? `divided in 7`: `dont`);
    num = +prompt(`add num`);
}