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
const nextButton = document.querySelector(".next");
const startButton = document.querySelector(".start");
const mainGame = document.querySelector(".mainGame");
const form = document.querySelector('#form');
let score = 0;

startButton.addEventListener("click", startGame);
function startGame () {
	startButton.classList.add("hide");
	mainGame.classList.remove("hide");
}

i = 0;

// function askQuestion () {
// 	for (let i=0; i<questions.length; i++){
// 		questionSection.innerText = questions[i].q;
// 		//for some reason on the last question is showing.
// 		//all of the questions just simultaneously/very rapidly .innerText-ing, and I only see the last one because that's where it stops...
// 		//console shows all of the questions!
// 	}
// }
// askQuestion();

function checkAnswer () {
	for (let i=0; i<questions.length; i++){
		questionSection.innerText = questions[i].q;
		form.addEventListener("submit", function(evt){
			evt.preventDefault();
			// console.log(evt.target.querySelector("#response").value);
			let response = evt.target.querySelector("#response").value;
			console.log(response); //logs 9 times??? why? 3 times for each answer
			if (response.toLowerCase() == questions[i].a.toLowerCase()){
				score++
				rightOrWrong.style.color = "green"
				rightOrWrong.style.fontSize = "40px";
				rightOrWrong.innerText = "Correct!"
				nextButton.classList.remove("hide");
				//move on to next question
			} else if (response.toLowerCase() == ""){
				rightOrWrong.style.color = "black"
				rightOrWrong.style.fontSize = "20px";
				rightOrWrong.innerText = "Please enter an answer!"
			} else {
				rightOrWrong.style.color = "red"
				rightOrWrong.style.fontSize = "40px";
				rightOrWrong.innerText = "Wrong!"
				nextButton.classList.remove("hide");
			}
		})
	}
}
checkAnswer();

// nextButton.addEventListener("click", function(evt){
// 	i+=1;
// })

// trigger this only when all of the questions have been answered.
// if (questions[i] == questions.length) {
// console.log("You got " + score + "/" + questions.length + " correct!");
// };

