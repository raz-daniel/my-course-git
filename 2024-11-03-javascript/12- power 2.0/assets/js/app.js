let power = 1;
while (power !==0) {
    power = +prompt(`add number`);
    // document.write(`${power**2} `);
    if (power === 0) {
        break;
    } else alert(power ** 2);
}
