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


var answer;

function checkAnswer() {
    var userInput = document.getElementById("userInput").value;
        if (userInput === answer) {
       	document.getElementById("zodiacImage").src = zodiac[i].image;
        }
