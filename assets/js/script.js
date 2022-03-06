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

// var A = ""
// var B = ""
// var C = ""
// var D = ""
// question array
var questionArr = [
   {  question: "What does 'HTML' stand for?",
      answerA: "A. HyperText Markup Language",
      answerB: "B. HyperText Markdown Language",
      answerC: "C. HeavyTablet Marking Language",
      answerD: "D. HyperText Marking Label",
      correctAns: "A"
   },

   {  question: "Which of the following is NOT a data type?",
      answerA: "A. Booleans",
      answerB: "B. Strings",
      answerC: "C. Numbers",
      answerD: "D. Alphabets",
      correctAns: "D"
   },

   {  question: "Which of these is an example of camel case?",
      answerA: "A. This_is_Camel_case",
      answerB: "B. thisIsCamelCase",
      answerC: "C. ThisIsCamelCase",
      answerD: "D. This_Is_Camel_Case",
      correctAns: "B"
   },

   {  question: "What is the order of a box model, starting from the innermost element?",
      answerA: "A. Margin, Border, Padding, Content",
      answerB: "B. Content, Margin, Padding, Border",
      answerC: "C. Content, Padding, Border, Margin",
      answerD: "D. Content, Border, Margin, Padding",
      correctAns: "C"
   }
];

var currentQuestion = [];

// CLICK TO START GAME
var timeLeft = 75;
var score = 0;
var highScore = "";
startQuizEl.addEventListener('click', function () {
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
   var timeInterval = setInterval(function () {
      timeLeft--;
      countdownEl.textContent = timeLeft;

      if (timeLeft === 0) {
         clearInterval(timeInterval);
         // hide remaining questions
         quizBlockEl.setAttribute('class', 'hidden');
         answerRespondEl.innerHTML = "<p>" + "You ran out of time!" + "<br>" + "That's OK, keep practicing and try again later! " + "</p>";
         countdownEl.textContent = "Time's Up!";
      }
   }, 1000);
};

var answer = ""
var clickedA = function () {
   answer = "A";
   console.log(answer);
};
var clickedB = function () {
   answer = "B";
   console.log(answer);
};
var clickedC = function () {
   answer = "C";
   console.log("C");
};
var clickedD = function () {
   answer = "D"
   console.log('D');
};

var i = 0
var nextQuestion = function () {
   if (i < questionArr.length - 1) {
   if (answer === questionArr[i].correctAns) {
      quizBlockEl.setAttribute("class", "hidden");
      answerRespondEl.removeAttribute("class", "hidden");
      answerRespondEl.innerHTML = "<p>" + "That is correct!" + "</p>";
      score = score + 10;
      scoreEl.textContent = score;
      console.log("correct");
   } else {
      quizBlockEl.setAttribute("class", "hidden");
      answerRespondEl.removeAttribute("class", "hidden");
      answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "</p>";
      timeLeft = timeLeft - 5;
      countdownEl.textContent = timeLeft;
      console.log('incorect');
   };
   setTimeout(function () {
      answerRespondEl.setAttribute("class", "hidden");
         i++;
         if (i <= questionArr.length -1) {
         quizLaunch()} 
         quizBlockEl.removeAttribute("class", "hidden");         
   }, 1000)
} else {
   quizEnd();
}
};
var quizLaunch = function () {
   // display questions and choose answer
   questionEl.innerHTML = "<h2>" + questionArr[i].question + "</h2>";
   answerAEl.innerHTML = "<label>" + questionArr[i].answerA + "</label>";
   answerBEl.innerHTML = "<label>" + questionArr[i].answerB + "</label>";
   answerCEl.innerHTML = "<label>" + questionArr[i].answerC + "</label>";
   answerDEl.innerHTML = "<label>" + questionArr[i].answerD + "</label>";
};
quizLaunch();

//  !!!! GAME END IF QUESTIONS LENGTH === 0
var quizEnd = function() {

   answerRespondEl.innerHTML = "<p>" + "Congratulations, you finished the quiz!" + "<br>" + "Enter your initials in the box to save your score!" + "</p>";
   answerRespondEl.removeAttribute("class", "hidden");
   quizBlockEl.setAttribute('class', 'hidden');   
   scoreEl.setAttribute('class', 'hidden');
   saveScoreEl.removeAttribute('class', 'hidden');
   localStorage.setItem('score', score);

   if (score >= highScore) {
      highScore = score;
      highScoreEl.textContent = score;
   };   
};
   
   
   



// };
// quizEnd();
// ENTER INITIALS AT END OF GAME -- localStorage



// var saveInitial = function () {
   // localStorage.setItem("initials", JSON.stringify(initials));
// };
// saveInitial();

var saveHighScore = function () {
   localStorage.setItem("high-score", JSON.stringify(highScore))
};
saveHighScore();
