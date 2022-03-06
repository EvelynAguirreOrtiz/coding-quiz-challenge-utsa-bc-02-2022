// start timer and display questions
var startQuizEl = document.getElementById('start-game-btn');
var countdownEl = document.getElementById('countdown');
// quiz area
var quizBlockEl = document.getElementById('quiz-block');
// questions
var questionEl = document.getElementById('questions');
// answers
var answerAEl = document.getElementById('ansA');
var answerBEl = document.getElementById('ansB');
var answerCEl = document.getElementById('ansC');
var answerDEl = document.getElementById('ansD');
// enter button
var nextQuestionEl = document.getElementById('submit-answer-btn');     
// answer response
var answerRespondEl = document.getElementById('answer-respond');
// score
var scoreEl = document.getElementById('your-score');
var highScoreEl = document.getElementById('high-score');
var saveScoreEl = document.getElementById('save-score');

// question array
var questionArr =[
   {  question: "What does 'HTML' stand for?",
      answerA:  "A. HyperText Markup Language",
      answerB:  "B. HyperText Markdown Language",
      answerC:  "C. HeavyTablet Marking Language",
      answerD:  "D. HyperText Marking Label",
      correctAns: "A"},
   
   {  question: "Which of the following is NOT a data type?",
      answerA:  "A. Booleans",
      answerB:  "B. Strings",
      answerC:  "C. Numbers",
      answerD:  "D. Alphabets",
      correctAns: "D"},
   
   {  question: "Which of these is an example of camel case?",
      answerA:  "A. This_is_Camel_case",
      answerB:  "B. thisIsCamelCase",
      answerC:  "C. ThisIsCamelCase",
      answerD:  "D. This_Is_Camel_Case",
      correctAns: "B"},
   
   {  question: "What is the order of a box model, starting from the innermost element?",
      answerA:  "A. Margin, Border, Padding, Content",
      answerB:  "B. Content, Margin, Padding, Border",
      answerC:  "C. Content, Padding, Border, Margin",
      answerD:  "D. Content, Border, Margin, Padding",
      correctAns: "C"}
   ];
   
   // var questionText = [ questionEl.innerHTML = "<h2>" +  questionArr.question + "</h2>",
                        // answerAEl.innerHTML = "<label>" + answerAEl + "</label>",
                        // answerBEl.innerHTML = "<label>" + answerBEl + "</label>",
                        // answerCEl.innerHTML = "<label>" + answerCEl + "</label>",
                        // answerDEl.innerHTML = "<label>" + answerDEl + "</label>"]
   // 

// var questionArr =[
// [  questionEl.innerHTML = "<h2>" +  "What does 'HTML' stand for?" + "</h2>",
//    answerAEl.innerHTML = "<label>" + "A. HyperText Markup Language" + "</label>",
//    answerBEl.innerHTML = "<label>" + "B. HyperText Markdown Language" + "</label>",
//    answerCEl.innerHTML = "<label>" + "C. HeavyTablet Marking Language" + "</label>",
//    answerDEl.innerHTML = "<label>" + "D. HyperText Marking Label" + "</label>"],

// [  questionEl.innerHTML = "<h2>" + "Which of the following is not a data type?" + "</h2>",
//    answerAEl.innerHTML = "<label>" + "A. Booleans" + "</label>",
//    answerBEl.innerHTML = "<label>" + "B. Strings" + "</label>",
//    answerCEl.innerHTML = "<label>" + "C. Numbers" + "</label>",
//    answerDEl.innerHTML = "<label>" + "D. Alphabets" + "</label>"],

// [  questionEl.innerHTML = "<h2>" + "Which of these is an example of camel case?" + "</h2>",
//    answerAEl.innerHTML = "<label>" + "A. This_is_Camel_case" + "</label>",
//    answerBEl.innerHTML = "<label>" + "B. thisIsCamelCase" + "</label>",
//    answerCEl.innerHTML = "<label>" + "C. ThisIsCamelCase" + "</label>",
//    answerDEl.innerHTML = "<label>" + "D. This_Is_Camel_Case" + "</label>"],

// [  questionEl.innerHTML = "<h2>" + "What is the order of a box model, starting from the innermost element?" + "</h2>",
//    answerAEl.innerHTML = "<label>" + "A. Margin, Border, Padding, Content" + "</label>",
//    answerBEl.innerHTML = "<label>" +  "B. Content, Margin, Padding, Border" + "</label>",
//    answerCEl.innerHTML = "<label>" + "C. Content, Padding, Border, Margin" + "</label>",
//    answerDEl.innerHTML = "<label>" + "D. Content, Border, Margin, Padding" + "</label>"]
// ];
// answer array
var answerArray = [answerAEl.value, answerDEl.value, answerBEl.value, answerCEl.value];
var currentQuestion =[];

