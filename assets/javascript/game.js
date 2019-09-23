let counter = 20;
let currentQuestionIndex = 0;
let loss = 0;
let win = 0;
let timer;
// function to go the next question and call this function after the player has lost or answered correctly
// debugger;
$("#reset").hide();
showQuestion();

//  Function to show the question and options

function showQuestion() {
	counter = 20;
	timer = setInterval(clock, 1000);

	const question = questions[currentQuestionIndex].ques;
	const options = questions[currentQuestionIndex].options;

	$("#timer").html("Timer :" + counter);
	$("#game").html(`<h3>  ${question} </h3>${showOptions(options)} 
	${questionRemainingLineForUser()}`);
	
}

function nextQuestion() {
	const isQuestionOver = (questions.length - 1) === currentQuestionIndex;
	if (isQuestionOver) {
		alert("Game is over");

		displayResult();
		reset();
		//clock();
	} else {
		currentQuestionIndex++;
		showQuestion();
	}
}

// function time up
function timeUp() {
	clearInterval(timer);

	// loss++;

	nextQuestion();
}

// function to start and reset the timer for user 

function clock() {
	counter--;
	$("#timer").html("Timer :" + counter);
	// to stop the timer at 0 and not going in negative
	if (counter === 0) {
		timeUp();
		// clearInterval(timer);
		// loss++;
		// nextQuestion();
	}


}

// function to show the options using the for loop for 4 displayed options, which is in question.js
function showOptions(options) {

	var result = " ";
	for (var i = 0; i < options.length; i++) {
		result += `<p class ="option" dataAnswer="${options[i]}">${options[i]}</p>`;

	}
	return result;
}


$(document).on("click", ".option", function () {

	clearInterval(timer);

	const selectedOption = $(this).attr("dataAnswer");
	const answer = questions[currentQuestionIndex].answer;

	if (answer === selectedOption) {
		win++;
		// $("#wins").html("Wins:  " + win);
		nextQuestion();
		console.log("win");
	} else {
		loss++;
		// $("#loss").html("Loss:  " + loss);$("#loss").html("Loss:  " + loss);
		nextQuestion();
		console.log("lost")

	}

});

function displayResult() {
	$("#reset").show();
	$("#wins").html("Your score is  " + win + "" + " out of " + questions.length);
	 $("#loss").html("Loss:  " + loss);
	 
};


function reset() {
	 
	var reset = `<btn class="btn btn-primary" id ="reset">Let's Play again</btn>`
	$("#reset").html(reset);
	$("#reset").on("click", function () {

		counter = 20;
		loss = 0;
		win = 0;
		timer = null;
		currentQuestionIndex = 0;
		showQuestion();
	});

}
function questionRemainingLineForUser(){
	const questionsRemaining = questions.length-(currentQuestionIndex+1);
	const totalQuestion = questions.length;

	return `"Remaining questions: ${questionsRemaining}/${totalQuestion}`;

}
