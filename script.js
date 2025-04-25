// Generate a random number between 0 and 10
const randomNumber = Math.floor(Math.random() * 11);

const submitBtn = document.getElementById('submitBtn');
const userInput = document.getElementById('userInput');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const userGuess = Number(userInput.value);

  if (userGuess === randomNumber) {
    result.textContent = "🎉 GG! You guessed it right!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Game Over. Try again!";
    result.style.color = "red";
  }
});
