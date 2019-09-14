// Global Variables
var rightCounter = 0;
var wrongCounter = 0;
var unansweredCounter = 0;
var questionNumber = 0;
var jeopardy = 11;
//  Variable that will hold the time interval
var intervalId;

// Function to start the clock on the trivia game!
function runClock() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// Function to stop the clock so it can clear up for the next question
function stopClock() {
    clearInterval(intervalId);
}

// Setting the initial HTML 
$("#rights-text").text("You got " + rightCounter + " right!");
$("#wrongs-text").text("You got " + wrongCounter + " wrong!");
// Hiding most of the site until you press the start button
$("#theQuestion").hide();
$("#scoreBox").hide();
$("#theAnswer").hide();
$("#playAgain").hide();


// An array holding all the different questions objects! Each object in the array has:
// A question (to be displayed)
// An array of possible answers, each identified as a number (where they occur in the list), the movie name, and a boolean delineating whether the answer is correct or not
// A method that will display the screen revealing the correct answer for a specific amount of time, and then calls the 'next question' function below (since I can get away with calling a function before it's defined...)
// This array is designed so that it's easy to add new questions! The only nuance is, the last item/question should *not* call the setTimeout function in its answerScreen method.
var triviaGame = [
    {
        question: 'What movie is "Almost There" from?',
        answers: [
            { number: "firstAnswer", movie: "The Princess and the Frog", correct: true },
            { number: "secondAnswer", movie: "Tangled", correct: false },
            { number: "thirdAnswer", movie: "Snow White and the Seven Dwarfs", correct: false },
            { number: "fourthAnswer", movie: "Oliver and Company", correct: false }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("The Princess and the Frog");
            $("#answerImage").html('<img src="assets/images/princessandthefrog.jpg">');
            setTimeout(nextQuestion, 3000);
        }
    },
    {
        question: 'What movie is "Bella Notte" from?',
        answers: [
            { number: "firstAnswer", movie: "Sleeping Beauty", correct: false },
            { number: "secondAnswer", movie: "Beauty and the Beast", correct: false },
            { number: "thirdAnswer", movie: "Lady and the Tramp", correct: true },
            { number: "fourthAnswer", movie: "Toy Story", correct: false }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("Lady and the Tramp");
            $("#answerImage").html('<img src="assets/images/ladyandthetramp.jpg">');
            setTimeout(nextQuestion, 3000);
        }
    },
    {
        question: 'What movie is "That\'s How You Know" from?',
        answers: [
            { number: "firstAnswer", movie: "Enchanted", correct: true },
            { number: "secondAnswer", movie: "Cinderella", correct: false },
            { number: "thirdAnswer", movie: "Pete's Dragon", correct: false },
            { number: "fourthAnswer", movie: "Mulan", correct: false }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("Enchanted");
            $("#answerImage").html('<img src="assets/images/enchanted.jpg">');
            setTimeout(nextQuestion, 3000);
        }
    },
    {
        question: 'What movie is "How Far I\'ll Go" from?',
        answers: [
            { number: "firstAnswer", movie: "Moana", correct: true },
            { number: "secondAnswer", movie: "Aristocats", correct: false },
            { number: "thirdAnswer", movie: "The Jungle Book", correct: false },
            { number: "fourthAnswer", movie: "The Rescuers", correct: false }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("Moana");
            $("#answerImage").html('<img src="assets/images/moana.jpg">');
            setTimeout(nextQuestion, 3000);
        }
    },
    {
        question: 'What movie is "Fathoms Below" from?',
        answers: [
            { number: "firstAnswer", movie: "The Black Cauldron", correct: false },
            { number: "secondAnswer", movie: "The Little Mermaid", correct: true },
            { number: "thirdAnswer", movie: "Brave", correct: false },
            { number: "fourthAnswer", movie: "Dumbo", correct: false }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("The Little Mermaid");
            $("#answerImage").html('<img src="assets/images/littlemermaid.jpg">');
            setTimeout(nextQuestion, 3000);
        }
    },
    {
        question: 'What movie is "So This Is Love" from?',
        answers: [
            { number: "firstAnswer", movie: "Bambi", correct: false },
            { number: "secondAnswer", movie: "Frozen", correct: false },
            { number: "thirdAnswer", movie: "Pocahontas", correct: false },
            { number: "fourthAnswer", movie: "Cinderella", correct: true }
        ],
        answerScreen: function () {
            $("#theQuestion").hide();
            $("#theAnswer").show();
            $("#answerRevealed").text("Cinderella");
            $("#answerImage").html('<img src="assets/images/cinderella.jpg">');
        }
    }
];

