var startQuizEl = document.getElementById('start-game');
var countdownEl = document.getElementById('countdown');
var questionEl = document.getElementsByClassName('questions')


// CLICK TO START GAME

// COUNTDOWN TIMER
var timeLeft = ""
   startQuizEl.addEventListener('click', function() {
   countdownTimer();  
   timeLeft === 60;
   console.log("Start game");
   });

function countdownTimer() {
   var timeLeft = 60
   var timeInterval = setInterval(function() {
      timeLeft--; 
        countdownEl.textContent = timeLeft;
        if (timeLeft === 0) { 
        clearInterval(timeInterval); 
      }
   }, 1000);
};   

// GAME ENDS IF COUNTDOWNTIMER = 0




// QUESTIONS SECTION
//

 //questionEl.textContent


// ENTER INITIALS AT END OF GAME
 