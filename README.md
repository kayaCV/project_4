# FSJS Project 4 - OOP Game App

## Description:
### Phrase Hunter:
A browser-based word guessing game created using JavaScript and Object-Oriented Programming.
When player guesses a letter correctely, the letters are displayed on the screen. If the letter is not in the phrase, player loses a life. Each letter can only be chosen once. This continues until all letters are guessed correctly and player wins the game or all lives are lost (five total) and player loses the game.

## Extra Credit Features:
* Added keydown event listener to give functionality to physical keyboard. Player can either use onscreen keys or physical keyboard (_app.js_);

* Correct phrase is displayed on screen if player loses the game (_game.js_);
* Start button highlights when mouse hovers over it (_styles.css_);
* Using classes from the animate.css file provided, added animation to:
    * phrase placeholders (_phrase.js)_;
    * correct key pressed (_game.js_);
    * wrong key pressed (_game.js_);
    * removed heart (_game.js_);
