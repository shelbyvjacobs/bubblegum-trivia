// console.log("linked");

// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses

const questions =[
	{q: "What color is the sky? \n (a) blue \n (b) red \n (c) purple",
	a: "a"
	},
	{q: "Which of these animals barks? \n (a) cat \n (b) bird \n (c) dog",
	a: "c"
	},
	{q: "What is the capitol of the USA? \n (a) Tokyo \n (b) Sydney \n (c) Washington D.C.",
	a: "c"
	}
];

let score = 0;

for (let i=0; i<questions.length; i++){
	//inside window.prompt is what the user will see; the question
	let response = console.log(questions[i].q);
	if (response = questions[i].a){
		score++
		console.log("Correct!");
	}else {
		console.log("Wrong!");
	}
};

console.log("You got " + score + "/" + questions.length + " correct!");