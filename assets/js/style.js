// start timer and display questions
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
// clicked answers
// !!! NEED TO FIND CORREcT ANSWERS
var radioClickEl = document.getElementsByClassName('answer').value;

// submit answers
var nextQuestionEl = document.getElementById('submit-answer');     


// answer response
var answerRespondEl = document.getElementById('answer-respond');
// score
var scoreEl = document.getElementById('high-score');
// question array


var questionArr =[
   {  questionEl : "What does 'HTML' stand for?", 
      answerAEl : "A. HyperText Markup Language", 
      answerBEl : "B. HyperText Markdown Language", 
      answerCEl : "C. HeavyTablet Marking Language", 
      answerDEl : "D. HyperText Marking Label",
      correctAnswer : "answerAEl"
   },
   {  questionEl : "Which of the following is not a data type?", 
      answerAEl : "A. Booleans", 
      answerBEl : "B. Strings", 
      answerCEl : "C. Numbers", 
      answerDEl : "D. Alphabets"
      
   },
   {  questionEl : "Which of these is an example of camel case?", 
      answerAEl : "A. This_is_Camel_case", 
      answerBEl : "B. thisIsCamelCase", 
      answerCEl : "C. ThisIsCamelCase", 
      answerDEl : "D. This_Is_Camel_Case"

   },
   {  questionEl : "What is the order of a box model, starting from the innermost element?", 
      answerAEl : "A. Margin, Border, Padding, Content", 
      answerBEl : "B. Content, Margin, Padding, Border", 
      answerCEl : "C. Content, Padding, Border, Margin", 
      answerDEl : "D. Content, Border, Margin, Padding"

   },


];
// answer array
var answerArray = [answerAEl, answerDEl];


// CLICK TO START GAME
var timeLeft = "";
var score = 0
startQuizEl.addEventListener('click', function() {
   countdownTimer();  
// !!!! quizLaunch();
   // timeLeft === 60; (don't need this?)
   console.log("Start game");
   // hide start button after game starts
   startQuizEl.setAttribute("class", "hidden");
   // unhide quiz 
   quizAreaEl.removeAttribute('class', 'hidden');
   // ser score to 0
   scoreEl.textContent = score;
});

// COUNTDOWN TIMER
function countdownTimer() {
   var timeLeft = 5
   var timeInterval = setInterval(function() {
      timeLeft--; 
      countdownEl.textContent = timeLeft;

      if (timeLeft === 0) { 
      clearInterval(timeInterval); 
      // hide remaining questions
      quizAreaEl.setAttribute('class', 'hidden');
      answerRespondEl.innerHTML = "<p>" + "You ran out of time!" + "<br>" + "That's OK, keep practicing and try again later! " + "</p>";
      countdownEl.textContent = "Times Up!";  
      } 
   }, 1000);
};   



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
      

// !!!!! SCROLL THRU QUESTIONS
      var i = 3
      var currentQuestion = questionArr[i];
      var currentQuestionText
      = [questionEl.innerHTML = "<h2>" + currentQuestion.questionEl + "</h2>",
         answerAEl.innerHTML = "<label>" + currentQuestion.answerAEl + "</label>",
         answerBEl.innerHTML = "<label>" + currentQuestion.answerBEl + "</label>",
         answerCEl.innerHTML = "<label>" + currentQuestion.answerCEl + "</label>",
         answerDEl.innerHTML = "<label>" + currentQuestion.answerDEl + "</label>"];
 

      //  choose answer and click submit button         
         nextQuestionEl.addEventListener('click', function() {
            console.log ("click")
         if (radioClickEl === answerArray[i]) {
            console.log("OK");
            answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
            score = score += 10;


            };

         });
      
      
      

      // if (radioClickEl === answerArray.correctAnswer[i]) {
         // answer is corrrect
         // console.log("OK");
         // answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
         // score = score + 10;

         // } else {console.log("no");
         // answer is incorrect
      // 
         // answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "<br>" + "Click 'ENTER' to continue" + "</p>";
         // timeLeft = timeLeft - 5
         // }
         // go to next question
         // nextQuestionEl.addEventListener('click', function() {
            // i++
         // });



    //  });
   
// ANSWER IS RIGHT

// answerRespondEl.innerHTML = "<p>" + "That is correct!" + "<br>" + "Click 'ENTER' to continue" + "</p>";
// var score = 0;
// score += 10;
// quizLaunch();

//  IF ANSWER IS WRONG, DEDUCT TIME
//  answerRespondEl.innerHTML = "<p>" + "That is incorrect" + "<br>" + "Click 'ENTER' to continue" + "</p>";
// deduct time
// timeLeft = timeLeft - 5
// quizLaunch();


//  !!!! GAME END IF QUESTIONS === 0

// if all questions are answered
// answerRespondEl.innerHTML = "<p>" + "Congratulations, you finished the quiz!" + "<br>" + "Enter your initials in the box to save your score!" + "</p>";

// ENTER INITIALS AT END OF GAME -- localStorage
// localStorage.setItem('score', score)