// ----------- Input Fields ---------------- //
let billCount = document.querySelector(".bill-count");
let countNum = document.querySelector(".count-num");

// ---------------- Percentage Section ----------- //
let fivePer = document.querySelector(".five");
let tenPer = document.querySelector(".ten");
let fifteenPer = document.querySelector(".fifteen");
let twentyFivePer = document.querySelector(".twenty-five");
let fiftyPer = document.querySelector(".fifty");

// ------ Output Section ---------- //
let tipAmt = document.querySelector(".tip-amt");
let totalAmt = document.querySelector(".total-amt");

// ------------ Reset Button --------------- //
let reset = document.querySelector(".reset");

// ------ Error -------//
let error = document.querySelector(".error");

// Function to calculate tip and total
function calculateTip(percent) {
    let billAmount = parseFloat(billCount.value) || 0;
    let peopleCount = parseInt(countNum.value); // ✅ Removed default 1

    // If number of people is 0, show error
    if (!peopleCount || peopleCount <= 0) {
        error.style.display = "block"; // ✅ Corrected errorMsg to error
        return;
    } else {
        error.style.display = "none"; // ✅ Hide error when input is valid
    }

    // If bill amount is zero, reset values
    if (billAmount === 0) {
        tipAmt.innerHTML = "$0.00";
        totalAmt.innerHTML = "$0.00";
        return;
    }

    let tip = (billAmount * percent) / 100 / peopleCount;
    let totalPerPerson = (billAmount + (billAmount * percent) / 100) / peopleCount;

    // Update UI
    tipAmt.innerHTML = "$" + tip.toFixed(2);
    totalAmt.innerHTML = "$" + totalPerPerson.toFixed(2);
}

// Event Listeners for Tip Percentage Buttons
fivePer.addEventListener("click", () => calculateTip(5));
tenPer.addEventListener("click", () => calculateTip(10));
fifteenPer.addEventListener("click", () => calculateTip(15));
twentyFivePer.addEventListener("click", () => calculateTip(25));
fiftyPer.addEventListener("click", () => calculateTip(50));

let customPer = document.querySelector(".custom-type");

// 🛠 Check if the element exists before adding the event listener
if (customPer) {
    customPer.addEventListener("input", () => {
        let customTip = parseFloat(customPer.value);

        // 🛠 Debug: Log the customTip value
        console.log("Custom Tip Value:", customTip);

        if (!isNaN(customTip) && customTip >= 0) {
            calculateTip(customTip);
        }
    });
}

// 🛠 Reset Button: Clears all inputs and resets output
reset.addEventListener("click", () => {
    tipAmt.innerHTML = "$0.00";
    totalAmt.innerHTML = "$0.00";
    billCount.value = "";
    countNum.value = "";
    customPer.value = "";
    error.style.display = "none"; // ✅ Hide error on reset
});
