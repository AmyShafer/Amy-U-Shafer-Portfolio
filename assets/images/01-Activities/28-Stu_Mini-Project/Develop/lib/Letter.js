class Letter {
  constructor (letter, visible) {
      const letter = "";
      const visible;

      if (typeof letter === "string" || typeof letter === "number") {
          input === '_'
        visible = false;
        return visible; 
      }

      let guessArr = guess.split('');

      for (let i = 0; i < guessArr.length; i++) {
        var currentChar = guessArr[i];
        if (currentChar === letter) {
          letter.visible = true;
          console.log("Great Guess!");
        } else {
          console.log("Guess Again!");
        }
      }
  }

  
}

module.exports = Letter;
