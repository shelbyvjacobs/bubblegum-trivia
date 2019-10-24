// PSEUDOCODE
// create the variables:
// and array of ojects for the questions
// a variable score set to zero to track the score
// variable response that is empty to collect the user's responses
//MULTIPLE CHOICE; change to radio buttons? silver level
const questions =[
	{q: "1. When was bubble gum invented? \n (a) 1892 \n (b) 1928 \n (c) 1901",
	a: "b"
	}, //1
	{q: "2. What is the official bubble gum of Major League Baseball? \n (a) Bubble Yum \n (b) Dubble Bubble \n (c) Bazooka",
	a: "a"
	}, //2
	{q: "3. How many tons of gum are chewed every year? \n (a) 10,000 \n (b) 1,000,000 \n (c) 100,000",
	a: "c"
	}, //3
	{q: "4. What came first: chewing gum or bubble gum? \n (a) chewing gum \n (b) bubble gum \n (c) both were invented at the same time",
	a: "a"
	}, //4
	{q: "5. Who invented bubble gum? \n (a) Theodore Horowitz \n (b) Ruth Spiro \n (c) Walter Diemer",
	a: "c"
	}, //5
	{q: "6. What was the diameter of the largest bubble gum bubble ever blown? \n (a) 50.8cm \n (b) 47.2in \n (c) 15in",
	a: "a"
	}, //6
	{q: "7. Who holds the Guiness World Record for largest bubble gum bubble? \n (a) Monica Puller \n (b) Chad Fell \n (c) Susan Mont'Gum'ry Williams",
	a: "b"
	}, //7
	{q: "8. What company produced the first bubble gum? \n (a) Hubba Bubba \n (b) Dubble Bubble \n (c) Zebra",
	a: "b"
	}, //8
	{q: "9. How long is a roll of Hubba Bubba Bubble Tape? \n (a) 8ft \n (b) 10ft \n(c) 6ft",
	a: "c"
	}, //9
	{q: "10. In 2018, a group of people set the World Record for most people blowing bubble gum simultaneously. How many people were in the group? \n (a) 457 \n (b) 881 \n (c) 1002",
	a: "b"
	} //10
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
const input = document.querySelector("input");
const modal = document.querySelector(".modal");
const instructions = document.querySelector(".instructions");
let userScore = 0;

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

i=0;

//check if the answer is correct or incorrect
function checkAnswer () {
	// console.log(questions[index].q)
	questionSection.innerText = questions[i].q;
	// input.reset(); //returns not a function
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
};

checkAnswer();

//next button
nextButton.addEventListener("click", function(evt){
	evt.preventDefault();
	i++
	if (i < questions.length - 1){
		checkAnswer();
		console.log(i);
	} else {
		console.log(i);
		console.log("Results page!")
		shareResults();
	}
});

function shareResults() {
	mainGame.classList.add("hide");
	nextButton.classList.add("hide");
	results.classList.remove("hide");
	console.log(scoreContainer);
	scoreContainer.classList.remove("hide");
	scoreContainer.innerText = "You got " + userScore + "/" + questions.length + " correct. Good job!";
	resetButton.classList.remove("hide");
};

resetButton.addEventListener("click", resetGame);
function resetGame () {
	location.reload();
};
