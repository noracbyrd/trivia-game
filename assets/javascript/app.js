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


var triviaGame = [
    {
        question: 'What movie is "Almost There" from?',
        answers: [
            { number: "firstAnswer", movie: "The Princess and the Frog", correct: true },
            { number: "secondAnswer", movie: "Tangled", correct: false },
            { number: "thirdAnswer", movie: "Snow White and the Seven Dwarfs", correct: false },
            { number: "fourthAnswer", movie: "Oliver and Company", correct: false }
        ],
    },
    {
        question: 'What movie is "Bella Note" from?',
        answers: [
            { movie: "Sleeping Beauty", correct: false },
            { movie: "Beauty and the Beast", correct: false },
            { movie: "Lady and the Tramp", correct: true },
            { movie: "Toy Story", correct: false }
        ],
    },
    {
        question: 'What movie is "That\'s How You Know" from?',
        answers: [
            { number: "firstAnswer", movie: "Enchanted", correct: true },
            { number: "secondAnswer", movie: "Cinderella", correct: false },
            { number: "thirdAnswer", movie: "Pete's Dragon", correct: false },
            { number: "fourthAnswer", movie: "Mulan", correct: false }
        ],
    },
    {
        question: 'What movie is "So This Is Love" from?',
        answers: [
            { movie: "Bambi", correct: false },
            { movie: "The Little Mermaid", correct: false },
            { movie: "Pocahontas", correct: false },
            { movie: "Cinderella", correct: true }
        ],
    }
]

$("#question").hide();
// $("#question2").hide();

//reference for later:     $("p").hide();
//notes: am able to hide elements with jquery! so should be able to include hide on the timer!!
//will have to figure out how to keep them hidden when the game starts, maybe they are all hidden at the start or something
//might have to be more specific for onclicks - thinking each question box needs separate identifiers cuz right now anything wrong is going wrong if you click one wrong

$("#start").on("click",function() {
    $("#theQuestion").html("#question1");
    $("#question1").show();
    $("#question-text").html(triviaGame[questionNumber].question);
    $("#firstAnswer").html(triviaGame[questionNumber].answers[0].movie);
    $("#secondAnswer").html(triviaGame[questionNumber].answers[1].movie);
    $("#thirdAnswer").html(triviaGame[questionNumber].answers[2].movie);
    $("#fourthAnswer").html(triviaGame[questionNumber].answers[3].movie);
});

//onclick with object
// need a way to identify the button as the button with the right answer versus wrong answer--
//USE JQUERY TO APPEND A CLASS!!! AND THEN USE THAT CLASS TO CHANGE THE COLOR!!!!!
$(".answer").on("click", function () {  
    $(this).removeClass("answer").addClass("selected");
    var chosen = $(this).attr("id");
    console.log(chosen);
    for (var i in triviaGame[questionNumber].answers) {
        if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === true) {
    //     //var selected = triviaGame[questionNumber].answers[i].correct;
    //     //console.log($("selected");
    //     console.log(triviaGame[questionNumber].answers[i].correct); 
    //     if (triviaGame[questionNumber].answers[i].correct === true) {
    //         //get id of answer
            $(".selected").css("background-color","green");
            $(".answer").css("background-color","red");
        } else if (chosen === triviaGame[questionNumber].answers[i].number && triviaGame[questionNumber].answers[i].correct === false){
            $(".selected").css("background-color","red");
        }
    //         //$().removeClass("answer").addClass( "rightColor" );
    //         // var currentQuestion = $(this).attr('id');
    //         // console.log(currentQuestion);
    //         $(".answer").css("background-color", "red");
    //         rightCounter++;
    //         // setTimeout(nextQuestion, 3000);
    //     }
    //     else if (triviaGame[questionNumber].answers[i].correct === false) {
    //         $(".selected").css("background-color", "green");
    //         wrongCounter++;
    //         // setTimeout(nextQuestion, 3000);
    //     }
    }    
    // }
});

//buttons clicked right or wrong
$(".wrongAnswer1").on("click", function () {
    $(".wrongAnswer1").css("background-color", "red");
    $("#correctAnswer1").css("background-color", "green");
    wrongCounter++;
    setTimeout(nextQuestion, 5000, "#question1", "#question2");

});

$("#correctAnswer1").on("click", function () {
    $(".wrongAnswer1").css("background-color", "red");
    $("#correctAnswer1").css("background-color", "green");
    rightCounter++;
});

$(".wrongAnswer2").on("click", function () {
    $(".wrongAnswer2").css("background-color", "red");
    $("#correctAnswer2").css("background-color", "green");
    wrongCounter++;
});

$("#correctAnswer2").on("click", function () {
    $(".wrongAnswer2").css("background-color", "red");
    $("#correctAnswer2").css("background-color", "green");
    rightCounter++;
});


    








//pseudo code (before adding timers, lawd)

// Start function: generate the first question. need to show the div, and also push the information from the object for question 1 into the respective div places. ...is this possible? lol I hope so
// Need to create a clear function that resets all the question div to prepare it for the next question




