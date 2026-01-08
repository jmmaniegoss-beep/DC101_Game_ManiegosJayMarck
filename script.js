const quote = document.getElementById("quote");
const inputText = document.getElementById("inputText");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

let time = 30;
let score = 0;
let timer;

startBtn.addEventListener("click", startGame);

function startGame() {
    time = 30;
    score = 0;
    inputText.value = "";
    inputText.disabled = false;
    inputText.focus();

    timeDisplay.textContent = time;
    scoreDisplay.textContent = score;

    timer = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    timeDisplay.textContent = time;

    if (time <= 0) {
        clearInterval(timer);
        endGame();
    }
}

inputText.addEventListener("input", () => {
    if (inputText.value === quote.textContent) {
        score++;
        scoreDisplay.textContent = score;
        inputText.value = "";
    }
});

function endGame() {
    inputText.disabled = true;
    alert("Time's up! Your score is: " + score);
}
