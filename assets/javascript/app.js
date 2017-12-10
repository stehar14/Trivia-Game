// Trivia Game
// Written by: Steve Harold
// Created: 12/5/2017
// Last Updated: 12/9/2017


//  Variable that will hold our setInterval that runs timer
var intervalId;

// Stores current index of quiz array
var activeIndex = 0;

// Stores number of questions answered right, wrong, and overall, and numerical score
var numRight = 0;
var numWrong = 0;
var numAnswered = 0;
var score = 0;

// Audio //
var chime = document.createElement("audio");
chime.src = "./assets/audio/chime.wav";

var buzz = document.createElement("audio");
buzz.src = "./assets/audio/wrong.wav";

var over = document.createElement("audio");
over.src = "./assets/audio/over.wav";

var tick = document.createElement("audio");
tick.src = "./assets/audio/ticking.wav"
// Timer object
var timer = {
  time: 20, 
// Timer Functions  
  reset: function() {
    timer.time = 20;
    clearInterval(intervalId);
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
		wrongAnswer();
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
	question: "What does HTML stand for?", 
 	answers: ["Hyper Text Markup Language", "Hyper Type Marking Language", "Hyperlink Text Making Language", "Hyper Tool Markup Language"],
 	answer: "Hyper Text Markup Language",
 	get correct() {
 		return this.answers.indexOf("Hyper Text Markup Language")
 	}
},{
	question: "Which HTML element would create the largest heading?",
	answers: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
	answer: "&lt;h1&gt;",
	get correct() {
		return this.answers.indexOf("&lt;h1&gt;")
	}
},{
	question: "Which HTML element would create a link break?",
	answers: ["&lt;br&gt;", "&lt;linebreak&gt;", "&lt;break&gt;", "&lt;lb&gt;"],
	answer: "&lt;br&gt;",
	get correct() {
		return this.answers.indexOf("&lt;br&gt;")
	}
},{
	question: "If you were to use styling to directly alter the text size of a paragraph in an HTML file, what syntax would you use?",
	answers: ["&lt;p size=40px&gt;", "&lt;p&gt;(size:40px)&lt;/p&gt;", "&lt;p style= 'font-size: 40px;'&gt;", "&lt;p font-size= 40px&gt;"],
	answer: "&lt;p style= 'font-size: 40px;'&gt;",
	get correct() {
		return this.answers.indexOf("&lt;p style= 'font-size: 40px;'&gt;")
	}
},{
	question: "Using HTML, how would you cause a link to be ipened in a new tab or window?",
	answers: ["&lt;a href='url' target='_blank'&gt;", "&lt;a href=new window&gt;url&lt;/a&gt;", "&lt;link href='url'&gt;", "&lt;a target='new_window' href='url'&gt;"],
	answer: "&lt;a href='url' target='_blank'&gt;",
	get correct() {
		return this.answers.indexOf("&lt;a href='url' target='_blank'&gt;")
	}
},{
	question: "How do you make a numbered list?",
	answers: ["&lt;ol&gt;", "&lt;nl&gt;", "&lt;pl&gt;", "&lt;ul&gt;"],
	answer: "&lt;ol&gt;",
	get correct() {
		return this.answers.indexOf("&lt;ol&gt;")
	}
},{
	question: "How do you make a bulleted list?",
	answers: ["&lt;ol&gt;", "&lt;list&gt;", "&lt;ul&gt;", "&lt;bl&gt;"],
	answer: "&lt;ul&gt;",
	get correct() {
		return this.answers.indexOf("&lt;ul&gt;")
	}
},{
	question: "Which of the following correctly creates an image in HTML?", 
 	answers: ["&lt;img src='image.gif' alt='MyImage'&gt;", "&lt;image src='image.gif' alt='MyImage'&gt;", "&lt;img href='image.gif' alt='MyImage'&gt;", "&lt;img alt='MyImage'&gt; image.gif &lt;/img&gt;"],
 	answer: "&lt;img src='image.gif' alt='MyImage'&gt;",
 	get correct() {
 		return this.answers.indexOf("&lt;img src='image.gif' alt='MyImage'&gt;")
 	}
},{
	question: "HTML comments are indicated by:",
	answers: ["&lt;!-- comment --&gt;", "/* comment */", "no special syntax is needed", "// comment //"],
	answer: "&lt;!-- comment --&gt;",
	get correct() {
		return this.answers.indexOf("&lt;!-- comment --&gt;")
	}
},{
	question: "CSS comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	answer: "/* comments */",
	get correct() {
		return this.answers.indexOf("/* comments */")
	}
},{
	question: "Javascript comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	answer: "// comments //",
	get correct() {
		return this.answers.indexOf("// comments //")
	}
},{
	question: "Which HTML ekement defines the title of a document?",
	answers: ["&lt;title&gt;", "&lt;meta&gt;", "&lt;head&gt;", "&lt;header&gt;"],
	answer: "&lt;title&gt;",
	get correct() {
		return this.answers.indexOf("&lt;title&gt;")
	}
},{
	question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
	answers: ["src", "href", "alt", "id"],
	answer: "alt",
	get correct() {
		return this.answers.indexOf("alt")
	}
},{
	question: "What is the correct HTML element for playing audio files?",
	answers: ["&lt;mp3&gt;", "&lt;wav&gt;", "&lt;sound&gt;", "&lt;audio&gt;"],
	answer: "&lt;audio&gt;",
	get correct() {
		return this.answers.indexOf("&lt;audio&gt;")
	}
},{
	question: "Which HTML element defines navigation links?", 
 	answers: ["&lt;nav&gt;", "&lt;navbar&gt;", "&lt;navigation&gt;", "&lt;navigate&gt;"],
 	answer: "&lt;nav&gt;",
 	get correct() {
 		return this.answers.indexOf("&lt;nav&gt;")
 	}

},{
	question: "What does CSS stand for?",
	answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Color Style Sheets"],
	answer: "Cascading Style Sheets",
	get correct() {
		return this.answers.indexOf("Cascading Style Sheets")
	}
},{
	question: "Where in an HTML document is the correct place to refer to an external style sheet?",
	answers: ["In the &lt;head&gt;", "In the &lt;body&gt;", "In the &lt;header&gt;", "In the &lt;footer&gt;"],
	answer: "In the &lt;head&gt;",
	get correct() {
		return this.answers.indexOf("In the &lt;head&gt;")
	}
},{
	question: "Which HTML tag is used to define an internal style sheet?",
	answers: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"],
	answer: "&lt;style&gt;",
	get correct() {
		return this.answers.indexOf("&lt;style&gt;")
	}
},{
	question: "Which is the correct CSS syntax?",
	answers: ["body {color: black;}", "body:color=black;", "{body:color=black;}", "{body;color:black;}"],
	answer: "body {color: black;}",
	get correct() {
		return this.answers.indexOf("body {color: black;}")
	}
},{
	question: "Which CSS property is used to change the background color?",
	answers: ["background-color", "color", "bg", "bgcolor"],
	answer: "background-color",
	get correct() {
		return this.answers.indexOf("background-color")
	}
},{
	question: "Which CSS property is used to change the text color of an element?",
	answers: ["text-color", "fgcolor", "color", "font-color"],
	answer: "color",
	get correct() {
		return this.answers.indexOf("color")
	}
},{
	question: "Which CSS property controls the text size?", 
 	answers: ["text-style", "font-style", "text-size", "font-size"],
 	answer: "font-size",
 	get correct() {
 		return this.answers.indexOf("font-size")
 	}
},{
	question: "Using CSS, how do you ensure that a link is not displayed with an underline?",
	answers: [ "a { text-decoration: none;}", "a { text-decoration: no-underline;}", "a { underline: none;}", "a { decoration: no-underline;}"],
	answer: "a { text-decoration: none;}",
	get correct() {
		return this.answers.indexOf("a { text-decoration: none;}")
	}
},{
	question: "Using CSS, how would you make text bold?",
	answers: ["font-weight: bold;", "style: bold;", "font: bold;", "text: bold;"],
	answer: "font-weight: bold;",
	get correct() {
		return this.answers.indexOf("font-weight: bold;")
	}
},{
	question: "How would you specify a border with the given dimensions: top = 10 pixels bottom = 20 pixels right = 30 pixels left = 40 pixels?",
	answers: ["border: 10px 20px 30px 40px;", "border: 20px 10px 40px 30px;", "border: 10px 30px 20px 40px;", "border: 40px 30px 20px 10px"],
	answer: "border: 10px 30px 20px 40px;",
	get correct() {
		return this.answers.indexOf("border: 10px 30px 20px 40px;")
	}
},{
	question: "Which of these CSS values would NOT be valid when attempting to set the size of an element?",
	answers: ["10 pix", "10px", "10em", "10rem"],
	answer: "10 pix",
	get correct() {
		return this.answers.indexOf("10 pix")
	}
},{
	question: "How do you select an element with the id of 'demo' in CSS?",
	answers: [".demo", "&lt;demo&gt;", "#demo", "/demo/"],
	answer: "#demo",
	get correct() {
		return this.answers.indexOf("#demo")
	}
},{
	question: "How do you select elements with the class name 'demo'",
	answers: ["#demo", "/demo/", "&lt;demo&gt;", ".demo"],
	answer: ".demo",
	get correct() {
		return this.answers.indexOf(".demo")
	}
},{
	question: "Inside which HTML element do you put Javascript?",
	answers: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"],
	answer: "&lt;script&gt;",
	get correct() {
		return this.answers.indexOf("&lt;script&gt;")
	}
},{
	question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
	answers: ["&lt;script src='xxx.js&gt;", "&lt;script name='xxx.js'&gt;", "&lt;script href='xxx.js'&gt;", "&lt;script file='xxx.js'&gt;"],
	answer: "&lt;script href='xxx.js'&gt;",
	get correct() {
		return this.answers.indexOf("&lt;script href='xxx.js'&gt;")
	}
},{
	question: "How do you create a function in Javascript?",
	answers: ["function: myFunction()", "function = myFunction()", "myFunction function()", "function myFunction()"],
	answer: "function myFunction()",
	get correct() {
		return this.answers.indexOf("function myFunction()")
	}
},{
	question: "How do you call a function in Javascript?",
	answers: ["call myFunction()", "call function myFunction()", "myFunction()", "go myFunction"],
	answer: "myFunction()",
	get correct() {
		return this.answers.indexOf("myFunction()")
	}
},{
	question: "How do you write an if statement in Javascript?",
	answers: ["if i=5 then", "if i==5 then", "if i=5", "if (i==5)"],
	answer: "if (i==5)",
	get correct() {
		return this.answers.indexOf("if (i==5)")
	}
},{
	question: "How would you start a While loop in Javascript?",
	answers: ["while i = 1 to 10", "while (i<=10)", "while i<=10", "while (i<=10; i++)"],
	answer: "while (i<=10)",
	get correct() {
		return this.answers.indexOf("while (i<=10)")
	}
},{
	question: "In Javascript, how does a for loop start?",
	answers: ["for i = 1 to 10", "for (i<=10)", "for i<=10", "for (i=0; i<=10; i++)"],
	answer: "for (i=0; i<=10; i++)",
	get correct() {
		return this.answers.indexOf("for (i=0; i<=10; i++)")
	}
},{
	question: "Which Javascript event occurs when a user clicks an HTML element?",
	answers: ["onmouseover", "onmouseclick", "onchange", "onclick"],
	answer: "onclick",
	get correct() {
		return this.answers.indexOf("onclick")
	}
},{
	question: "How do you declare a variable in Javascript?",
	answers: ["v carName", "variable carName", "vary carName", "var carName"],
	answer: "var carName",
	get correct() {
		return this.answers.indexOf("var carName")
	}
},{
	question: "In Javascript, which operator assigns a value to a variable?",
	answers: ["x", "=", "+", "-"],
	answer: "=",
	get correct() {
		return this.answers.indexOf("=")
	}
},{
	question: "In Javascript, what operator is used to signify that two things are NOT equal?",
	answers: ["-+", "+=", "x=", "!="],
	answer: "!=",
	get correct() {
		return this.answers.indexOf("!=")
	}
},{
	question: "What would the following Javascript code return: Boolean(10>9)?",
	answers: ["false", "NaN", "undefined", "true"],
	answer: "true",
	get correct() {
		return this.answers.indexOf("true")
	}
},{
	question: "Which operator needs to come before your selector while using jQuery>",
	answers: ["x", "$", "%", "#"],
	answer: "$",
	get correct() {
		return this.answers.indexOf("$")
	}
},{
	question: "In jQuery, what would the selector $('div') target?",
	answers: ["The first div", "The newest div", "The div last referenced", "All div elements"],
	answer: "All div elements",
	get correct() {
		return this.answers.indexOf("All div elements")
	}
},{
	question: "Which jQuery method is used to hide selected elements?",
	answers: ["hidden()", "invisible()", "transparent()", "hide()"],
	answer: "hide()",
	get correct() {
		return this.answers.indexOf("hide()")
	}
}
];

