// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses
//MULTIPLE CHOICE; change to radio buttons? silver level
const questions =[
	{q: "What came first: chewing gum or bubble gum? (1 point)\n (a) chewing gum \n (b) bubble gum \n (c) both were invented at the same time",
	a: "a"
	}, //1
	{q: "What is the official bubble gum of Major League Baseball? (2 points)\n (a) Bubble Yum \n (b) Dubble Bubble \n (c) Bazooka",
	a: "a"
	}, //2
	{q: "How long is a roll of Hubba Bubba Bubble Tape? (3 points)\n (a) 8ft \n (b) 10ft \n(c) 6ft",
	a: "c"
	}, //3
	{q: "What company produced the first bubble gum? (4 points)\n (a) Hubba Bubba \n (b) Dubble Bubble \n (c) Zebra",
	a: "b"
	}, //4
	{q: "When was bubble gum invented? (5 points)\n (a) 1892 \n (b) 1928 \n (c) 1901",
	a: "b"
	}, //5
	{q: "Who invented bubble gum? (6 points) \n (a) Theodore Horowitz \n (b) Ruth Spiro \n (c) Walter Diemer",
	a: "c"
	}, //6
	{q: "How many tons of gum are chewed every year? (7 points)\n (a) 10,000 \n (b) 1,000,000 \n (c) 100,000",
	a: "c"
	}, //7
	{q: "What was the diameter of the largest bubble gum bubble ever blown? (8 points)\n (a) 50.8cm \n (b) 47.2in \n (c) 15in",
	a: "a"
	}, //8
	{q: "Who holds the Guiness World Record for largest bubble gum bubble? (9 points)\n (a) Monica Puller \n (b) Chad Fell \n (c) Susan Mont'Gum'ry Williams",
	a: "b"
	}, //9
	{q: "In 2018, a group of people set the World Record for most people blowing bubble gum simultaneously. How many people were in the group? (10 points)\n (a) 457 \n (b) 881 \n (c) 1002",
	a: "b"
	} //10

];

let questionSection = document.querySelector("#questionSection");
let rightOrWrong = document.querySelector("#rightOrWrong");
const nextButton = document.querySelector(".next");
const startButton = document.querySelector(".start");
const mainGame = document.querySelector(".mainGame");
const resetButton = document.querySelector(".resetButton");
const results = document.querySelector(".results");
let scoreContainer = document.querySelector(".scoreContainer");
const form = document.querySelector('#form');
const input = document.querySelector("input");
const modal = document.querySelector(".modal");
const instructions = document.querySelector(".instructions");
let userScore = 0;
i = 0;

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

//start the game
startButton.addEventListener("click", startGame);
function startGame () {
	startButton.classList.add("hide");
	instructions.classList.add("hide");
	mainGame.classList.remove("hide");
};

//check if the answer is correct or incorrect
function checkAnswer () {
	questionSection.innerText = questions[i].q;
	rightOrWrong.innerText = "";
	form.addEventListener("submit", function(evt){ //logs the response as many times as the index of the question
		evt.preventDefault();
		let response = evt.target.querySelector("#response").value;
		console.log(response);
		if (response.toLowerCase() == questions[i].a){
			rightOrWrong.style.color = "#6eff7a"
			rightOrWrong.style.fontSize = "60px";
			rightOrWrong.innerText = "Correct!"
			nextButton.classList.remove("hide");
			userScore++;
		} else if (response == ""){
			rightOrWrong.style.color = "black"
			rightOrWrong.style.fontSize = "40px";
			rightOrWrong.innerText = "Please enter an answer!"
		} else {
			rightOrWrong.style.color = "#ff6e6e"
			rightOrWrong.style.fontSize = "60px";
			rightOrWrong.innerText = "Incorrect!"
			nextButton.classList.remove("hide");
		}
	})
};

checkAnswer();

//next button
nextButton.addEventListener("click", function(evt){
	evt.preventDefault();
	i++
	if (i < questions.length){
		checkAnswer();
		console.log(i);
	} else {
		console.log(i);
		console.log("Results page!")
		shareResults();
	}
});

//results page
function shareResults() {
	mainGame.classList.add("hide");
	nextButton.classList.add("hide");
	results.classList.remove("hide");
	scoreContainer.classList.remove("hide");
	resetButton.classList.remove("hide");
	if (userScore >= 30){
		scoreContainer.innerText = "You got " + userScore + "/55 points. You're unbelievabubble!"
	} else {
		scoreContainer.innerText = "Sorry to burst your bubble. You only got " + userScore + "/55 points. "
	}
};

//reset the game (basically just reloads the page)
resetButton.addEventListener("click", function(evt){
	location.reload();
});

