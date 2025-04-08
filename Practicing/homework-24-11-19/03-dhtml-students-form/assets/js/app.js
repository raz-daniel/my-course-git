let average =0;
let count =0;
let totalGrades =0

function collectData() {
    const firstName = document.getElementById(`firstName`).value;
    const familyName = document.getElementById(`familyName`).value;
    const grade = document.getElementById(`grade`).value;

    return {
        firstNameC: firstName,
        familyNameC: familyName,
        gradeC: grade,
    }
}

function generateHTML(data) {
    const newHTML = `
        <tr>
        <td>${data.firstNameC}</td>
        <td>${data.familyNameC}</td>
        <td>${data.gradeC}</td>
      </tr>       
    `
    return newHTML;
}

function calculateAverage() {
    count +=1;
    const currentGrade = Number(document.getElementById(`grade`).value);
    totalGrades +=currentGrade;
    average= `The Class Average is: ${(totalGrades/count).toFixed(2)}
    `
    return average;
}

function renderHTML(newHTML,average) {
    const tableBody = document.getElementById(`tableBody`);
    tableBody.innerHTML += newHTML;
    const averageSpan = document.getElementById(`averageSpan`);
    averageSpan.innerHTML = average;
}

function clearForm() {
    const resetForm = document.getElementById(`studentsGradesForm`);
    resetForm.reset();
    document.getElementById(`firstName`).focus();
}

function addStudentToTable(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    const average = calculateAverage()
    renderHTML(newHTML,average);
    clearForm();
}