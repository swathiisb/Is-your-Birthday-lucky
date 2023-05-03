const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const privacyPolicyBtn = document.querySelector("#privacy-button")
const privacyNote = document.querySelector(".privacy-policy");


function compareValues(sum, luckyNumber){

    if (dateOfBirth.value  === "" || luckyNumber === "") {
        return outputBox.innerText = "Please enter both the details"
    }else if (Number(luckyNumber < 0)) {
        return outputBox.innerText = "Please enter positive number"
    } else if (sum % luckyNumber === 0) {
        outputBox.innerText = "Yeyy... Your birthday date is lucky 🎂🥳";
    } else {
        outputBox.innerText = "Ohh..! Your birthday date is not so lucky 🙁";
    }
}

function checkBirthdayDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
}
//to add numbers and then return it
function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthdayDateIsLucky)

privacyPolicyBtn.addEventListener("click", () => {
    privacyNote.style.visibility = "hidden";
});