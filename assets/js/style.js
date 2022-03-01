var startQuizEl = document.getElementById('start-game');
var countdownEl = document.getElementById('countdown');

// questions
var questionEl = document.getElementById('questions');
// answers
var answerAEl = document.getElementById('ansA')
var answerBEl = document.getElementById('ansB')
var answerCEl = document.getElementById('ansC')
var answerDEl = document.getElementById('ansD')


// CLICK TO START GAME
var timeLeft = ""
startQuizEl.addEventListener('click', function() {
   countdownTimer();  
// NEED TO CALL QUIZ ARRAY FUNCTION();
   // timeLeft === 60; (don't need this?)
   console.log("Start game");
});

// COUNTDOWN TIMER
function countdownTimer() {
   var timeLeft = 10
   var timeInterval = setInterval(function() {
      timeLeft--; 
      countdownEl.textContent = timeLeft;

      if (timeLeft === 0) { 
      clearInterval(timeInterval); 
      countdownEl.textContent = "Times Up!";   
      } 
   }, 1000);
};   

// !!!! GAME ENDS IF COUNTDOWNTIMER = 0


// QUESTIONS SECTION 
// CREATE QUESTION ARRAY

var quizQuestionsArr = [q1, q2, q3, q4, q5];

var q1 = [
   
   "This is the first question", "A. This is answer A", "This is answer B", "This is answer C", "This is answer D",]

// ask question
var askQuestions = function() {
   for (let i = 0; i < quizQuestionsArr.length; i++) {
      
   };
   
}







//  !!!! GAME END IF QUESTIONS = 0







// ENTER INITIALS AT END OF GAME
 