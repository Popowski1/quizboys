var timerVar = document.getElementById('timer');
var startButton = document.getElementById('start');
var answerList = document.getElementById('answers');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var answerall = document.querySelectorAll('answers')
var questionPrompt = document.getElementById('question');
var correctfb = document.getElementById('correct');
var incorrfb = document.getElementById('incorrect');


var questionArray = [
  {
    Question: "How many noses does a monkey have ?",
    answers: ["a. 0", "b. 1", "c. 2", "d. 3"],
  correctAnswer: "b"
},

{
  Question: "How many eyes does a whale have ?",
  answers: ["a. 0", "b. 1", "c. 2", "d. 3"],
correctAnswer: "c"
},
{
  Question: "How many legs does a moose have ?",
  answers: ["a. 0", "b. 1", "c. 2", "d. 4"],

correctAnswer: "d"
},
{
  Question: "How many arms does a human have ?",
  answers: ["a. 0", "b. 1", "c. 2", "d. 3"],

correctAnswer: "c"
},
{
  Question: "How many toes does a worm have ?",
  answers: ["a. 0", "b. 1", "c. 2", "d. 3"],

correctAnswer: "a"
},

];

var questioncounter = 1;
var questionnum = 0;

function stimer() {
  
  var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerVar.textContent = "Time left in seconds : " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    var questionnum = 0
    showQuestions(questionnum);
        
    }

  }, 1000);
}

function showQuestions(i) {
  questionPrompt.innerHTML= questionArray[i].Question;
  answer1.innerHTML = questionArray[i].answers[0];
  answer1.innerHTML = questionArray[i].answers[0];
  answer1.innerHTML = questionArray[i].answers[0];
  answer1.innerHTML = questionArray[i].answers[0];
questionnum = i

};

   
function answerFeedback(event) {
    event.preventDefault();
   


if (questionArray[questionnum].correctAnswer == event.target.value) {
  correctfb.setAttribute("style", "display: block;");
}
else {
  incorrfb.setAttribute("style", "display:block;"  );
  secondsLeft = secondsLeft - 5;
}

if (questionnum < questionArray.length -1) {
  showQuestions(questionnum + 1);
}else {
  youLose();
}};
questioncounter++;



function youLose () {

  questionPrompt.innerHTML= "You lose";
}

startButton.addEventListener('click', function() {
  startButton.setAttribute("style" , "display: None;");
  answerList.setAttribute("style", "display: block; text-align:left;");
  questionPrompt.setAttribute("style", "display: block;");

  
  stimer();
  showQuestions();
}

);








