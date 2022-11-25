var elForm = document.querySelector(".form-js");
var elInput = document.querySelector(".input-js");
var elBtn = document.querySelector(".button-js");
var elOutput = document.querySelector(".output-js");


elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    
    var elInputValue = Number(elInput.value.trim());
    var randomNumber = elInputValue;

    if (randomNumber == 0){
        elOutput.textContent = "Raqam kiritilmagan";
    } else if (randomNumber % 3 == 0 && randomNumber % 5 == 0){
        elOutput.textContent = "FizzBuzz"
    } else if (randomNumber % 3 == 0){
        elOutput.textContent = "Fizz"
    } else if (randomNumber % 5 == 0){
        elOutput.textContent = "Buzz"
    }  else {
        elOutput.textContent = "Bu raqam 3 ga ham 5 ga ham bulinmaydi"
    }    
})