// CLICK TO START GAME
var timeLeft = 300;
var score = 0;
var highScore = "";
startQuizEl.addEventListener('click', function() {
   countdownTimer();  
   console.log("Start game");
   // hide start button after game starts
   startQuizEl.setAttribute("class", "hidden");
   // unhide quiz 
   quizBlockEl.removeAttribute("class", "hidden");
   // set score to 0
   scoreEl.textContent = score;
   highScoreEl.textContent = highScore;
   countdownEl.textContent = timeLeft;

});

// COUNTDOWN TIMER
function countdownTimer() {
   // var timeLeft = 5
   var timeInterval = setInterval(function() {
      timeLeft--; 
      countdownEl.textContent = timeLeft;

      if (timeLeft === 0) { 
      clearInterval(timeInterval); 
      // hide remaining questions
      quizBlockEl.setAttribute('class', 'hidden');
      answerRespondEl.innerHTML = "<p>" + "You ran out of time!" + "<br>" + "That's OK, keep practicing and try again later! " + "</p>";
      countdownEl.textContent = "Times Up!";  
      } 
   }, 1000);
};   

     
// var i = 0
// var questionLoop = function() {
   // for (let i = 0; i < questionArr.length; i++) {

   // }
   // nextQuestionEl.addEventListener('click', function() {
   
// }); 
// questionLoop();
// };

// scroll through questions
// var quizLaunch = function () {
// quizLaunch();
// 
// var i = 0;
for (let i = 0; i < questionArr.length; i++) {
var quizLaunch = function () {
   // display questions and choose answer
   questionEl.innerHTML = "<h2>" +  questionArr[i].question + "</h2>";
   answerAEl.innerHTML = "<label>" + questionArr[i].answerA + "</label>";
   answerBEl.innerHTML = "<label>" + questionArr[i].answerB + "</label>";
   answerCEl.innerHTML = "<label>" + questionArr[i].answerC + "</label>";
   answerDEl.innerHTML = "<label>" + questionArr[i].answerD + "</label>";  

   var clickedA = function(){
      document.getElementById('ansA').innerHTML = "A"
      if (clickedA === questionArr[i].correctAns) {
         answerRespondEl.innerHTML.removeAttribute("class", "hidden");
         answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
         score = score += 10
      } else {
         answerRespondEl.innerHTML.removeAttribute("class", "hidden");
         answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "<br>" + "Click 'ENTER' to continue" + "</p>";
      timeLeft = timeLeft - 5
      }
   }
   return clickedA;
   // var clickedB = function(){
      // document.getElementById('ansB').innerHTML = "B"
   // }
   // var clickedC = function(){
      // document.getElementById('ansC').innerHTML = "C"
   // }
   // var clickedD = function(){
      // document.getElementById('ansD').innerHTML = "D"
   // }

   // var checkAnswer = function(answer) {
      // if (answer === questionArr[i].correctAns) {
         // answerRespondEl.innerHTML.removeAttribute("class", "hidden");
         // answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
         // score = score += 10
      // } else {
         // answerRespondEl.innerHTML.removeAttribute("class", "hidden");
         // answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "<br>" + "Click 'ENTER' to continue" + "</p>";
      // timeLeft = timeLeft - 5
      // }

         // nextQuestionEl.addEventListener('click', function() {
            // answerRespondEl.innerHTML.setAttribute("class", "hidden");
         // }

   // };
   // checkAnswer();
   // });
   // i ++
};





   // nextQuestionEl.addEventListener('click', function() {
      // var currentQuestion = questionArr[i];
         // for (let i = 0; i < questionArr.length; i++) {
            // console.log([i]); 
}; 
quizLaunch();         
     



   // if (radioClickEl === answerArray[i]) { // !!! fix this
      // answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
      // score = score += 10
      // } 
      // else {
         // answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "<br>" + "Click 'ENTER' to continue" + "</p>";
         // timeLeft = timeLeft - 5
      // }
   // });
   // i ++
// };

//  !!!! GAME END IF QUESTIONS LENGTH === 0

// if all questions are answered
// answerRespondEl.innerHTML = "<p>" + "Congratulations, you finished the quiz!" + "<br>" + "Enter your initials in the box to save your score!" + "</p>";
// quizBlockEl.setAttribute('class', 'hidden')
// !!! Save score to local storage

// if (score >= highScore) {
   // highScore = score;
// }



// ENTER INITIALS AT END OF GAME -- localStorage
// localStorage.setItem('score', score)
// highScoreEl.setAttribute('class', 'hidden');
// saveScoreEl.removeAttribute('class', 'hidden');

// var saveInitial = function () {
   // localStorage.setItem("initials", JSON.stringify(initials));
// };
// saveInitial();

// var saveHighScore = function () {
   // localStorage.setItem("high-score", JSON.stringify(highScore))
// };
// saveHighScore();
