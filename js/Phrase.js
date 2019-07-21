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
                liLetters.classList.add('hide', 'letter', `${character}`);
                liLetters.innerHTML = character;
            }
        })
    }

    checkLetter(letter) {       // Check if letter entered imatches a letter in the phrase
        return this.phrase.indexOf(letter) > -1;   // true or false
    }

    showMatchedLetter(letter) {        // Displays all matched letters
        let matchedLetters = [];
        matchedLetters = document.querySelectorAll(`.${letter}`);

        matchedLetters.forEach(letters => {
        // for (let letters of matchedLetters) { also works
            letters.classList.add('show');
            letters.classList.remove('hide');
        }

    )}

 }