//  Function to run down the clock! This function also contains instructions for what happens if the user runs out of time.
function decrement() {
    jeopardy--;
    $("#timeLeft").html("<p>Time Left: " + jeopardy + "</>");
    if (jeopardy === 0) {
        unansweredCounter++;
        $("#unanswereds-text").text("You left " + unansweredCounter + " unanswered!");
        stopClock();
        console.log(unansweredCounter);
        $("#rights-text").text("You got " + rightCounter + " right!");
        $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
        if (questionNumber < triviaGame.length - 1) {
            triviaGame[questionNumber].answerScreen();
            $("#youAnswered").text("Time's Up!");
            $("#unanswereds-text").text("You left " + unansweredCounter + " unanswered!");
            $("#rights-text").text("You got " + rightCounter + " right!");
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            questionNumber++;
            setTimeout(nextQuestion, 3000);
            //the following is the scenario for the final question
        } else if (questionNumber === triviaGame.length - 1) {
            triviaGame[questionNumber].answerScreen();
            $("#unanswereds-text").text("You left " + unansweredCounter + " unanswered!");
            $("#rights-text").text("You got " + rightCounter + " right!");
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            $("#youAnswered").text("Game Over!");
            $("#scoreBox").show();
            $("#playAgain").show();
        }
    };
}

// Function for switching from an answer screen into the Next question!
var nextQuestion = function () {
    $("#theAnswer").hide();
    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie).removeClass("selected").addClass(".answer")
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie).removeClass("selected").addClass(".answer")
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie).removeClass("selected").addClass(".answer")
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie).removeClass("selected").addClass(".answer")
    jeopardy = 11;
    runClock();
}

// The function that starts the game!
$("#start").on("click", function () {
    runClock();
    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie);
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie);
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie);
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie);
    $("#timeLeft").show();
    $("#start").hide();
    $("#playAgain").hide();

});

// The function that lets you restart the game
$("#playAgain").on("click", function () {
    $("#theQuestion").hide();
    $("#theAnswer").hide();
    $("#scoreBox").hide();
    $("#timeLeft").hide();
    rightCounter = 0;
    wrongCounter = 0;
    unansweredCounter = 0;
    questionNumber = 0;
    jeopardy = 11;
    $("#start").show();
    $("#playAgain").hide();

});

//The onclick function for when a user chooses an answer
$(".answer").on("click", function () {
    //the selected class allows me to store which button the user clicked
    $(this).removeClass("answer").addClass("selected");
    //the chosen variable allows me to store the id of the answer to compare it with the button chosen
    var chosen = $(this).attr("id");
    for (var i in triviaGame[questionNumber].answers) {
        //there is probably a better way to do this, but I can determine if the answer is correct by confirming that the answer's property 'correct' is true AND that the number of the correct answer matches the the number of the button selected
        if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === true) {
            rightCounter++;
            $("#rights-text").text("You got " + rightCounter + " right!");
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            $("#unanswereds-text").text("You left " + unansweredCounter + " unanswered!");
            $("#youAnswered").text("Correct!");
            questionNumber++;
            stopClock();
            // the following is the scenario for the final question
            if (questionNumber === triviaGame.length) {
                triviaGame[questionNumber - 1].answerScreen();
                $("#scoreBox").show();
                $("#playAgain").show();
                //for any other question
            } else {
                setTimeout(triviaGame[questionNumber - 1].answerScreen(), 1000);
            }
        // and for a wrong answer:
        } else if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === false) {
            wrongCounter++;
            stopClock();
            $("#rights-text").text("You got " + rightCounter + " right!");
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            $("#unanswereds-text").text("You left " + unansweredCounter + " unanswered!");
            $("#youAnswered").text("Incorrect!");
            questionNumber++;
             //the following is the scenario for the final question
            if (questionNumber === triviaGame.length) {
                triviaGame[questionNumber - 1].answerScreen();
                $("#scoreBox").show();
                $("#playAgain").show();
                //for any other question
            } else {
                setTimeout(triviaGame[questionNumber - 1].answerScreen(), 1000);
            }

        }
    }
});
