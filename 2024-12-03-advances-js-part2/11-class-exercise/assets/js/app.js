const showFactor = (event) => {
    event.preventDefault();
    const grade = +document.getElementById(`grade`).value
    try {
        const gradeAfterFactor = calcFactor(grade)
        console.log(`the grade after factor for ${grade} is ${gradeAfterFactor}`)
    } catch (error) {
        alert(error.message)
    }
}

    const calcFactor = (grade) => {
        if (!grade) throw new Error(`Must enter input`)
        if (grade > 100) throw new Error (`Grade Limit is 100`)
        if (grade < 0) throw new Error(`Grade Min is 0`)
        return 10 * Math.sqrt(grade)
    }

