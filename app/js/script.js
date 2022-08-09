const inputE = document.getElementById('email');
const submit = document.getElementById('submit');
const iconError = document.getElementById('icon-error');
const errorText = document.getElementById('text-error');
const emailFormat = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])";
const form = document.getElementById('form');
let error = [];

submit.addEventListener("click", e => {
    error = [];
    const email = inputE.value;
    
    if (email == "" || email === undefined) {
        error.push('The "input" field is emty');
        iconError.style.display = "block";
        errorText.innerHTML = error[0];
        errorText.style.color = "var(--softRed)";
        errorText.style.display = "block";
        form.style.border= "2px solid var(--softRed)";
        
    } else if (!email.match(emailFormat)) {
        error.push("The email address is not formatted correctly");
        iconError.style.display = "block";
        errorText.innerHTML = error[0];
        errorText.style.color = "var(--softRed)";
        errorText.style.display = "block";
        form.style.border= "2px solid var(--softRed)";
    } else {
        error.push("Thank You!");
        iconError.style.display = "none";
        errorText.innerHTML = error[0];
        errorText.style.color = "blue";
        errorText.style.display = "block";
        form.style.border = "1px solid var(--desaturatedRed)";
    }
    e.preventDefault();
});