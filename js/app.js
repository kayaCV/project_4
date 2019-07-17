/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase('Your guess is as good as mine');       // REMOVE
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);    // REMOVE
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);      // REMOVE
//     };                                                    // TEST FOR RANDOM PHRASES
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());


// const game = new Game();   //TEST FOR addPhraseToDisplay   REMOVE
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game(); // TEST FOR START GAME      REMOVE
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

/**
● Inside the app.js file, declare a new variable called `game` that’s not set to anything.
● Then, add a "click" event listener to the HTML `<button>` element with an `id` of
`btn__reset`. Inside the callback function for this click event listener, use your `game`
variable to instantiate a new Game object. Call the `startGame()` method on this new
Game object.
 */

let game;

document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
