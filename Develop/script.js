var timerVar = document.getElementById('timer');
var startButton =document.getElementById('start');



startButton.addEventListener('click', function() {
  stimer();
}

);

function stimer() {
  var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerVar.textContent = "Time left in seconds : " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
        
    }

  }, 1000);
}
