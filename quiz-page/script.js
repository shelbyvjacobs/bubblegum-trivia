// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses
//MULTIPLE CHOICE; change to radio buttons? silver level
const questions =[
	{q: "When was bubble gum invented? \n (a) 1892 \n (b) 1928 \n (c) 1901",
	a: "b"
	},
	{q: "What is the official bubble gum of Major League Baseball? \n (a) Bubble Yum \n (b) Dubble Bubble \n (c) Bazooka",
	a: "a"
	},
	{q: "How many tons of gum are chewed every year? \n (a) 10,000 \n (b) 1,000,000 \n (c) 100,000",
	a: "c"
	},
	{q: "What came first: chewing gum or bubble gum? \n (a) chewing gum \n (b) bubble gum \n (c) both were invented at the same time",
	a: "b"
	}
];

let questionSection = document.querySelector("#questionSection");
let rightOrWrong = document.querySelector("#rightOrWrong");
const nextButton = document.querySelector(".next");
const startButton = document.querySelector(".start");
const mainGame = document.querySelector(".mainGame");
const resetButton = document.querySelector(".reset");
const results = document.querySelector(".results");
let scoreContainer = document.querySelector(".scoreContainer");
const form = document.querySelector('#form');
const modal = document.querySelector(".modal");
const instructions = document.querySelector(".instructions");
let userScore = 0;
//start the game
startButton.addEventListener("click", startGame);
function startGame () {
	startButton.classList.add("hide");
	instructions.classList.add("hide");
	mainGame.classList.remove("hide");
};

function shareResults() {
	mainGame.classList.add("hide");
	nextButton.classList.add("hide");
	results.classList.remove("hide");
	console.log(scoreContainer);
	scoreContainer.classList.remove("hide");
	scoreContainer.innerText = "You answered " + userScore + "/" + questions.length + " correctly. Good job!";
	resetButton.classList.remove("hide");
};

resetButton.addEventListener("click", resetGame);
function resetGame () {
	location.reload();
};

i=0;

function checkAnswer () {
	// console.log(questions[index].q)
	questionSection.innerText = questions[i].q;
	rightOrWrong.innerText = "";
	form.addEventListener("submit", function(evt){
		evt.preventDefault();
		let response = evt.target.querySelector("#response").value;
		console.log(response); //logs 3 times for each answer
		if (response.toLowerCase() == questions[i].a){
			userScore++
			rightOrWrong.style.color = "#6eff7a"
			rightOrWrong.style.fontSize = "40px";
			rightOrWrong.innerText = "Correct!"
			nextButton.classList.remove("hide");
			//move on to next question
		} else if (response == ""){
			rightOrWrong.style.color = "black"
			rightOrWrong.style.fontSize = "20px";
			rightOrWrong.innerText = "Please enter an answer!"
		} else {
			rightOrWrong.style.color = "#ff6e6e"
			rightOrWrong.style.fontSize = "40px";
			rightOrWrong.innerText = "Incorrect!"
			nextButton.classList.remove("hide");
		}
	})
	//next button
	nextButton.addEventListener("click", function(evt){
		evt.preventDefault();
		i += 1
		if (i < questions.length - 1){
			checkAnswer();
			console.log(i);
		} else {
			console.log(i);
			console.log("Results page!")
			shareResults();
		}
	})
};
checkAnswer();

//instructions modal
instructions.addEventListener("click", function(evt){
	evt.preventDefault();
	modal.style.display = "block";
});

//close modal
window.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (evt.target == modal) {
		modal.style.display = "none";
	}
});
