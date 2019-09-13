// Declare global variables
var rightCounter = 0;
var wrongCounter = 0;
var unAnsweredCounter = 0;
// Placeholder for how long they have to answer the question
// Placeholder for timer to move to the next question (whether they got it right or wrong)
// var nextQuestion = function (question1, question2) {
//     $(question1).hide();
//     $(question2).show();
// }
var questionNumber = 0;

//  Interval Demonstration
//  Set our number counter to 100.
var jeopardy = 10;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the resume button gets clicked, execute the run function.

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function runClock() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stopClock() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }



$("#rights-text").text("You got " + rightCounter + " right!");
$("#wrongs-text").text("You got " + wrongCounter + " wrong!");

$("#theQuestion").hide();
$("#scoreBox").hide();
$("#theAnswer").hide();

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
            setTimeout(nextQuestion, 5000);
        }
    },
    {
        question: 'What movie is "Bella Note" from?',
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
            setTimeout(nextQuestion, 5000);
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
            setTimeout(nextQuestion, 5000);
        }
    },
    {
        question: 'What movie is "So This Is Love" from?',
        answers: [
            { number: "firstAnswer", movie: "Bambi", correct: false },
            { number: "secondAnswer", movie: "The Little Mermaid", correct: false },
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

//  The decrement function.
function decrement() {
    //  Decrease number by one.
    jeopardy--;
    //  Show the number in the #show-number tag.
    $("#timeLeft").html("<p>Time Left: " + jeopardy + "</>");
    //  Once number hits zero...
    if (jeopardy === 0) {
        //  ...run the stop function.
        stopClock();
        if (questionNumber < triviaGame.length) {
            triviaGame[questionNumber].answerScreen();
            $("#youAnswered").text("Time's Up!");
            questionNumber++;
            setTimout(nextQuestion,3000);
        } else if (questionNumber === triviaGame.length-1) {
            triviaGame[questionNumber].answerScreen();
            $("#youAnswered").text("Game OVer!");
        }
    };
}



var nextQuestion = function () {
    $("#theAnswer").hide();
    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    jeopardy=10;
    runClock();
}




$("#start").on("click", function () {

    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie);
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie);
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie);
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie);
    $("#timeLeft").show();
    runClock();
    $("#start").hide();

});






$(".answer").on("click", function () {
    $(this).removeClass("answer").addClass("selected");
    var chosen = $(this).attr("id");
    console.log(chosen);
    for (var i in triviaGame[questionNumber].answers) {
        if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === true) {
            rightCounter++;
            $("#rights-text").text("You got " + rightCounter + " right!");
            $("#youAnswered").text("Correct!");
            questionNumber++;
            stopClock();
            if (questionNumber === triviaGame.length) {
                triviaGame[questionNumber - 1].answerScreen();
                $("#scoreBox").show();
            } else {
                setTimeout(triviaGame[questionNumber - 1].answerScreen(), 1000);
            }
        } else if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === false) {
            // $(".selected").css("background-color", "red");
            wrongCounter++;
            stopClock();
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            $("#youAnswered").text("Incorrect!");
            questionNumber++;
            if (questionNumber === triviaGame.length) {
                triviaGame[questionNumber - 1].answerScreen();
                $("#scoreBox").show();
            } else {
                setTimeout(triviaGame[questionNumber - 1].answerScreen(), 1000);
            }

        }
    }
});