// Global functions
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
// Function to display question
function displayQuestion(index) {
	$("#question").html("<h3>" + quiz[index].question + "</h3>");
	shuffle(quiz[index].answers);
	$("#answer1").html("<h3 class='answer-div'>" + quiz[index].answers[0] + "</h3>");
	$("#answer2").html("<h3 class='answer-div'>" + quiz[index].answers[1] + "</h3>");
	$("#answer3").html("<h3 class='answer-div'>" + quiz[index].answers[2] + "</h3>");
	$("#answer4").html("<h3 class='answer-div'>" + quiz[index].answers[3] + "</h3>");
	$("#number").html("<h3># " + (index+1) + "</h3>");
};
// Funtion to calculate score after answer is given
function scoreEval() {
	tempScore = (timer.time * 10) + 100;
};
// Function to start trivia
function initializeQuiz() {
	shuffle(quiz);
	$("#score").html("<h3>Score: 0</h3>")
	activeIndex = 0;
	displayQuestion(activeIndex);
	timer.start();
};
// Function to run when right answer select
function rightAnswer() {
	chime.play();
	numRight++;
	numAnswered++;
	scoreEval();
	score = score + tempScore;
	$("#score").html("<h3>Score: " + score + "</h3>");
	timer.stop();
	timer.reset();
	showAnswer("<h3>Correct answer!</h3>");
	activeIndex++;
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
	setTimeout(function() {
		if (activeIndex < 10) {
			displayQuestion(activeIndex);
			timer.start();
		}
		else {
			gameOver();
		};
	}, 3000);
};
// Function to run on wrong answer
function wrongAnswer() {	
	buzz.play();
	numWrong++;
	numAnswered++;
	scoreEval();
	score= score - tempScore;
	$("#score").html("<h3>Score: " + score + "</h3>");
	timer.stop();
	timer.reset();
	showAnswer("<h3>Wrong answer!</h3>");
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
	activeIndex++;
	setTimeout(function() {
		if (activeIndex < 10) {
			displayQuestion(activeIndex);
			timer.start();
		}
		else {
			gameOver();
		};
	}, 3000);
	
};

