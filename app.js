// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const diceResult = document.querySelector('#roll-result');
const button = document.querySelector('button');

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    diceResult.innerHTML = '<img src="' + rollResult + '.png">';
}

button.addEventListener('click', () => {
    rollDice();
});