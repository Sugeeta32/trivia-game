let counter = 30;
let currentQuestion = 1;
let loss = 0;
let win = 0;
let timer;

//  Function to show the question and options

function showQuestion() {

	const question = questions[currentQuestion].ques;
	const options = questions[currentQuestion].options;
	
	$("#timer").html("Timer :" + counter);
	$("#game").html(`<h3>  ${question} </h3>

	${showOptions(options)}
	`);
}

showQuestion();


function showOptions(options) {
	
	var result = " ";
	for (var i =0; i < options.length; i++){
		result += `<h4 class ="option" dataAnswer="${options[i]}">${options[i]}</h4>`;

	}
	
return result;

}
