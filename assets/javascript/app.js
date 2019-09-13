// Declare global variables
var rightCounter = 0;
var wrongCounter = 0;
// Placeholder for how long they have to answer the question
var jeopardy;
// Placeholder for timer to move to the next question (whether they got it right or wrong)
// var nextQuestion = function (question1, question2) {
//     $(question1).hide();
//     $(question2).show();
// }
var questionNumber = 0;

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
            setTimeout(nextQuestion,5000);
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
            setTimeout(nextQuestion,5000);
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
            setTimeout(nextQuestion,5000);
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
            setTimeout(nextQuestion,5000);
        }
    }
];



var nextQuestion = function () {
    $("#theAnswer").hide();
    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie).removeClass("selected").addClass(".answer").css("background-color", "#007bff");
}



$("#start").on("click", function () {

    $("#theQuestion").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie);
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie);
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie);
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie);

});






$(".answer").on("click", function () {
    $(this).removeClass("answer").addClass("selected");
    var chosen = $(this).attr("id");
    console.log(chosen);
    for (var i in triviaGame[questionNumber].answers) {
        if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === true) {
            rightCounter++;
            $("#rights-text").text("You got " + rightCounter + " right!");
            questionNumber++;
            if (questionNumber === triviaGame.length){
                $("#scoreBox").show();
            } else {
                setTimeout(triviaGame[questionNumber-1].answerScreen(),3000);
            }
        } else if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === false) {
            // $(".selected").css("background-color", "red");
            wrongCounter++;
            $("#wrongs-text").text("You got " + wrongCounter + " wrong!");
            questionNumber++;
            if (questionNumber === triviaGame.length){
                $("#scoreBox").show();
            } else {
            setTimeout(triviaGame[questionNumber-1].answerScreen(),3000);
            }

    }
}
});













//buttons clicked right or wrong
// $(".wrongAnswer1").on("click", function () {
//     $(".wrongAnswer1").css("background-color", "red");
//     $("#correctAnswer1").css("background-color", "green");
//     wrongCounter++;
//     setTimeout(nextQuestion, 5000, "#question1", "#question2");

// });

// $("#correctAnswer1").on("click", function () {
//     $(".wrongAnswer1").css("background-color", "red");
//     $("#correctAnswer1").css("background-color", "green");
//     rightCounter++;
// });

// $(".wrongAnswer2").on("click", function () {
//     $(".wrongAnswer2").css("background-color", "red");
//     $("#correctAnswer2").css("background-color", "green");
//     wrongCounter++;
// });

// $("#correctAnswer2").on("click", function () {
//     $(".wrongAnswer2").css("background-color", "red");
//     $("#correctAnswer2").css("background-color", "green");
//     rightCounter++;
// });











//pseudo code (before adding timers, lawd)

// Start function: generate the first question. need to show the div, and also push the information from the object for question 1 into the respective div places. ...is this possible? lol I hope so
// Need to create a clear function that resets all the question div to prepare it for the next question




