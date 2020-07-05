//addition function no longer works since adding multiply function

window.onload = function () {
    document.getElementById('addingButton').addEventListener("click", addNumbers);
};

window.onload = function() {
    document.getElementById('multiplyButton').addEventListener("click", multiplyNumbers)
};

function addNumbers(e) {
    var answer = "";
    answer += + document.getElementById('inputOne').value+ +
    document.getElementById('inputTwo').value
    alert(answer)
}
function multiplyNumbers(e) {

   var multOne = document.getElementById('inputThree').value;
   var multTwo = document.getElementById('inputFour').value;
    var answer2 = multOne * multTwo;
    alert(answer2)
};
