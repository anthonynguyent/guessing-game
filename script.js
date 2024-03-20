let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
	// console.log("Button has been clicked");

	const inputElement = document.getElementById('guess');
	const feedbackElement = document.getElementById('feedback');
	const guess = parseInt(inputElement.value);
	while (attempts > 0) {
		attempts -= 1;
		if (guess === randomNumber) {
			feedbackElement.style.color = 'green';
			feedbackElement.innerHTML = 'Correct! That was the exact number.';

			break;
		} else if (guess < randomNumber) {
			feedbackElement.style.color = 'red';
			feedbackElement.innerHTML =
				'Too low! Try again. You have this many attempts left: ' +
				attempts;

			break;
		} else {
			feedbackElement.style.color = 'red';
			feedbackElement.innerHTML =
				'Too high! Try again. You have this many attempts left: ' +
				attempts;

			break;
		}
	}

	if (attempts === 0 && guess !== randomNumber) {
		feedbackElement.style.color = 'red';
		feedbackElement.innerHTML = 'Game over';
	}
}
