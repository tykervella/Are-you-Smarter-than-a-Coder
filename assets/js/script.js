// creating variables that define different elements used through the following code 

var timerElement = document.querySelector('#countdown');
var startbutton = document.querySelector('#game-start');
var savescore = document.querySelector('#score');
var gameboxelement = document.querySelector('#question-box');
var questionElement = document.querySelector('#question');
var answersElement = document.querySelector('#options');
var textElement = document.querySelector('#text-channel');
var li1 = document.querySelector('#A');
var li2 = document.querySelector('#B');
var li3 = document.querySelector('#C');
var li4 = document.querySelector('#D');

// grabbing local data and displaying stored high score
var highscore = localStorage.getItem("High Score");
textElement.textContent = "High Score: " + highscore;


// global variables thatre true at the start of each game. Will be manipulated as other functions later. 
var timeLeft = 60;
var score = 0;
var currentQuestionIndex = 0; 

//Setting Attributes of some list elements to it easier for user to select the option they want

li1.setAttribute("Style","background-color: var(--accent2);")
li3.setAttribute("Style","background-color: var(--accent2);")

// Creates an array that is able to store each question as an object. Properties are grabbed and then used for various functions to populate the quiz box and check the user input vs. the correct answer.
var questionset = [
    { 
        "Question": "Which of the following languages is not considered on of the 3 fundamental building blocks of webpages?",
        "A": "Javascript",
        "B": "Python",
        "C": "CSS",
        "D": "HTML",
        "Answer": "B",
    }, { 
        "Question": "What is the correct syntax of doctype in HTML?",
        "A": "<doctype html>",
        "B": "<doctype html!>",
        "C": "<!doctype html>",
        "D": "</doctype html>",
        "Answer": "C",
    }, {   
        "Question": "What is the purpose of CSS in web development?",
        "A": "To define the structure of a webpage",
        "B": "To give interactivity to a webpage",
        "C": "To stylize how a webpage will look",
        "D": "To prevent viruses when viewing a webpage",
        "Answer": "C",
    }, {   
        "Question": "How many levels of headers are available in HTML?",
        "A": "h1-h4",
        "B": "h1-h6",
        "C": "h1-h8",
        "D": "h1-h10",
        "Answer": "B",
    }, {   
        "Question": "What is the proper way to iterate a function is JS?",
        "A": "for (var i = 1; i > length; i++) {}",
        "B": "for (var i = 1; i < length; i++) {}",
        "C": "for (var i = 0; i > length; i++) {}",
        "D": "for (var i = 0; i < length; i++) {}",
        "Answer": "D",
    }, {   
        "Question": "Where are metadata tags contained in HTML",
        "A": "<HTML>",
        "B": "<Head>",
        "C": "<Body>",
        "D": "<Header>",
        "Answer": "B",
    }, {   
        "Question": "What type of display style in CSS allows for attributes to resize and fit to the current size of a webpage?",
        "A": "Flex",
        "B": "Stretch",
        "C": "Grow",
        "D": "Resize",
        "Answer": "A",
    }, {   
        "Question": "Which of the following is not a type of primitive that is used in JS",
        "A": "String",
        "B": "Boolean",
        "C": "Text",
        "D": "Number",
        "Answer": "C",
    }, {   
        "Question": "How do you link to your javascript file in HTML?",
        "A": "<script link='./assets/script.js'></script>",
        "B": "<script href='./assets/script.js'></script>",
        "C": "<script src='./assets/script.js'></script>",
        "D": "<script source='./assets/script.js'></script>",
        "Answer": "C",
    }, {   
        "Question": "Is web development fun?",
        "A": "No >:(",
        "B": "Maybe...",
        "C": "Sometimes ;/",
        "D": "YES!!!!!!!!!!!!!!!!",
        "Answer": "D",
    }, 
];
// variable to store how many questions are in the quiz
qlength = questionset.length;

// function that start the countdown event. 
function countdown() {
    startbutton.setAttribute("style","display:none;");

    var timeInterval = setInterval(function() {
//Occurs when game is over. Calls score display, which I only want to occur after the game has ended. 
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerElement.textContent = "Game Over!";
            gameboxelement.style.display = "none";
            displayScore();
            return; 
        // Countdown by 1 every 1000 ms 
        } else if (timeLeft >= 1) {
            timerElement.textContent = "Time Remaining: \n" + timeLeft + "s";
            timeLeft = (timeLeft - 1)
        } 
    }, 1000)
};


