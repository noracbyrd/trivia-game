// Declare global variables
var rightCounter = 0;
var wrongCounter = 0;
// Placeholder for how long they have to answer the question
var jeopardy;
// Placeholder for timer to move to the next question (whether they got it right or wrong)
var nextQuestion;

//reference for later:     $("p").hide();

$( document ).ready(function() {

    //buttons clicked right or wrong
$(".wrongAnswer").on("click", function (){
    $(".wrongAnswer").css("background-color","red");
    $("#correctAnswer").css("background-color","green");
});


  











});