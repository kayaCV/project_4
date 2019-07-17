/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {      // Adds letter placeholders to the display when the game starts
        const ul = document.querySelector('ul');

        [...this.phrase].forEach((character) => {
        //this.phrase.split('').forEach((character) => {  // both work
            const liLetters = document.createElement('li');
            ul.append(liLetters);
            if(character === ' ') {
                liLetters.classList.add('space');
                liLetters.innerHTML = ' ';
            } else {
                liLetters.classList.add('letter', `${character}`); // 'hide', 
                liLetters.innerHTML = character;
            }
        })


    //     /**
    //      * this adds letter placeholders to the display when the game starts. 
    //      * Each letter is presented by an empty box, one li element for each letter. 
    //      * See the example_phrase_html.txt file for an example of what the rendered HTML 
    //      * for a phrase should look like when the game starts, including any id or class 
    //      * attributes needed. When the player correctly guesses a letter, the empty box 
    //      * is replaced with the matched letter (see the showMatchedLetter() method below). 
    //      * Make sure the phrase displayed on the screen uses the letter CSS class for 
    //      * letters and the space CSS class for spaces.
    //      */

    }

    checkLetter(letter) {       // Check if letter entered imatches a letter in the phrase
        return this.phrase.indexOf(letter) > -1;
        /**
         * checks to see if the letter selected by the player matches a letter in the phrase.
         * return true or false
         */

    }

    showMatchedLetter(letter) {        // Display matched letter
        let matchedLetters = [];
        matchedLetters = document.querySelectorAll(`.${letter}`);

        for (let letters of matchedLetters) {
            letters.classList.add('show');
            letters.classList.remove('hide');
        }
        /**
         * reveals the letter(s) on the board that matches the player's selection. 
         * To reveal the matching letter(s), select all of the letter DOM elements 
         * that have a CSS class name that matches the selected letter and replace 
         * each selected element's hide CSS class with the show CSS class.
         */

    }

 }