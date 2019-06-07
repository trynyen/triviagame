
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
var gameFinished = false;
//questions and answers array
var question = ["1) What is \"Wingardium Leviosa\"?","2) How did Moaning Myrtle die","3) Who created the Marauder's Map?","4) How does Voldermort summon Harry to the graveyard","5) Dolores Umbridge's favorite color?","6) Who kills professor Dumbledore","7) Who is Dobby's master in \"The Deathly Hallows\""];
var answer = ["A charm that can levitate things","The Basilisk","Moony, Wormtail, Padfoot, and Prongs","By turning the Triwizard Cup into a portkey","Pink","Severus Snape","No one"];
var choice1 = ["A charm that can unlock and open doors","The Basilisk","Moony, Wormtail, Padfoot, and Progs","By tricking him into following a path on the Marauder's Map","Pink","Bellatrix Lestrange","The Malfoy family"];
var choice2 = ["A charm that can repair objects","Tom Marvolo Riddle","Moony, Wormtail, Padfoot, and Prongs","By luring him into a fire with Floo powder","Red","Draco Malfoy","Albus Dumbledore"];
var choice3 = ["A charm that can turn objects into Portkeys","The giant spider Aragog","Moony, Wormtail, Padfeet, and Prongs","By using Cedric Diggory as bait","Yellow","Severus Snape","No one"];
var choice4 = ["A charm that can levitate things","The killing curse","Mooney, Wormtail, Padfoot, and Prongs","By turning the Triwizard Cup into a portkey","Blue","Voldermort","Harry Potter"];

var image = ['./assets/images/wleviosa.gif','./assets/images/moaningmyrtle.gif','./assets/images/m2.gif','./assets/images/boop.gif','./assets/images/pinkroom.gif','./assets/images/partyhard.gif','./assets/images/dobbydeath.gif',];
var incorrectImage = ['./assets/images/leviosa.gif','./assets/images/goaway.gif','./assets/images/m1.gif','./assets/images/vol.gif','./assets/images/harm.gif','./assets/images/dumbledore.gif','./assets/images/freeddobby.gif'];


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












