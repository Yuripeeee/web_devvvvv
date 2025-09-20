const lbb = document.getElementById("loginContainer");
const sbb = document.getElementById("signupContainer");
const fb = document.getElementById("forgotButton").addEventListener("click", showForgotBox);
const fbox = document.getElementById("frgtBox");
const fbb = document.getElementById("fbBack").addEventListener("click", hideForgotBox);
const fbs = document.getElementById("fbSubmit").addEventListener("click", validateinputEmail);
const npw = document.getElementById("frgtBox2");
const pwb = document.getElementById("pwBack").addEventListener("click", hideNewPassword);
const pws = document.getElementById("pwSubmit").addEventListener("click", validateNewPassword);
const sign_up = document.querySelector("#signUp button").addEventListener("click", showSignUpBox);
const log_in = document.querySelector("#login button").addEventListener("click", showLoginBox);
const message_box = document.getElementById("messageBox");
const done = document.getElementById("doneButton").addEventListener("click", hideMessageBox);
const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    validateSignUp();
});

//Sign Up
const sign_email = document.getElementById("sign-email");
const sign_password = document.getElementById("sign-password");
const sign_confirmPassword = document.getElementById("sign-confirmPassword");

//Forgot Password
const forgot_email = document.getElementById("forgot-email");
const forgot_password = document.getElementById("forgot-password");
const forgot_confirmPassword = document.getElementById("forgot-confirmPassword");


function validateSignUp(){
    const signEmail = sign_email.value.trim();
    const signPass = sign_password.value.trim();
    const signConfirmPass = sign_confirmPassword.value.trim();

    let isValid = true;

    if (signEmail === ''){
        setError(sign_email, 'Email cannot be blank');
        isValid = false;
    }else{
        setSuccess(sign_email);
    }

    if(signPass === ''){
        setError(sign_password, 'Password cannot be blank');
        isValid = false;
    }else if(signPass.length < 6){
        setError(sign_password, 'Password is too short');
        isValid = false;
    }else if(signPass.length > 16){
        setError(sign_password, 'Password is too long');
        isValid = false;
    }else if (!/[0-9]/.test(signPass)) {
        setError(sign_password, 'Password must contain at least one number');
        isValid = false;
    }else if (!(/[a-z]/.test(signPass) && /[A-Z]/.test(signPass))) {
        setError(sign_password, 'Password must contain both uppercase and lowercase letters');
        isValid = false;
    }else{
        setSuccess(sign_password);
    }
    
    if(signConfirmPass === ''){
        setError(sign_confirmPassword, 'Confirm Password cannot be blank');
        isValid = false;
    }else if (signConfirmPass !== signPass) {
        setError(sign_confirmPassword, 'Passwords do not match');
        isValid = false;
    }else{
        setSuccess(sign_confirmPassword);
    }

    if(isValid){
        alert("Your account has been created, Please wait for the aproval of the admin")
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.classList.remove("invisible");
}


function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.classList.add('invisible');
    input.classList.remove('border-red-500');
}

function validateinputEmail(){
    const forgotEmail = forgot_email.value.trim();

    if (forgotEmail === ''){
        setError(forgot_email, 'Email cannot be blank');
    }else{
        setSuccess(forgot_email);
        showNewPassword();
    }
}

function validateNewPassword(){
    const forgotPassword = forgot_password.value.trim();
    const forgotConfirmPass = forgot_confirmPassword.value.trim();

    isValid = true;

    if(forgotPassword === ''){
        setError(forgot_password, 'Password cannot be blank');
        isValid = false;
    }else if(forgotPassword.length < 6){
        setError(forgot_password, 'Password is too short');
        isValid = false;
    }else if(forgotPassword.length > 16){
        setError(forgot_password, 'Password is too long');
        isValid = false;
    }else if (!/[0-9]/.test(forgotPassword)) {
        setError(forgot_password, 'Password must contain at least one number');
        isValid = false;
    }else if (!(/[a-z]/.test(forgotPassword) && /[A-Z]/.test(forgotPassword))) {
        setError(forgot_password, 'Password must contain both uppercase and lowercase letters');
        isValid = false;
    }else{
        setSuccess(forgot_password);
    }
    
    if(forgotConfirmPass === ''){
        setError(forgot_confirmPassword, 'Confirm Password cannot be blank');
        isValid = false;
    }else if (forgotConfirmPass !== forgotPassword) {
        setError(forgot_confirmPassword, 'Passwords do not match');
        isValid = false;
    }else{
        setSuccess(forgot_confirmPassword);
    }

    if(isValid){
        showMessageBox();
    }

}


function showForgotBox(){
    fbox.classList.remove("invisible");
}

function showLoginBox() {
    lbb.classList.remove("invisible");
    sbb.classList.add("invisible");
}

function showSignUpBox(){
    sbb.classList.remove("invisible");
    lbb.classList.add("invisible")
}

function showNewPassword(){
    npw.classList.remove("invisible");
    fbox.classList.add("invisible");
}

function showMessageBox(){
    message_box.classList.remove("invisible");
    npw.classList.add("invisible");
    fbox.classList.add("invisible");
}

function hideForgotBox(){
    fbox.classList.add("invisible");
}

function hideNewPassword(){
    npw.classList.add("invisible");
    fbox.classList.remove("invisible");
}

function hideMessageBox(){
    message_box.classList.add("invisible");
}