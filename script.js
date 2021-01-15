//startbutton var
var startBtn = document.querySelector('#start-button');
//scorebutton var
var scoreBtn = document.querySelector('#get-score');
//variable for current question to be displayed on screen
var questionDisplay = document.querySelector('#questionDisplay');
//variabe to display options on screen
var choices = document.querySelector('#choices');
//variable for correct answer  
var result = document.querySelector('#result');
//variable to keep track of questions
var timerCountEl = document.querySelector('.timer-count');
var removeH1 = document.querySelector('h1');
var removeH3 = document.querySelector('h3');
var questionCount = 0;
var score = 0;
var timeLeft = 60;
var timer ;
var questions = [{
    question: "What is the correct method of rounding the number 7.25 to the nearest integer?",
    options: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "round.down(7.25)"],
    answer: "Math.round(7.25)"
},

{
    question: "How many elements can you apply an 'ID' attribute to?",
    options: ["As many as you want", "27", "1", "12"],
    answer: "1"
},

{
    question: "Which of these values can a boolean variable contain?",
    options: ["0 & 1", "False", "Any integer value", "True & False"],
    answer: "True & False"
},

{
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
    answer: "Document Object Model"
},

{
    question: "Is there a difference between JavaScript and Java?",
    options: ["No, they are the same thing", "One is coding and the other is coffee", "Yes, they are two different languages", "Yes, they are spelled different"],
    answer: "Yes, they are two different languages"
},
{
    question: "What is used primarily to add styling to a web page?",
    options: ["HTML", "CSS", "Python", "React.js"],
    answer: "CSS"
},

{
    question: "Which of the following function of an array object adds and/or removes elements from an array?",
    options: ["toSource()", "sort()", "unshift()", "splice()"],
    answer: "splice()"
},
];

var currentQuestion = questions[(Math.floor(Math.random()*questions.length))];
console.log (currentQuestion)

startBtn.addEventListener("click", function(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft === 0){
            clearInterval(timerInterval);
            timerCountEl.textContent = "Game Over!";
        }
        else{
            timerCountEl.textContent = timeLeft;
            document.getElementById("start-button").style.display = "none";
            document.querySelector('h1').style.display = "none";
            document.querySelector('h3').style.display = "none";
        }
    },1000)
});