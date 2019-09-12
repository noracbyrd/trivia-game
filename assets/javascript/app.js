// Declare global variables
var rightCounter = 0;
var wrongCounter = 0;
// Placeholder for how long they have to answer the question
var jeopardy;
// Placeholder for timer to move to the next question (whether they got it right or wrong)
var nextQuestion = function(question1,question2){
    $(question1).hide();
    $(question2).show();
}



$("#question1").hide();
$("#question2").hide();

//reference for later:     $("p").hide();
//notes: am able to hide elements with jquery! so should be able to include hide on the timer!!
//will have to figure out how to keep them hidden when the game starts, maybe they are all hidden at the start or something
//might have to be more specific for onclicks - thinking each question box needs separate identifiers cuz right now anything wrong is going wrong if you click one wrong

$("#start").on("click", function () {
    $("#thequestion").html("#question1");
    $("#question1").show();
    
  });

    //buttons clicked right or wrong
$(".wrongAnswer1").on("click", function (){
    $(".wrongAnswer1").css("background-color","red");
    $("#correctAnswer1").css("background-color","green");
    wrongCounter++;
    setTimeout(nextQuestion,5000,"#question1","#question2");
    
});

$("#correctAnswer1").on("click", function (){
    $(".wrongAnswer1").css("background-color","red");
    $("#correctAnswer1").css("background-color","green");
    rightCounter++;
});

$(".wrongAnswer2").on("click", function (){
    $(".wrongAnswer2").css("background-color","red");
    $("#correctAnswer2").css("background-color","green");
    wrongCounter++;
});

$("#correctAnswer2").on("click", function (){
    $(".wrongAnswer2").css("background-color","red");
    $("#correctAnswer2").css("background-color","green");
    rightCounter++;
});




  











