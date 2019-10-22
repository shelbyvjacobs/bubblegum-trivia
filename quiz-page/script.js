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

let questionSection = document.querySelector("#questionSection");

let score = 0;

const form = document.querySelector('#form')

for (let i=0; i<questions.length; i++){
	questionSection.innerText = questions[i].q;
	form.addEventListener("submit", function(evt){
		evt.preventDefault();
		let response = evt.target.querySelector("#answer");
		if (response == questions[i].a){
			score++
			console.log("Correct!");
		} else {
			console.log("Wrong!");
		}
	})
	// let currentQuestion = document.createElement("H3");
	// currentQuestion.innerText = response;
	// questionSection.innerText = "There should be a question here!"
};

console.log("You got " + score + "/" + questions.length + " correct!");