/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0
        this.phrases = [
            // {phrase: 'It could be worse'}, 
            // {phrase: 'It takes two to tango'}, 
            // {phrase: 'Your guess is as good as mine'}, 
            // {phrase: 'Actions speak louder than words'}, 
            // {phrase: 'Back to the drawing board'}
            new Phrase('It could be worse'),
            new Phrase('It takes two to tango'),
            new Phrase('Your guess is as good as mine'),
            new Phrase('Actions speak louder than words'),
            new Phrase('Back to the drawing board')
        
        ];
        this.activePhrase = null;
    }

    startGame() {   // Displays game board and phrase
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        //return phrase;
    }

    getRandomPhrase() {     // Selects and return a random phrase from this.phrases
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction() {
        
        
        /**
         * capture letter entered
         * check if captured letter match any in phrase
         * if true,
         *      display letter
         * else
         *      remove life from screen board
         * 
         */


    }

    // removeLife() {


    // }

    checkForWin() {
        /**
         * if() {
         * 
         * }
         */


    }

    // gameOver(gameWon) {


    // }
 }