window.onload = function () {
    document.getElementById('consoleButton').addEventListener('click', firstResponse);
    
    document.getElementById('browserButton').addEventListener('click', secondResponse);

    document.getElementById('alertButton').addEventListener('click', thirdResponse);
};

function firstResponse(e) {
    console.log("Thanks for clicking the console button!")
 }

function secondResponse(e) {
    document.write("Thanks for clicking the browser button!")
 }

function thirdResponse(e) {
    alert("Here is your alert! Alert Hype! \o/ ")
}