function timeUp() {
	buzz.play();
	numWrong++;
	numAnswered++;
	scoreEval();
	score= score - tempScore;
	$("#score").html("<h3>Score: " + score + "</h3>");
	timer.stop();
	timer.reset();
	showAnswer("<h3>Time's up!</h3>");
	activeIndex++;
	$("#right-wrong").html("<h3>" + numRight + " / " + numAnswered + "</h3>");
	setTimeout(function() {
		if (activeIndex < 10) {
			displayQuestion(activeIndex);
			timer.start();
		}
		else {
			gameOver();
		};
	}, 3000);
};


function showAnswer(thing) {
	$(".answers").hide();
	$("#indicator-msg").html(thing);
	$("#answer-msg").html("<h3 id='answer-msg'>" + quiz[activeIndex].answer + "</h3>");
	$("#indicator").show();
	setTimeout(function() {
		$(".answers").show();
		$("#indicator").hide();
	}, 3000);
};
// Function to run when game ends
function gameOver() {
	over.play();
	$("#right").html("<h3>Number of Right Answers: " + numRight + "</h3>");
	$("#wrong").html("<h3>Number of Wrong Answers: " + numWrong + "</h3>");
	$("#result-score").html("<h3>Score: " + score + "</h3>");
	$("#trivia").hide();
	$("#result").show();
	$("#replay").on("click", function() {
		replay();
	});
};
// Function to start game over with new questions
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

// Main
$(document).ready(function() {
	var music = document.getElementById("music");
	music.volume = .2;
	$("#indicator").hide();
	$("#trivia").hide();
	$("#result").hide();
	$("#start").on("click", function() {
		$("#start-div").hide();
		$("#trivia").show();
		initializeQuiz(); 
		if (timer.time < 4) {
			tick.play();
		}; 	
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
				gameOver();
			};
		});	
	});
});