// This is an array of objects for storing information about the boxes
var boxesArray = [
	{
		box: "box1",
		correct: false,
		text: "Correct!",
		textWrong: "Sorry",
		image: "img/smiley-face.jpeg",
		imageWrong: "img/frowny-face.jpeg"
	},
	{
		box: "box2",
		correct: false,
		text: "Nice!",
		textWrong: "wrong!",
		image: "img/smiley-face.jpeg",
		imageWrong: "img/frowny-face.jpeg"
	},
	{
		box: "box3",
		correct: false,
		text: "Sweet!",
		textWrong: "Try",
		image: "img/smiley-face.jpeg",
		imageWrong: "img/frowny-face.jpeg"
	},
	{
		box: "box4",
		correct: false,
		text: "Awesome!",
		textWrong: "Again",
		image: "img/smiley-face.jpeg",
		imageWrong: "img/frowny-face.jpeg"
	}
];

// This variable for storing a randomly generated whole number
// Current number range between 1 - 2 
var randonNumber = Math.floor(Math.random() * 4) + 1;
//Test purpose console.log
console.log("The answer is box" + randonNumber);

// This variable is for storing the answer a user must type
var answer;

// This conditional is for assigning the random number to a box
// and it assigns a value for the answer variable
if (randonNumber === 1) {
	boxesArray[0].correct = true
	answer = "box1"
} else if (randonNumber === 2) {
	boxesArray[1].correct = true
	answer = "box2"
} else if (randonNumber === 3) {
	boxesArray[2].correct = true
	answer = "box3"
} else if (randonNumber === 4) {
	boxesArray[3].correct = true
	answer = "box4"
}

//Test purpose console.log 
// console.log(boxesArray[0].correct);
// console.log(boxesArray[1].correct);
// console.log(boxesArray[2].correct);
// console.log(boxesArray[3].correct);


// This function checks the user input and reveals if the correct answer been selected or not
function checkGuess() {
    var userInput = document.getElementById("userInput").value;
    if (userInput === answer && boxesArray[0].correct === true) {
    	document.getElementById("imageBox1").src = boxesArray[0].image;
    	document.getElementById("textBox1").textContent = boxesArray[0].text;
    } else if (userInput === answer && boxesArray[1].correct === true) {
    	document.getElementById("imageBox2").src = boxesArray[1].image;
    	document.getElementById("textBox2").textContent = boxesArray[1].text;
    } else if (userInput === answer && boxesArray[2].correct === true) {
    	document.getElementById("imageBox3").src = boxesArray[2].image;
    	document.getElementById("textBox3").textContent = boxesArray[2].text;
    } else if (userInput === answer && boxesArray[3].correct === true) {
    	document.getElementById("imageBox4").src = boxesArray[3].image;
    	document.getElementById("textBox4").textContent = boxesArray[3].text;
    } else {
    	document.getElementById("imageBox1").src = boxesArray[0].imageWrong;
    	document.getElementById("imageBox2").src = boxesArray[1].imageWrong;
    	document.getElementById("imageBox3").src = boxesArray[2].imageWrong;
    	document.getElementById("imageBox4").src = boxesArray[3].imageWrong;
    	document.getElementById("textBox1").textContent = boxesArray[0].textWrong;
    	document.getElementById("textBox2").textContent = boxesArray[1].textWrong;
    	document.getElementById("textBox3").textContent = boxesArray[2].textWrong;
    	document.getElementById("textBox4").textContent = boxesArray[3].textWrong;
    }
}








