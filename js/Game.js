/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = [            // Phrases
            new Phrase('It could be worse'),
            new Phrase('It takes two to tango'),
            new Phrase('Your guess is as good as mine'),
            new Phrase('Actions speak louder than words'),
            new Phrase('Back to the drawing board')
        ];
        this.activePhrase = null;
    }

    startGame() {   // Displays game board and phrase

        document.querySelector('#overlay').style.display = 'none';      // Display game board
        this.activePhrase = this.getRandomPhrase();                     // Get random phrase form phrase
        this.activePhrase.addPhraseToDisplay();                         // Display random phrase to screen
    }

    getRandomPhrase() {     // Selects and return a random phrase from this.phrases
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(button) {
        button.disabled = true;     // disable the key clicked

        // Checks if letter entered is in phrase
        if(this.activePhrase.checkLetter(button.textContent)) {     // If true, show letters.
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add(`chosen`);
            if(this.checkForWin()) {                                // if all letters guessed, Game Over.
                this.gameOver()
            }
        } else {
            button.classList.add(`wrong`);                           // If false, remove life.
            this.removeLife();
            this.checkForWin();
        }
    }

    removeLife() {                                       // Replace blue hearts with gray hearts when missed
        document.querySelectorAll('img')[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;

        if(this.missed === 5) {                         // if missed five times, game is over
            this.gameOver();
        } 
    }

    checkForWin() {  // Checkss to see if all letters in phrase have been found
        //if(document.querySelectorAll('.show').length === document.querySelectorAll('.letter').length) {  // also works
        if(document.querySelectorAll('.hide').length === 0) {
            return true;
        } else {
            return false;
        }
    }

    gameOver() {        // Displays "win" or "loss" message
        const overlay = document.querySelector('#overlay');
        overlay.style.display = '';
        let gameOverMsg = document.querySelector('#game-over-message');
        if(this.checkForWin() === true) {
            gameOverMsg.textContent = 'Victory is yours!';
            overlay.classList.remove('lose');
            overlay.classList.add('win');
        } else {
            gameOverMsg.textContent = "Try again!";
            overlay.classList.remove('win');
            overlay.classList.add('lose');
        }
        this.resetGame();

    }
    resetGame() {       // Reset the gameboard
        let li = [];
        li = document.querySelectorAll('.letter');
        li.forEach(l => l.parentNode.removeChild(l));       // Remove previous phrase from gameboard
        let keys = [];
        keys = document.querySelectorAll('.key');

        keys.forEach(key => {                               // enable keys
            key.removeAttribute("disabled");
            key.className = "key";
        });

        let image = [];
        image = document.querySelectorAll('img');
        image.forEach(img => img.src= 'images/liveHeart.png')   // Restore life

        this.activePhrase = null;           // Remove previous phrase
    }
}