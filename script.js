const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const userChoiceText = document.getElementById('userChoice');
const computerChoiceText = document.getElementById('computerChoice');
const winnerText = document.getElementById('winner');

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceText.textContent = userChoice;
    computerChoiceText.textContent = computerChoice;
    winnerText.textContent = winner;
    resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}
