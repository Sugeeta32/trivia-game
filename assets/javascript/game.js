let counter = 0;
let currentQuestionIndex = 0;
let loss = 0;
let win = 0;
let timer = 0;


 $("#new").hide();

 
 

//  Function to show the question and options

function showQuestion() {
	
	counter = 20;
	timer = setInterval(clock, 1000);
	$("#firstPage").detach();
	 $("#new").show();
	$("#resetbtn").hide();
	const question = questions[currentQuestionIndex].ques;
	const options = questions[currentQuestionIndex].options;


	$("#game").html(`<h3> ${question} </h3> ${showOptions(options)} 
	${questionRemainingLineForUser()}`);
	$("#timer").html("Timer :" + counter);
	
	
	
}





function nextQuestion() {
	const isQuestionOver = (questions.length - 1) === currentQuestionIndex;
	if (isQuestionOver) {
		alert("Game is over");

		displayResult();

	} else {
		currentQuestionIndex++;
		showQuestion();
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

// function to start and reset the timer for user 

function clock() {
	counter--;
	$("#timer").html("Timer :" + counter);
	// to stop the timer at 0 and not going in negative
	if (counter === 0) {
		timeUp();

	}
}

// function time up
function timeUp() {
	clearInterval(timer);
	counter = 20;
	nextQuestion();
}

$(document).on("click", ".option", function () {

	clearInterval(timer);
	const selectedOption = $(this).attr("dataAnswer");
	const answer = questions[currentQuestionIndex].answer;
	if (answer === selectedOption) {
		win++;
		nextQuestion();
		

	} else {
		loss++;
		nextQuestion();
		
	}
});

function displayResult() {

	$("#resetbtn").show();
	$("#wins").html("Your score is  " + win + "" + " out of " + questions.length).show();
	$("#loss").html("Loss:  " + loss).show();
	$("#game").toggle();
	
};


function resetGame() {
	counter = 0;
	loss = 0;
	win = 0;
	timer = 0;
	currentQuestionIndex = 0;
	clearInterval(timer);
	$("#wins").html("Correct: " + win).hide();
	$("#loss").html("Wrong: "+ loss).hide();

	//  $("#wins").hide();
	// $("#loss").hide();
}

var reset = (`<btn class="btn btn-primary" id ="resetbtn">Let's Play again</btn>`);
$("#new").append(reset);
$("#resetbtn").on("click", function () {
	resetGame();
	clearInterval(timer);
	showQuestion();
	// nextQuestion();
	$("#game").toggle();
});


function questionRemainingLineForUser() {
	const questionsRemaining = questions.length - (currentQuestionIndex + 1);
	const totalQuestion = questions.length;
	return `You have  ${questionsRemaining}/${totalQuestion} questions remaining ! `;

}

function playAudio() {
	$("#pop").play();
  }
  