// Number Guessing Game from different project - jumping off point
// var answer = Math.floor(Math.random() * 100) + 1;
// var guess = prompt("Enter a number between 1 - 100");
// var attemptsLeft = 7;

// while(guess != answer) {
// 	attemptsLeft--;
// 	if(attemptsLeft > 0) {
// 		if (guess < answer) {
// 			 guess = prompt(guess + " is less than the answer. You have " + attemptsLeft + " attempts left")
// 		} else if (guess > answer) {
// 			guess = prompt(guess + " is greater than the answer. You have " + attemptsLeft + " attempts left")
// 		}
// 	} else {
// 		alert("Loser!")
// 		break;
// 	}
// }

// alert(answer + " is the correct answer");

var boxesArray = [
	{
		box: "box1",
		correct: false,
		text: "This is the correct box!",
		image: "img/smiley-face.jpeg"
	},
	{
		box: "box2",
		correct: false,
		text: "This is the correct box!",
		image: "img/smiley-face.jpeg"
	}
];

var randonNumber = Math.floor(Math.random() * 2) + 1;
console.log(randonNumber);

var answer;
// if (randonNumber === 1) {
// 	answer = "box1"
// } else if (randonNumber === 2) {
// 	answer = "box2"
// }

if (randonNumber === 1) {
	boxesArray[0].correct = true
	answer = "box1"
} else if (randonNumber === 2) {
	boxesArray[1].correct = true
	answer = "box2"
}
console.log(boxesArray[0].correct);
console.log(boxesArray[1].correct);

// function checkGuess() {
//     var userInput = document.getElementById("userInput").value;
//         if (userInput === answer) {
//        	document.getElementById("imageBox1").src = "img/smiley-face.jpeg";
//     }
// }

function checkGuess() {
    var userInput = document.getElementById("userInput").value;
    for (i = 0; i < boxesArray.length; i++) {
        if (userInput === answer && boxesArray[0].correct === true) {
        	document.getElementById("imageBox1").src = "img/smiley-face.jpeg";
        } else if (userInput === answer && boxesArray[1].correct === true) {
        	document.getElementById("imageBox2").src = "img/smiley-face.jpeg";
        }
    }
}








