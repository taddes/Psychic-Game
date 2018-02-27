 
    //declaration of variables, from start of game
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var userArray = [ ]; 
    var psyGuess;

    //sound variables
    var soundAmbient;
    var soundStart;
    var soundWin;
    var soundLoss;
    var soundRetry;
    //create array of guessed letters, print them out

    //Sound Constructor
    function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
soundAmbient = new sound("./assets/sounds/Credits.mp3");
    soundAmbient.play();
    //Delare array of computer guesses 
    psyOptions = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "X", "y", "z"];

    document.onkeyup = function () { 
       
        //user presses key
        var userGuess = (event.key).toLowerCase();

       if( psyOptions.indexOf(userGuess) > -1 )  {

        if( userArray.indexOf(userGuess) === -1 ) {


        userArray.push(event.key);
        if ( guesses === 9) {
        psyGuess = psyOptions[Math.floor(Math.random() * psyOptions.length)];
            if (userGuess === psyGuess) {
                wins++;
                guesses = 9;
                userArray = [];
                soundWin = new sound("./assets/sounds/tosWin.mp3");
                soundWin.play();
            }  else if ((userGuess !== psyGuess) && (guesses === 0)) {
                losses++;
                guesses = 9;
                userArray = [];
                soundLoss = new sound("./assets/sounds/tosLoss.mp3");
            soundLoss.play();
            }  else if (userGuess !== psyGuess) {
                guesses--;
            }  else if (guesses === 0) {
                losses++;
                guesses = 9;
                userArray = [];
                soundLoss = new sound("./assets/sounds/tosLoss.mp3");
            soundLoss.play();
            }

        }  else if (userGuess === psyGuess) {
            wins++;
            guesses = 9;
            userArray = [];
            soundWin = new sound("./assets/sounds/tosWin.mp3");
            soundWin.play();
        }  else if ((userGuess !== psyGuess)  && (guesses === 0)) {
            losses++;
            guesses = 9;
            userArray = [];
            soundLoss = new sound("./assets/sounds/tosLoss.mp3");
            soundLoss.play();
        }  else if (userGuess !== psyGuess) {
            guesses--; 
        }  else if (guesses === 0) {
            losses++;
            guesses = 9;
            userArray = [];
            soundLoss = new sound("./assets/sounds/tosLoss.mp3");
            soundLoss.play();
        }
     
        var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesses +"</p>" +
        "<p>Guesses So Far: " + userArray + "</p>";

        document.getElementById("ScoreKeeper").innerHTML = html;
        } else {
        soundRetry = new sound("./assets/sounds/tosRetry.mp3");
        soundRetry.play();
        }
    }
    //console.log to test output
    // console.log(psyGuess, userGuess, wins, losses, guesses, userArray);
};