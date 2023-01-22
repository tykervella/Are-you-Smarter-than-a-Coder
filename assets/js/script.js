// creating variables that define different elements used through the following code 

var timerElement = document.querySelector('#countdown');
var buttonElement = document.querySelector('#game-start');
var gameboxelement = document.querySelector('#question-box');
var questionElement = document.querySelector('#question');
var answersElement = document.querySelector('#options');
var textElement = document.querySelector('#text-channel');
var li1 = document.querySelector('#A');
var li2 = document.querySelector('#B');
var li3 = document.querySelector('#C');
var li4 = document.querySelector('#D');

// global variables thatre true at the start of each game. Will be manipulated as other functions later. 
var timeLeft = 60;
var score = 0;
var currentQuestionIndex = 0; 

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
        "Question": "Question2",
        "A": "Text",
        "B": "Correct",
        "C": "Text",
        "D": "Text",
        "Answer": "B",
    }, {   
        "Question": "Question3",
        "A": "Text",
        "B": "Text",
        "C": "Correct",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question4",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Correct",
        "Answer": "D",
    }, {   
        "Question": "Question5",
        "A": "Text",
        "B": "Correct",
        "C": "Text",
        "D": "Text",
        "Answer": "B",
    }, {   
        "Question": "Question6",
        "A": "Text",
        "B": "Text",
        "C": "Text",
        "D": "Correct",
        "Answer": "D",
    }, {   
        "Question": "Question7",
        "A": "Correct",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "A",
    }, {   
        "Question": "Question8",
        "A": "Text",
        "B": "Text",
        "C": "Correct",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question9",
        "A": "Text",
        "B": "Text",
        "C": "Correct",
        "D": "Text",
        "Answer": "C",
    }, {   
        "Question": "Question10",
        "A": "Correct",
        "B": "Text",
        "C": "Text",
        "D": "Text",
        "Answer": "A",
    }, 
];

qlength = questionset.length;

// function that start the countdown event. 
function countdown() {

    var timeInterval = setInterval(function() {

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerElement.textContent = "Game Over!";
            gameboxelement.style.display = "none";
            displayScore();
            return; 
        } else if (timeLeft >= 1) {
            timerElement.textContent = "Time Remaining: \n" + timeLeft + "s";
            timeLeft = (timeLeft - 1)
        } else {
            timerElement.textContent = "Times Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};


// function that renders the content of a specific index from the questionset array. 
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
        currentQuestionIndex++;
        textElement.textContent = "Nice job- you got that question right!! Let's try and keep the ball rolling!";
    } else {
        timeLeft = (timeLeft - 5);
        textElement.textContent = "You got that last question wrong! Let's try again!";
    }
    // Move on to the next question
    // Render the next question
    gameRender(currentQuestionIndex);
}


function displayScore() {
    textElement.textContent = "Your final score is: " + score;
}



buttonElement.addEventListener("click", function () {
    countdown();
    gameboxelement.setAttribute("style","display:inline;");


    gameRender(currentQuestionIndex);

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



