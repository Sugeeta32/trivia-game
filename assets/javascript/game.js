let counter = 3;
let currentQuestion = 0;
let loss = 0;
let win = 0;
let timer;

// function to start and reset the timer for user 

function clock(){
	counter--;
	$("#timer").html("Timer :" + counter);
// to stop the timer at 0 and not going in negative
	if (counter === 0){
		clearInterval(timer);
	}
}


//  Function to show the question and options

function showQuestion() {
	counter = 3;
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
	for (var i =0; i < options.length; i++){
		result += `<p class ="option" dataAnswer="${options[i]}">${options[i]}</p>`;

	}
	
return result;
 
}
