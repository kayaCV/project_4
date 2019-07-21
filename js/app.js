/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.querySelector('#btn__reset').addEventListener('click', () => {  // Reveal game board when Sart Game is clicked
    game = new Game();
    game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', e => {    // When any keys is clicked, handleInteractions will be called
    if(e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
})


document.addEventListener('keydown', e => {           // EXTRA CREDIT: Add functionality to physical keyboard
    const letter = event.key.toLowerCase(); 
    const valid = /^[A-Za-z]$/.test(letter);        // check to see if key entered is a single letter
    const overlay = document.querySelector('#overlay').style.display;  // check to see if game has started
    let keys = [];
    keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.setAttribute('tabindex', -1);       // disable tab key focus on onscreen keyboard
    });

    if (valid && overlay === 'none') {              //    If key entered is a single letter and the game has started; handle interacion on key with same value
    
        keys.forEach(key => {
            keyLetter = key.textContent;
            if(letter.includes(keyLetter)) {
                game.handleInteraction(key);
            }
        });
    }

});