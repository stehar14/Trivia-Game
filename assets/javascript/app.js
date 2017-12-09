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
 	get correct() {
 		return this.answers.indexOf("Hyper Text Markup Language")
 	}
},{
	question: "Which HTML element would create the largest heading?",
	answers: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;h1&gt;")
	}
},{
	question: "Which HTML element would create a link break?",
	answers: ["&lt;br&gt;", "&lt;linebreak&gt;", "&lt;break&gt;", "&lt;lb&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;br&gt;")
	}
},{
	question: "If you were to use styling to directly alter the text size of a paragraph in an HTML file, what syntax would you use?",
	answers: ["&lt;p size=40px&gt;", "&lt;p&gt;(size:40px)&lt;/p&gt;", "&lt;p style= 'font-size: 40px;'&gt;", "&lt;p font-size= 40px&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;p style= 'font-size: 40px;'&gt;")
	}
},{
	question: "Using HTML, how would you cause a link to be ipened in a new tab or window?",
	answers: ["&lt;a href='url' target='_blank'&gt;", "&lt;a href=new window&gt;url&lt;/a&gt;", "&lt;link href='url'&gt;", "&lt;a target='new_window' href='url'&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;a href='url' target='_blank'&gt;")
	}
},{
	question: "How do you make a numbered list?",
	answers: ["&lt;ol&gt;", "&lt;nl&gt;", "&lt;pl&gt;", "&lt;ul&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;ol&gt;")
	}
},{
	question: "How do you make a bulleted list?",
	answers: ["&lt;ol&gt;", "&lt;list&gt;", "&lt;ul&gt;", "&lt;bl&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;ul&gt;")
	}
},{
	question: "Which of the following correctly creates an image in HTML?", 
 	answers: ["&lt;img src='image.gif' alt='MyImage'&gt;", "&lt;image src='image.gif' alt='MyImage'&gt;", "&lt;img href='image.gif' alt='MyImage'&gt;", "&lt;img alt='MyImage'&gt; image.gif &lt;/img&gt;"],
 	get correct() {
 		return this.answers.indexOf("&lt;img src='image.gif' alt='MyImage'&gt;")
 	}
},{
	question: "HTML comments are indicated by:",
	answers: ["&lt;!-- comment --&gt;", "/* comment */", "no special syntax is needed", "// comment //"],
	get correct() {
		return this.answers.indexOf("&lt;!-- comment --&gt;")
	}
},{
	question: "CSS comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	get correct() {
		return this.answers.indexOf("/* comments */")
	}
},{
	question: "Javascript comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	get correct() {
		return this.answers.indexOf("// comments //")
	}
},{
	question: "Which HTML ekement defines the title of a document?",
	answers: ["&lt;title&gt;", "&lt;meta&gt;", "&lt;head&gt;", "&lt;header&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;title&gt;")
	}
},{
	question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
	answers: ["src", "href", "alt", "id"],
	get correct() {
		return this.answers.indexOf("alt")
	}
},{
	question: "What is the correct HTML element for playing audio files?",
	answers: ["&lt;mp3&gt;", "&lt;wav&gt;", "&lt;sound&gt;", "&lt;audio&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;audio&gt;")
	}
},{
	question: "Which HTML element defines navigation links?", 
 	answers: ["&lt;nav&gt;", "&lt;navbar&gt;", "&lt;navigation&gt;", "&lt;navigate&gt;"],
 	get correct() {
 		return this.answers.indexOf("&lt;nav&gt;")
 	}
},{
	question: "What does CSS stand for?",
	answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Color Style Sheets"],
	get correct() {
		return this.answers.indexOf("Cascading Style Sheets")
	}
},{
	question: "Where in an HTML document is the correct place to refer to an external style sheet?",
	answers: ["In the &lt;head&gt;", "In the &lt;body&gt;", "In the &lt;header&gt;", "In the &lt;footer&gt;"],
	get correct() {
		return this.answers.indexOf("In the &lt;head&gt;")
	}
},{
	question: "Which HTML tag is used to define an internal style sheet?",
	answers: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;style&gt;")
	}
},{
	question: "Which is the correct CSS syntax?",
	answers: ["body {color: black;}", "body:color=black;", "{body:color=black;}", "{body;color:black;}"],
	get correct() {
		return this.answers.indexOf("body {color: black;}")
	}
},{
	question: "Which CSS property is used to change the background color?",
	answers: ["background-color", "color", "bg", "bgcolor"],
	get correct() {
		return this.answers.indexOf("background-color")
	}
},{
	question: "Which CSS property is used to change the text color of an element?",
	answers: ["text-color", "fgcolor", "color", "font-color"],
	get correct() {
		return this.answers.indexOf("color")
	}
},{
	question: "Which CSS property controls the text size?", 
 	answers: ["text-style", "font-style", "text-size", "font-size"],
 	get correct() {
 		return this.answers.indexOf("font-size")
 	}
},{
	question: "HTML comments are indicated by:",
	answers: ["&lt;!-- comment --&gt;", "/* comment */", "no special syntax is needed", "// comment //"],
	get correct() {
		return this.answers.indexOf("&lt;!-- comment --&gt;")
	}
},{
	question: "CSS comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	get correct() {
		return this.answers.indexOf("/* comments */")
	}
},{
	question: "Javascript comments are indicated by:",
	answers: ["/* comments */", "&lt;!-- comments --&gt;", "// comments //", "no special syntax is needed"],
	get correct() {
		return this.answers.indexOf("// comments //")
	}
},{
	question: "Which HTML ekement defines the title of a document?",
	answers: ["&lt;title&gt;", "&lt;meta&gt;", "&lt;head&gt;", "&lt;header&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;title&gt;")
	}
},{
	question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
	answers: ["src", "href", "alt", "id"],
	get correct() {
		return this.answers.indexOf("alt")
	}
},{
	question: "What is the correct HTML element for playing audio files?",
	answers: ["&lt;mp3&gt;", "&lt;wav&gt;", "&lt;sound&gt;", "&lt;audio&gt;"],
	get correct() {
		return this.answers.indexOf("&lt;audio&gt;")
	}
}
];

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
	shuffle(quiz[index].answers);
	$("#answer1").html("<h3 class='answer-div'>" + quiz[index].answers[0] + "</h3>");
	$("#answer2").html("<h3 class='answer-div'>" + quiz[index].answers[1] + "</h3>");
	$("#answer3").html("<h3 class='answer-div'>" + quiz[index].answers[2] + "</h3>");
	$("#answer4").html("<h3 class='answer-div'>" + quiz[index].answers[3] + "</h3>");
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
	if (activeIndex < 10) {
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
	if (activeIndex < 10) {
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
	$("#trivia").hide();
	$("#result").hide();
	$("#start").on("click", function() {
		$("#start-div").hide();
		$("#trivia").show();
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
});