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
	}
];

// This variable for storing a randomly generated whole number
// Current number range between 1 - 2 
var randonNumber = Math.floor(Math.random() * 2) + 1;
//Test purpose console.log
console.log(randonNumber);

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
}

//Test purpose console.log 
console.log(boxesArray[0].correct);
console.log(boxesArray[1].correct);


// This function checks the user input and reveals if the correct answer been selected or not
function checkGuess() {
    var userInput = document.getElementById("userInput").value;
    if (userInput === answer && boxesArray[0].correct === true) {
    	document.getElementById("imageBox1").src = boxesArray[0].image;
    	document.getElementById("textBox1").textContent = boxesArray[0].text;
    	return
    } else if (userInput === answer && boxesArray[1].correct === true) {
    	document.getElementById("imageBox2").src = boxesArray[1].image;
    	document.getElementById("textBox2").textContent = boxesArray[1].text;
    	return
    } else {
    	document.getElementById("imageBox1").src = boxesArray[0].imageWrong;
    	document.getElementById("imageBox2").src = boxesArray[1].imageWrong;
    	document.getElementById("textBox1").textContent = boxesArray[0].textWrong;
    	document.getElementById("textBox2").textContent = boxesArray[1].textWrong;
    }
}








