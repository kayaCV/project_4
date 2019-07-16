/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0
        this.phrases = [
            {phrase: 'it could be worse'}, 
            {phrase: 'it takes two to tango'}, 
            {phrase: 'your guess is as good as mine'}, 
            {phrase: 'actions speak louder than words'}, 
            {phrase: 'Back to the drawing board'}];
        this.activePhrase = null;
    }

    // startGame() {


    // }

    getRandomPhrase() {  // Selects and return a random phrase from phrases property
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    // handleInteraction() {


    // }

    // removeLife() {


    // }

    // checkForWin() {


    // }

    // gameOver() {


    // }
 }

 // 'it could be worse', 'it takes two to tango', 'your guess is as good as mine', 'actions speak louder than words', 'Back to the drawing board'
