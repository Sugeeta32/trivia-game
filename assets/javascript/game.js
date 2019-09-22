let counter = 10;
let currentQuestion = 0;
let loss = 0;
let win = 0;
let timer;
// function to go the next question and call this function after the player has lost or answered correctly

function nextQuestion() {
	const isQuestionOver = (questions.length - 1) === currentQuestion;
	if (isQuestionOver) {
		alert("Game is over");
		clearInterval(timer);
		// timeUp();
	} else {
		currentQuestion++;
		showQuestion();
	}

}

// function time up
function timeUp(){
	clearInterval(timer);
	loss++;
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


//  Function to show the question and options

function showQuestion() {
	counter = 10;
	timer = setInterval(clock, 1000);

	const question = questions[currentQuestion].ques;
	const options = questions[currentQuestion].options;

	$("#timer").html("Timer :" + counter);
	$("#game").html(`<h3>  ${question} </h3>

	 ${showOptions(options)}
	`);
}

showQuestion();

// function to show the options using the for loop for 4 displayed options, which is in question.js
function showOptions(options) {

	var result = " ";
	for (var i = 0; i < options.length; i++) {
		result += `<p class ="option" dataAnswer="${options[i]}">${options[i]}</p>`;

	}

	return result;

}


$(document).on ("click", ".option", function () {
	clearInterval(timer);
	const selectedOption =$(this).attr("dataAnswer");
	const answer = questions[currentQuestion].answer;
	
	if(answer === selectedOption){
		win++;
		nextQuestion();
		console.log("win");
	} else{
		loss++;
		nextQuestion();
		console.log("lost")

	}

});
showQuestion();
