
var timeRemaining;
var start;
var index = 0;
var choices;
var result;
var image;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var startOver;

//questions and answers array
var question = ["q1","q2"];
var answer = ["a1","a2","a3"];
var choice1 = ["a1","a2","a3"];
var choice2 = ["c1-2","c2-2","c3-2"];
var choice3 = ["c1-3","c2-3","c3-3"];
var choice4 = ["c1-4","c2-4","c3-4"];

var image = ['./assets/images/dumbledore.gif','./assets/images/leviosa.gif'];
var incorrectImage = ['./assets/images/lovemagic.gif','./assets/images/freeddobby.gif'];


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

//Check if answer is correct
//If correct, say
function checkAnswer(){
    stop();
    if ($(this).text() === answer[index]){
        $("#result").html("1 point for Slytherin");
        $("#image").html(`<img src='${image[index]}'>`);
        index++;
        correct++;
        setTimeout(function(){
            renderQuestion();
            timer = 30;
            run();
        },3000);
    }
    else {
        $("#result").html("1 point for Gryffindor");
        $("#image").html(`<img src='${incorrectImage[index]}'>`);
        index++;
        incorrect++;
        setTimeout(function(){
            renderQuestion();
            timer = 30;
            run();
        },3000);
    }
}
//When start button is clicked
$("#start").click(function(){
    renderQuestion();
    run();
})

var timer = 30;
var intervalId;

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);
}

function decrement(){
    timer--;
    $("#timeRemaining").html("Time remaining: " + timer + " seconds");
    if (timer === 0){
        stop();
    }
}
$("#startOver").click(function(){
    index = 0;
    renderQuestion();
    run();
})

function stop(){
    clearInterval(intervalId);
}






