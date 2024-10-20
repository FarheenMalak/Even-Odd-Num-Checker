document.getElementById("check-btn").addEventListener("click", function() {
    var numberInput = document.getElementById("number-input").value;
    var resultSection = document.getElementById("result-section");

    if (numberInput === "") {
        alert("Please enter a number.");
        return;
    }

    var newNum = parseInt(numberInput);
    
    if (isNaN(newNum)) {
        alert("Please enter a valid number.");
        return;
    }

    if (newNum % 2 === 0) {
        resultSection.innerText = newNum + " is an even number.";
    } else {
        resultSection.innerText = newNum + " is an odd number.";
    }
    
    resultSection.style.display = 'block'; 
});
