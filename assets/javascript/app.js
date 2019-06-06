
var timeRemaining;
var start;
var index = 0;
var choices;
var result;
var image;
var imageIndex = 1;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var startOver;

//questions and answers array
var question = ["q1","q2"];
var answer = ["a1","a2"];
var choice1 = ["a1","a2"];
var choice2 = ["c1-2","c2-2"];
var choice3 = ["c1-3","c2-3"];
var choice4 = ["c1-4","c2-4"];

var image = []
//Show questions and choices
function showQuestionsAndChoices(){
    $("#question").show();
    $("#choice1").show();
    $("#choice2").show();
    $("#choice3").show();
    $("#choice4").show();
};

//Show questions and choices
function hideQuestionsAndChoices(){
    $("#question").hide();
    $("#choice1").hide();
    $("#choice2").hide();
    $("#choice3").hide();
    $("#choice4").hide();
}

//Show start page
function showStart(){
    $("#timeRemaining").hide();
}


//When start button is clicked
$("#start").click(function(){
    renderQuestion();
})

//Get questions 
function renderQuestion(){
    $("#question").html(question[index]);
    $("#choice1").html(choice1[index]);
    $("#choice2").html(choice2[index]);
    $("#choice3").html(choice3[index]);
    $("#choice4").html(choice4[index]);
}

//When one of 4 choices is clicked
$("#choice1").click(checkAnswer);
$("#choice2").click(checkAnswer);
$("#choice3").click(checkAnswer);
$("#choice4").click(checkAnswer);

function checkAnswer(){
    if ($(this).text() === answer[index]){
        $("#result").html("Alohomora! You've unlocked the next question");
        renderQuestion();
        correct++;
        index++;
        
    }
    else {
        index++;
        incorrect++;
        renderQuestion();
    }
}


