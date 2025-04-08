(() => {
    const ERRORS = {
        EMPTY_INPUT: `Error - input cannot be empty, must enter value!`,
        INVALID_CLASS_SIZE: `Error - the number of students must be between 1 to 40!`,
        INVALID_STUDENT_NAME: `Error - student name must contain text!`,
        INVALID_STUDENT_GRADE: `Error - Student grade must be a number between 0 to 100!`,
        CANCEL: `Error - operation cancelled`
    };

    const isClassSizeValid = studentsNum => {
        if (!studentsNum || studentsNum.trim() === "") throw new Error(ERRORS.EMPTY_INPUT);
        if (isNaN(studentsNum) || +studentsNum < 1 || +studentsNum > 40) throw new Error(ERRORS.INVALID_CLASS_SIZE);
        return true;
    }

    const isValidName = name => {
        if (name === null) throw new Error(ERRORS.CANCEL);
        if (!name || name.trim() === "") throw new Error(ERRORS.EMPTY_INPUT);
        if (!isNaN(name)) throw new Error(ERRORS.INVALID_STUDENT_NAME);
        return true;
    }

    const isValidGrade = grade => {
        if (grade === null) throw new Error(ERRORS.CANCEL);
        if (!grade || grade.trim() === "") throw new Error(ERRORS.EMPTY_INPUT);
        if (isNaN(grade) || +grade > 100 || +grade < 0) throw new Error(ERRORS.INVALID_STUDENT_GRADE);
        return true;
    }

    const collectData = studentsNum => {
        const students = [];
        for (let i = 1; i <= +studentsNum; i++) {
            const name = prompt(`Enter student ${i} of ${studentsNum} name:`);
            isValidName(name);
            const grade = prompt(`Enter ${name}'s grade:`);
            isValidGrade(grade);

            students.push({
                name: name.trim(),
                grade: +grade
            })
        }
    

        return students;
    }

const calculateStats = data => {
    const average = (data.reduce((sum, student) => sum + student.grade, 0)) / data.length;

    const highest = data.reduce((max, student) => max.grade > student.grade ? max : student, data[0]);

    const lowest = data.reduce((min, student) => min.grade < student.grade ? min : student, data[0]);

    const passing = data.filter(student => student.grade >= 60);

    return {
        average: average.toFixed(2),
        highest,
        lowest,
        passing
    }
}

const getStats = event => {
    event.preventDefault();
    const studentsNum = document.getElementById('classSize').value;
    try {
        if (isClassSizeValid(studentsNum)) {
            const data = collectData(studentsNum);
            const stats = calculateStats(data);
            return alert(
                `Average is: ${stats.average}\n` +
                `Highest is: ${stats.highest.name} with ${stats.highest.grade}\n` +
                `Lowest is: ${stats.lowest.name} with ${stats.lowest.grade}\n` +
                `The number of passing Students is: ${stats.passing.length}\n`
            )
        }
    } catch (error) {
        alert(error.message);
    }
};

document.querySelector('form').addEventListener('submit', getStats);

}) ()