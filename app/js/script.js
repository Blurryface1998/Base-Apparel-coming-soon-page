const inputE = document.getElementById('email');
const submit = document.getElementById('submit');
const iconError = document.getElementById('icon-error');
const errorText = document.getElementById('text-error');
const emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const form = document.getElementById('form');
let error = [];

submit.addEventListener("click", e => {
    error = [];
    e.preventDefault();
    const email = inputE.value;
    
    if (email == "" || email === undefined) {
        error.push('The "input" field is emty');
        iconError.style.display = "block";
        errorText.innerHTML = error[0];
        form.style.border= "1px solid var(--softRed)";
        
    } else if (!email.match(emailFormat)) {
        error.push("The email address is not formatted correctly");
        iconError.style.display = "block";
        errorText.innerHTML = error[0];
        form.style.border= "1px solid var(--softRed)";
    }
});