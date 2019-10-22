// console.log("linked");

// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses


//MULTIPLE CHOICE
// const questions =[
// 	{q: "What color is the sky? \n (a) blue \n (b) red \n (c) purple",
// 	a: "a"
// 	},
// 	{q: "Which of these animals barks? \n (a) cat \n (b) bird \n (c) dog",
// 	a: "c"
// 	},
// 	{q: "What is the capitol of the USA? \n (a) Tokyo \n (b) Sydney \n (c) Washington D.C.",
// 	a: "c"
// 	}
// ];


//NO MULTIPLE CHOICE
const questions = [
	{q: "What color is the sky?",
	a: "blue"
	},
	{q: "What animal barks?",
	a: "dog"
	},
	{q: "What does NYC stand for?",
	a: "New York City"
	}
];

let questionSection = document.querySelector("#questionSection");
let rightOrWrong = document.querySelector("#rightOrWrong");
const nextButton = document.querySelector("button");

let score = 0;

const form = document.querySelector('#form')

function askQuestion () {
	for (let i=0; i<questions.length; i++){
		questionSection.innerText = questions[i].q;
		//for some reason on the last question is showing.
		//all of the questions just simultaneously/very rapidly .innerText-ing, and I only see the last one because that's where it stops...
		//console shows all of the questions!
		checkAnswer();
	}
}
askQuestion();

function checkAnswer () {
	for (let i=0; i<questions.length; i++){
		form.addEventListener("submit", function(evt){
			evt.preventDefault();
			let response = evt.target.querySelector("#response").value;
			console.log(response); //logs 9 times??? why?
			if (response.toLowerCase() == questions[i].a.toLowerCase()){
				score++
				rightOrWrong.style.color = "green"
				rightOrWrong.innerText = "Correct!"
				nextButton.classList.remove("hide");
			} else {
				rightOrWrong.style.color = "red"
				rightOrWrong.innerText = "Wrong!"
				nextButton.classList.remove("hide");
			}
		})
	}
}
// checkAnswer();


// trigger this only when all of the questions have been answered.
// if (questions[i] == questions.length) {
// console.log("You got " + score + "/" + questions.length + " correct!");
// };

