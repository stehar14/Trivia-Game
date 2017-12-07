// Trivia Game
// Written by: Steve Harold
// Created: 12/5/2017
// Last Updated: 12/7/2017


//  Variable that will hold our setInterval that runs timer
var intervalId;

// Stores current index of quiz array
var activeIndex = 0;

// Stores number of questions answered right, wrong, and overall, and numerical score
var numRight = 0;
var numWrong = 0;
var numAnswered = 0;
var score = 0;

// Timer object
var timer = {
  time: 20, 
// Timer Functions  
  reset: function() {
    timer.time = 20;
    $("#timer").text("00:20");
  },
  
  start: function() {
        intervalId = setInterval(timer.count, 1000);
  },
  
  stop: function() {
    clearInterval(intervalId);  
  },
  
  count: function() {
  	if (timer.time > 0) {
	    timer.time--;
	    var converted = timer.timeConverter(timer.time);
	    console.log(converted);
	    $("#timer").text(converted);
	}
	else {
		numWrong++;
		numAnswered++;
		score = score - 100;
		$("#score").text("Score: " + score);
		timer.stop();
		timer.reset();
		activeIndex++;
		displayQuestion(activeIndex);
		timer.start();
		$("#right-wrong").text(numRight + " / " + numAnswered);
	};
  },
  
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

// Quiz array with Objects in each index
var quiz = [{
	question: "What is the color of this screen?", 
 	answers: ["white", "green", "yellow", "black"],
 	correct: 0,
},{
	question: "What month is it?",
	answers: ["December", "January", "February", "October"],
	correct: 0,
},{
	question: "How old are you?",
	answers: ["26", "1", "57", "12"],
	correct: 0,
}];

// Function to display questions in random order
function shuffle(array) { 
     var currentIndex = array.length,
         temporaryValue, randomIndex;

     // While there remain elements to shuffle...
     while (0 !== currentIndex) {

         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }

// Global functions
function displayQuestion(index) {
	$("#question").text(quiz[index].question);
	$("#answer1").text(quiz[index].answers[0]);
	$("#answer2").text(quiz[index].answers[1]);
	$("#answer3").text(quiz[index].answers[2]);
	$("#answer4").text(quiz[index].answers[3]);
	$("#number").text("# " + (index+1));
};

function scoreEval() {
	tempScore = (timer.time * 10) + 100;
};

function initializeQuiz() {
	shuffle(quiz);
	$("#score").text("Score: 0")
	activeIndex = 0;
	displayQuestion(activeIndex);
	timer.start();
};

function rightAnswer() {
	console.log("Correct");
	numRight++;
	numAnswered++;
	scoreEval();
	score = score + tempScore;
	$("#score").text("Score: " + score);
	timer.stop();
	timer.reset();
	activeIndex++;
	if (activeIndex < quiz.length) {
		displayQuestion(activeIndex);
		timer.start();
	}
	else {
		gameOver();
	};
	$("#right-wrong").text(numRight + " / " + numAnswered);
};

function wrongAnswer() {
	console.log("Wrong");
	numWrong++;
	numAnswered++;
	scoreEval();
	score= score - tempScore;
	$("#score").text("Score: " + score);
	timer.stop();
	timer.reset();
	activeIndex++;
	if (activeIndex < quiz.length) {
		displayQuestion(activeIndex);
		timer.start();
	}
	else {
		gameOver();
	};
	$("#right-wrong").text(numRight + " / " + numAnswered);
};

function gameOver() {
	$("#right").html("<h3>Number of Right Answers: " + numRight + "</h3>");
	$("#wrong").html("<h3>Number of Wrong Answers: " + numWrong + "</h3>");
	$("#result-score").html("<h3>Score: " + score + "</h3>");
	$("#trivia").hide();
	$("#result").show();
	$("#replay").on("click", function() {
		replay();
	});
};

function replay() {
	activeIndex = 0;
	numRight = 0;
	numWrong = 0;
	numAnswered = 0;
	score = 0;
	timer.reset();
	timer.start();
	displayQuestion(activeIndex);
	$("#score").text("Score: " + score);
	$("#right-wrong").text(numRight + " / " + numAnswered);
	$("#trivia").show();
	$("#result").hide();
};

$(document).ready(function() {
	$("#result").hide();
	initializeQuiz();  	
	$("#answer1").on("click", function () {
		if (activeIndex < quiz.length) {			
			if (quiz[activeIndex].correct === 0) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			};			
		} 
		else {
			// TODO show replay button
			gameOver();
		};
	});

	$("#answer2").on("click", function () {
		if (activeIndex < quiz.length) {			
			if (quiz[activeIndex].correct === 1) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			};			
		} 
		else {
			// TODO show replay button
			gameOver();
		};
	});

	$("#answer3").on("click", function () {
		if (activeIndex < quiz.length) {			
			if (quiz[activeIndex].correct === 2) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			};			
		} 
		else {
			// TODO show replay button
			gameOver();
		};
	});

	$("#answer4").on("click", function () {
		if (activeIndex < quiz.length) {			
			if (quiz[activeIndex].correct === 3) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			};			
		} 
		else {
			// TODO show replay button
			gameOver();
		};
	});	
});