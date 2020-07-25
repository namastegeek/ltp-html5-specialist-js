window.onload = function() {
   alert("Let's play! Think of a rock, paper, or scissors");

    document.getElementById('playButton').addEventListener('click',randomNumber);
    
    function randomNumber(e) {
        var computerAnswer = Math.random();
        
        if (computerAnswer <= 0.33) {
            alert('Computer chose Rock')
        } else if (computerAnswer > 0.34 && computerAnswer <= 0.66) {
            alert('Computer chose Paper')
        } else {
            alert('Computer chose Scissors')
        }
    }
    
};