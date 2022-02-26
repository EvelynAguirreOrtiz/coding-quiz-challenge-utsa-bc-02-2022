var startQuizEl = document.querySelector('#start-button');
var countdownEl = document.getElementById('#countdown');
var questionEl = document.getElementsByClassName('questions')


// CLICK TO START TIMER

startQuizEl.addEventListener('click', function() {
   var timeLeft = 60;
   console.log(timeLeft);

   function countdownTimer() {
   //   var timeLeft = 60
      if (timeLeft = 60) {
      var timeInterval = setInterval(function() {
         timeLeft--; 
         countdownEl.textContent = timeLeft;
         if (timeLeft = 0) { 
         clearInterval(timeInterval); 
         }
      }, 1000);
   }};   
   countdownTimer();
console.log("timer is counting");
  
});




// 
// function countdownTimer() {
// 
//  var timeInterval = setInterval(function() {
   // timeLeft--; 
   // countdownEl.textContent = timeLeft;
   // if (timeLeft === 0) {
   // clearInterval(timeInterval);       
   // }}, 1000);
// };
//   
//countdownTimer();



// COUNTDOWN TIMER
 
// var timeLeft = ""
// startQuizEl.addEventListener('click', function() {
   // timeLeft === 60;
   // console.log("Start game");
   // });


// THIS CODE WORKS
// function countdownTimer() {
   // 
   // var timeLeft = 60
   // var timeInterval = setInterval(function() {
      // timeLeft--; 
      // countdownEl.textContent = timeLeft;
      // if (timeLeft === 0) { 
         // clearInterval(timeInterval); 
         // }
      // }, 1000);
// };   
// countdownTimer();
// console.log("timer is counting");

// QUESTIONS SECTION

 questionEl.textContent


// ENTER INITIALS AT END OF GAME
 