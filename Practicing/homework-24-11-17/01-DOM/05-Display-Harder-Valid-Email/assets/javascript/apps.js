function validate() {
    const emailBox = document.getElementById(`email`);
    const span = document.getElementById(`span`);
    const email=emailBox.value;
    if (
        email.trim() === "" ||
        !email.includes(`@`) ||
        !email.includes(`.`) ||
        email.indexOf(`@`) >= email.lastIndexOf(`.`) ||
        email.indexOf(`@`) <= 0 ||
        email.lastIndexOf(`.`) >= email.length-1
    ) {
        emailBox.style.backgroundColor="pink";
        span.innerText="Please enter a valid email address"
    } else {
        emailBox.style.backgroundColor="white"
        span.innerText=""
        alert (`EMAIL is ${email}`);
    }
}