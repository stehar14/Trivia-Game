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
    $("#timer").html("<h3>00:20</h3>");
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
	    $("#timer").html("<h3>" + converted + "</h3>");
	}
	else {
		numWrong++;
		numAnswered++;
		score = score - 100;
		$("#score").html("<h3>Score: " + score + "</h3>");
		timer.stop();
		timer.reset();
		activeIndex++;
		displayQuestion(activeIndex);
		timer.start();
		$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
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
	$("#question").html("<h3>" + quiz[index].question + "</h3>");
	$("#answer1").html("<h3>" + quiz[index].answers[0] + "</h3>");
	$("#answer2").html("<h3>" + quiz[index].answers[1] + "</h3>");
	$("#answer3").html("<h3>" + quiz[index].answers[2] + "</h3>");
	$("#answer4").html("<h3>" + quiz[index].answers[3] + "</h3>");
	$("#number").html("<h3># " + (index+1) + "</h3>");
};

function scoreEval() {
	tempScore = (timer.time * 10) + 100;
};

function initializeQuiz() {
	shuffle(quiz);
	$("#score").html("<h3>Score: 0</h3>")
	activeIndex = 0;
	displayQuestion(activeIndex);
	timer.start();
};

function rightAnswer() {
	numRight++;
	numAnswered++;
	scoreEval();
	score = score + tempScore;
	$("#score").html("<h3>Score: " + score + "</h3>");
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
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
};

function wrongAnswer() {	
	numWrong++;
	numAnswered++;
	scoreEval();
	score= score - tempScore;
	$("#score").html("<h3>Score: " + score + "</h3>");
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
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
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
	$("#score").html("<h3>Score: " + score + "</h3>");
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
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