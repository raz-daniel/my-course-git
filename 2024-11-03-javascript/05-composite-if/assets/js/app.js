const grade = +prompt(`Add Grade:`)
if (grade < 0 || grade > 100) {
    document.write(`invalid`)
} else if (grade === 100) {
    document.write(`Perfect`)
} else if (grade >= 60) {
    document.write(`Pass`)
} else {
    document.write(`Fail`)
}

if (grade >=0 && grade <=100) {
    if (grade ===100) {
        document.write(`Perfect`)
    } if (grade >=60) {
        document.write(`Pass`)
    } else {
        document.write(`Fail`)
    } else {
        document.write(`Invalid`)
    }
}