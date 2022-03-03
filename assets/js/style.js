// start button and timer
var startQuizEl = document.getElementById('start-game');
var countdownEl = document.getElementById('countdown');
// quiz area
var quizAreaEl = document.getElementById('quiz-area')
// questions
var questionEl = document.getElementById('questions');
// answers
var answerAEl = document.getElementById('ansA');
var answerBEl = document.getElementById('ansB');
var answerCEl = document.getElementById('ansC');
var answerDEl = document.getElementById('ansD');
// correct answers
//var 

// answer response
var answerRespondEl = document.getElementById('answer-respond');

// score
var scoreEl = document.getElementById('high-score');

// question array
var questionArr =[
   {  questionEl : "This is the first question", 
      answerAEl : "A. This is answer A", 
      answerBEl : "B. This is answer B", 
      answerCEl : "C. This is answer C", 
      answerDEl : "D. This is answer D"
      
   },
   {  questionEl : "This is the second question", 
      answerAEl : "A. This is answer A", 
      answerBEl : "B. This is answer B", 
      answerCEl : "C. This is answer C", 
      answerDEl : "D. This is answer D"
      
   },
];
// answer array
var answerArray = [answerAEl, answerDEl];



// CLICK TO START GAME
var timeLeft = "";
startQuizEl.addEventListener('click', function() {
   countdownTimer();  
// !!!! quizLaunch();
   // timeLeft === 60; (don't need this?)
   console.log("Start game");

   // hide start button
   startQuizEl.setAttribute("class", "hidden");
   // unhide quiz 
   quizAreaEl.removeAttribute('class', 'hidden');
});

// COUNTDOWN TIMER
function countdownTimer() {
   var timeLeft = 5
   var timeInterval = setInterval(function() {
      timeLeft--; 
      countdownEl.textContent = timeLeft;

      if (timeLeft === 0) { 
      clearInterval(timeInterval); 
      quizAreaEl.setAttribute('class', 'hidden');
      countdownEl.textContent = "Times Up!";  
      answerRespondEl.innerHTML = "<p>" + "You ran out of time!" + "<br>" + "That's OK, keep practicing and try again later! " + "</p>";


      
      // !!! STOP QUESTION FOR LOOP

      } 
   }, 1000);
};   



// !!!! GAME ENDS IF COUNTDOWNTIMER = 0

// !!! START BUTTON DISAPPEARS AFTER GAME STARTS


// QUESTIONS SECTION 




// run quiz
// var questionLoop = function() {
   // for (let i = 0; i < questionArr.length; i++) {
      // 
   // } 
// };

// scroll through questions
// var quizLaunch = function () {
   // var i = 1
   // let currentQuestion = questionArr[i];
// 
      // questionEl.innerHTML = "<h2>" + currentQuestion.questionEl + "</h2>";
      // answerAEl.innerHTML = "<label>" + currentQuestion.answerAEl + "</label>";
      // answerBEl.innerHTML = "<label>" + currentQuestion.answerBEl + "</label>";
      // answerCEl.innerHTML = "<label>" + currentQuestion.answerCEl + "</label>";
      // answerDEl.innerHTML = "<label>" + currentQuestion.answerDEl + "</label>";
// };
// quizLaunch();


var i = 0
var currentQuestion = questionArr[i];
var questionArr = [questionEl.innerHTML = "<h2>" + currentQuestion.questionEl + "</h2>",
                     answerAEl.innerHTML = "<label>" + currentQuestion.answerAEl + "</label>",
                     answerBEl.innerHTML = "<label>" + currentQuestion.answerBEl + "</label>",
                     answerCEl.innerHTML = "<label>" + currentQuestion.answerCEl + "</label>",
                     answerDEl.innerHTML = "<label>" + currentQuestion.answerDEl + "</label>" ];

                     
// .addEventListener('click', function() {
   // console.log('click');
// };
// 

//  IF ANSWER IS WRONG, DEDUCT TIME
//  timeLeft = timeLeft - 5
//  "That is incorrect"




// IF ANSWER IS RIGHT
   
    var score = 0;
    score += 10;

//  "You are correct!"




//  !!!! GAME END IF QUESTIONS = 0







// ENTER INITIALS AT END OF GAME -- localStorage