// function that renders the content of a specific index from the questionset array. If there are no more questions left, it sets the timeLeft to 0 which ends the game. 
function gameRender(i) {
    if (i >= qlength) {
        timeLeft = 0;
        return;
    }
    questionElement.textContent = questionset[i].Question;
    li1.textContent = questionset[i].A;
    li2.textContent = questionset[i].B;
    li3.textContent = questionset[i].C;
    li4.textContent = questionset[i].D;
};


// Checks var input (which is defined later via eventlisteners) and compares it to the correct answer. If the input is correct, score is increased. If the input is incorrect, time is detracted from timeLeft variable.

function checkAnswer(input) {
    // Get the selected answer
    var selectedAnswer = input;
    console.log (selectedAnswer);
    // Get the correct answer from the current question object
    var correctAnswer = questionset[currentQuestionIndex].Answer;
    // Compare the selected answer to the correct answer
    if (selectedAnswer === correctAnswer) {
        // If correct, increment the score
        score++;
        textElement.textContent = "You got that question right!! Nice job!";
    } else {
        // If wrong, lose 5 seconds. 
        timeLeft = (timeLeft - 5);
        textElement.textContent = "You got the last question wrong! Better luck next time";
    }
    // Move on to the next question
    currentQuestionIndex++;
    // Render the next question
    gameRender(currentQuestionIndex);
}



// Displays final score. Shows button that allows user to store score in localstorage
function displayScore() {
    savescore.setAttribute("style","display:block;");
    textElement.textContent = "Final score: " + score;
}


// event listener for start button.  
startbutton.addEventListener("click", function () {
    countdown();
    //makes 1st question display inbox
    gameboxelement.setAttribute("style","display:inline;");
    gameRender(currentQuestionIndex);

// creates event listener for each multiple choice option and checks if the user chose the correct answer. 
    li1.addEventListener("click", function(){
        checkAnswer("A");
    });
    li2.addEventListener("click", function(){
        checkAnswer("B");
    });
    li3.addEventListener("click", function(){
        checkAnswer("C");
    });
    li4.addEventListener("click", function(){
        checkAnswer("D");
    });
} );


// creates event listener for save button. Prompts user for their first and last initial and saves that input with their score in localstorage. 
savescore.addEventListener("click", function(event){
    event.preventDefault();
    
    var input = prompt ("Would you like to save your score?", "First Initial, Last Initial").trim();

    var user = {
        "Username ": input,
        "Score: ": score
    };

    localStorage.setItem("High Score",JSON.stringify(user));


});


// function checkvalue(i) {
//     answersElement.addEventListener("click", function (event){
//         var element = event.target; 
//         var state = element.getAttribute("data-state");
//         var value = element.getAttribute("data-value");
//         var answer = questionset[i].Answer;

//         var event;


//         if (state==="chosen") {
//             if (value === answer) {
//                 event = true;
//                 return event;
//             } else {
//                 timeLeft = (timeLeft - 5)
//             }
//         }


//     })

// }



//     function checkInput (i) {
//         gameRender(i);

//         answersElement.addEventListener("click", function (event){
//             var answer = questionset[i].Answer
//             var element = event.target; 
//             var value = element.getAttribute("data-value");
                        
                    
//             if (element.matches("#A")) {
//                 if (answer==value) {
//                     console.log("Correct!!!")
//                 } else {
//                     timeLeft = (timeLeft - 5);
//                 }
//             }
//         })
                      
//             // } else if (element.matches("#B")) {
//             //     input= value;
//             //     return input;            
//             // } else if (element.matches("#C")) {
//             //     input= value;
//             //     return input;             
//             // } else if (element.matches("#D")) {
//             //     input= value;
//             //     return input;                  
//             // }
//         // console.log (input)
//         }

    

//     console.log(checkInput(0));
// //         if (input == ("A" || "B" || "C" || "D")) {
// //             console.log(input);
// //             console.log('Im in this line of code');
// //         } else {
// //             


//     }
// }



