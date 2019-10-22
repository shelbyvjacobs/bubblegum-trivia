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
let rightOrWrong = document.querySelector("#rightOrWrong");

let score = 0;

const form = document.querySelector('#form')

function askQuestion () {
	for (let i=0; i<questions.length; i++){
		// console.log(questions[i].q);
		questionSection.innerText = questions[i].q; //for some reason on the last question is showing.
		//are all of the questions just simultaneously/very rapidly .innerText-ing, and I only see the last one because that's where it stops?
		checkAnswer();
	}
}
askQuestion();

function checkAnswer () {
	for (let i=0; i<questions.length; i++){
		form.addEventListener("submit", function(evt){
			evt.preventDefault();
			let response = evt.target.querySelector("#response").value;
			if (response == questions[i].a){
				score++
				rightOrWrong.style.color = "green"
				rightOrWrong.innerText = "Correct!"
			} else {
				rightOrWrong.style.color = "red"
				rightOrWrong.innerText = "Wrong!"
			}
		})
	}
}
// checkAnswer();

// console.log("You got " + score + "/" + questions.length + " correct!");

