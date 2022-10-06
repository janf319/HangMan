/*Array to hold my words to guess*/
var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]
/*temporary variables to play game */
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
/*using random generator from Math class to randomly select word from my array*/
function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}
/* function to generate my Alphabets*/
function generateButtons() {
let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
    <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
    >
        ` + letter + `
    </button>
    `).join('');

document.getElementById('keyboard').innerHTML = buttonsHTML;
}

/* function that passes in the chosen letter. Using the DOM element to select the chosenLetter*/
function handleGuess(chosenLetter) {
guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
document.getElementById(chosenLetter).setAttribute('disabled', true);

if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
} else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
}
}

/*Using DOM element to update Hangman picture based on variable mistakes */
function updateHangmanPicture() {
document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
}
}

function checkIfGameLost() {
if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
}
}
/*Displays the correct word on screen once guessed */
function guessedWord() {
wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
/* Makes sure mistakes are updated */
function updateMistakes() {
document.getElementById('mistakes').innerHTML = mistakes;
}
/* Resets the array, mistakes, picture and then run all the methods again to play again */
function reset() {
mistakes = 0;
guessed = [];
document.getElementById('hangmanPic').src = './images/0.jpg';

randomWord();
guessedWord();
updateMistakes();
generateButtons();
}
/* Injecting HTML maxWrong to JavaScript*/
document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
//Footer Output//
var user = 'HANGMAN GAME ';
var email = ' fatimahnseer@gmail.com';

var info = user + email;
var infoEl = document.getElementById('footer-name');

infoEl.textContent = info;
