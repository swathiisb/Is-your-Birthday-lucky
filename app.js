const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-number");

// to add number
function checkBirthdayDateIsLucky(){
    const dob = dateOfBirth.values;
    const sum = calculateSum(dob);
    console.log(sum);
}

function calculateSum(){
    dob=dob.replaceAll("-","");
    sum=0;
    for(let index=0; index=dob.length; index++){
        sum=sum+Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', function getValues(){
    console.log(dateOfBirth.value, luckyNumber.value)
})