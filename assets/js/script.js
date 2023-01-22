// creating variables that define different elements used through the following code 

var timerElement = document.querySelector('#countdown');
var buttonElement = document.querySelector('#game-start');
var gameboxelement = document.querySelector('#question-box');
var questionElement = document.querySelector('#question');
var choicesElement = document.querySelector('#options');
var li1 = document.querySelector('#a');
var li2 = document.querySelector('#b');
var li3 = document.querySelector('#c');
var li4 = document.querySelector('#d');

// global variable to set the countdown for the game to start at 60 seconds and be manipulated by multiple units; 
var timeLeft = 60;

// Creates an array that is able to store each question as an object that properties are grabbed and then used for various functions 
var questionset = [
    { 
        "Question": "Which of the following languages is not considered on of the 3 fundamental building blocks of webpages?",
        "A": "Javascript",
        "B": "Python",
        "C": "CSS",
        "D": "HTML",
        "Answer": "B",
    }, { 
        "Question": "Question2",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "B",
    }, {   
        "Question": "Question3",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question4",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "D",
    }, {   
        "Question": "Question5",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "B",
    }, {   
        "Question": "Question6",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "D",
    }, {   
        "Question": "Question7",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "A",
    }, {   
        "Question": "Question8",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question9",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question10",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "A",
    }, {   
    }
];

// function that start the countdown event. 
function countdown() {

    var timeInterval = setInterval(function() {

        if (timeLeft >= .1) {
            timerElement.textContent = "Time Remaining: \n" + timeLeft + "s";
            timeLeft = (timeLeft - 0.1).toFixed(1);
        } else {
            timerElement.textContent = "Times Up!";
            clearInterval(timeInterval);
        }
    }, 100);
};


// function that renders the content of a specific index from the questionset array. 
function gameRender(i) {

    questionElement.textContent = questionset[i].Question;
    li1.textContent = questionset[i].A;
    li2.textContent = questionset[i].B;
    li3.textContent = questionset[i].C;
    li4.textContent = questionset[i].D;
};


// function that checks the player input and then returns whether they were correct or not. 
function checkinput(i) {

    var status = "";

    if (status >1) {
        li1.addEventListener("click", function(event) {
            input = "A";
            return 
        });

        li2.addEventListener("click", function(event) {
            input = "B";

            if (input === questionset[i].Answer) {
                status++;
            } else {
                timeLeft = (timeLeft - 5);
            }
        });

        li3.addEventListener("click", function(event) {
            input = "C";

            if (input === questionset[i].Answer) {
                status++;
            } else {
                timeLeft = (timeLeft - 5);
            }
        });

        li4.addEventListener("click", function(event) {
            input = "D";

            if (input === questionset[i].Answer) {
                status++; 
            } else {
                timeLeft = (timeLeft - 5);
            }
        });
    }  else {
        return status; 
    }
};


buttonElement.addEventListener("click", function () {
    gameboxelement.setAttribute("style","display:inline;")
    countdown ();



    for (var index=0; index <questionset.length; index++) {
        gameRender(index);
        var correct = checkinput (index);
        
        if (correct !=1) {
            break;
        } else {
            return; 
        }


    };

});
