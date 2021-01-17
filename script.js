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
var scores = document.querySelector('.scores');
var removeH1 = document.querySelector('h1');
var removeH3 = document.querySelector('h3');
var questionCount = 0;
var score = 0;
var timeLeft = 60;
var timer;

//function to display question and choices in sequential order 
function currentQuestion() {
    var questions = [{
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue", "var colors = 1 =('red'), 2 =('green'), 3 =('blue')", "var colors ['red', 'green', 'blue']"],
        answer: "var colors ['red', 'green', 'blue']"
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
        question: "Inside which HTML element do we put the Javascript?",
        options: ["<js>", "<scripting>", "<javascript>", "<script>"],
        answer: "<script>"
    },

    {
        question: "Which of the following function of an array object adds and/or removes elements from an array?",
        options: ["toSource()", "sort()", "unshift()", "splice()"],
        answer: "splice()"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        answer: "alert('Hello World');"
    },

    {
        question: "How does a FOR loop start?",
        options: ["for i = 1 to 5", "for(i <= 5; i++)", "for(i = 0; i <= 5; i++)", "for(i = 0; i <= 5)"],
        answer: "for(i = 0; i <= 5; i++)"
    },
    ];

    if (questionCount < questions.length) {
        //displays question on page
        questionDisplay.innerHTML = questions[questionCount].question;
        choices.textContent = "";

        for (i = 0; i < questions[questionCount].options.length; i++) {
            //will create buttons for each option in the question 
            var el = document.createElement("button");
            el.innerText = questions[questionCount].options[i];
            console.log(el)
            el.setAttribute("data-id", i);
            //event listener for option user chooses
            el.addEventListener("click", function (event) {
                //logs just the text content of answer button
                console.log(this.textContent)
                //checks users answer and gives score
                if (this.textContent === questions[questionCount].answer) {
                    score += 10;
                    alert("Correct");
                    questionCount++;
                    currentQuestion();
                }
                else {
                    //removes 5 points and 5 seconds off score and time
                    score -= 5;
                    timeLeft = timeLeft - 5;
                    alert("Incorrect");
                    questionCount++;
                    currentQuestion();
                }
                console.log(score);
            });
            //appends options to html to be displayed on screen
            choices.append(el);
        }
    }
}

function userScore() {
    //captures current user's initials
    var initials = prompt("Enter initials")
    if (initials.value === "") {
        alert("Initials cannot be blank!")
        return false;
    }
    else {
        //saved scores
        var savedScore = JSON.parse(localStorage.getItem("savedScore")) || [];
        var currentUserScore = {
            name: initials,
            score: score
        };
    }
    //pushes current user's score to storage 
    savedScore.push(currentUserScore);
    localStorage.setItem("savedScore", JSON.stringify(savedScore));
    console.log(savedScore)
    console.log(currentUserScore)
    

}

// function viewScores() {

// }


function gameTimer() {
    //removes h1, h3 and startbutton when start button is clicked
    document.querySelector('h1').style.display = "none";
    document.querySelector('h3').style.display = "none";
    document.getElementById("start-button").style.display = "none";
    //loads currentQuestion function 

    var timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft === 0 || questionCount === 10) {
            clearInterval(timerInterval);
            timerCountEl.textContent = "Game Over!";
            questionDisplay.innerHTML = "You got " + score + " points out of 100 possible points";
            choices.textContent = "";
            //alert ("You got " + score + " points out of 100 possible points" );
            userScore();
        }
        else {
            timerCountEl.textContent = timeLeft;
        }
    }, 1000)
};

function startGame() {
    currentQuestion();
    gameTimer();
}

startBtn.addEventListener("click", startGame)

//scoreBtn.addEventListener("click", viewScores)
