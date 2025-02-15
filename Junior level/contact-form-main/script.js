let btn = document.querySelector(".btn"); 
let fname = document.querySelector(".firstname");
let lname = document.querySelector(".lastname");
let emailInput = document.querySelector(".emailInput");
let textInput = document.getElementById("message");
let checkBtn = document.querySelector(".check");
let checkBtn2 = document.querySelector(".check2");
let mandatoryCheck = document.getElementById("mand"); // Mandatory checkbox

// Error elements
let error = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");
let errorMessage = document.querySelector(".e-error");
let errorForEmpty = document.querySelector(".e-error2");
let checkError = document.querySelector(".check-error");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let isValid = true;

    // First Name Validation
    if (fname.value.trim() === "") {
        error.style.display = "block";
        fname.style.border = "1px solid red";
        isValid = false;
    } else {
        error.style.display = "none";
        fname.style.border = "1px solid #b1b1b1";
    }

    // Last Name Validation
    if (lname.value.trim() === "") {
        error2.style.display = "block";
        lname.style.border = "1px solid red";
        isValid = false;
    } else {
        error2.style.display = "none";
        lname.style.border = "1px solid #b1b1b1";
    }

    // Message Validation
    if (textInput.value.trim() === "") {
        error3.style.display = "block";
        textInput.style.border = "1px solid red";
        isValid = false;
    } else {
        error3.style.display = "none";
        textInput.style.border = "1px solid #0C7D69";
    }

    // Email Validation
    if (emailInput.value.trim() === "") {
        errorForEmpty.style.display = "block";
        emailInput.style.border = "1px solid red";
        isValid = false;
    } else {
        errorForEmpty.style.display = "none";
        if (emailRegex.test(emailInput.value)) {
            errorMessage.style.display = "none";
            emailInput.style.border = "1px solid #0C7D69";
        } else {
            errorMessage.style.display = "block";
            emailInput.style.border = "1px solid red";
            isValid = false;
        }
    }

    // Checkbox Validation (At least one must be checked)
    if (checkBtn.checked || checkBtn2.checked) {
        checkError.style.display = "none";
        error4.style.display = "none";
    } else {
        checkError.style.display = "block";
        error4.style.display = "block";
        isValid = false;
    }

    // Mandatory Checkbox Validation (User must consent)
    if (!mandatoryCheck.checked) {
        error4.style.display = "block"; // Show error
        isValid = false;
    } else {
        error4.style.display = "none"; // Hide error
    }

    // If all validations pass, show popup and reset fields
    if (isValid) {
        Swal.fire({
            title: "Success!",
            text: "Form submitted successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });

        // Reset fields
        fname.value = "";
        lname.value = "";
        textInput.value = "";
        emailInput.value = "";
        checkBtn.checked = false;
        checkBtn2.checked = false;
        mandatoryCheck.checked = false; // Uncheck the mandatory checkbox
    }
});

// Email Live Validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value)) {
        errorMessage.style.display = "none";
        emailInput.style.border = "1px solid  #b1b1b1";
    } else {
        errorMessage.style.display = "block";
        emailInput.style.border = "1px solid red";
    }
});
