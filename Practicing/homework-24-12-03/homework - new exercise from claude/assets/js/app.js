'use strict';

(() => {


    const ERRORS = {
        INVALID_CLASS_SIZE: `Class size must be between 1-40 students!`,
        EMPTY_NAME: `Student name cannot be empty!`,
        INVALID_GRADE: `Student grade must be between 0-100!`,
        INVALID_NAME: `Student name must be text!`,
        OPERATION_CANCELLED: `Operation Cancelled!`
    };


    const isValidStudent = name => {
        if (name.trim() === "" || !name) {
            throw new Error(ERRORS.EMPTY_NAME);
        }
        if (!isNaN(name)) {
            throw new Error(ERRORS.INVALID_NAME);
        }
        return true;
    }

    const isValidGrade = grade => {
        if (!grade || grade.trim() === "") {
            throw new Error(ERRORS.INVALID_GRADE);
        }
        const numGrade = +grade
        if (isNaN(numGrade) || numGrade < 0 || numGrade > 100) {
            throw new Error(ERRORS.INVALID_GRADE)
        }
        return true;
    };


    const collectData = (numStudents) => {
        const classGrades = [];

        for (let i = 1; i <= numStudents; i++) {
            const name = prompt(`Enter Student ${i} of ${numStudents} Name`);
            if (name === null) throw new Error(ERRORS.OPERATION_CANCELLED);
            isValidStudent(name);

            const grade = prompt(`Enter ${name}'s Grade`);
            if (grade === null) throw new Error(ERRORS.OPERATION_CANCELLED);
            isValidGrade(grade);

            classGrades.push({
                name: name.trim(),
                grade: +grade
            });
        }
        return classGrades;
    };




    const calculateStats = classGrades => {
        const sum = classGrades.reduce((sum, student) => sum + student.grade, 0);
        const average = sum / classGrades.length;

        const highest = classGrades.reduce((max, student) =>
            student.grade > max.grade ? student : max, classGrades[0]);
        const lowest = classGrades.reduce((min, student) =>
            min.grade < student.grade ? min : student, classGrades[0])

        const passing = classGrades.filter(student => student.grade >= 60).length;

        return {
            average: average.toFixed(2),
            highest,
            lowest,
            passing
        };
    }

    const calcGrade = event => {
        event.preventDefault();

        try {
            const students = document.getElementById('classSize').value;
            if (!students || isNaN(students) || +students < 1 || +students > 40) {
                throw new Error(ERRORS.INVALID_CLASS_SIZE);
            }
            const classGrades = collectData(+students);
            const stats = calculateStats(classGrades);

            alert(
                `Class Statistics:\n` +
                `Average Grade: ${stats.average}\n` +
                `Highest Grade: ${stats.highest.name} (${stats.highest.grade})\n` +
                `Lowest Grade: ${stats.lowest.name} (${stats.lowest.grade})\n` +
                `Number of Passing Students: ${stats.passing}`
            );

        } catch (error) {
            alert(error.message)
        }
    }


    document.querySelector('form').addEventListener('submit', calcGrade)
})()