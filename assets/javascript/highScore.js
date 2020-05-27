//grab what highscores are in localStorage or just spit out ""

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScorePrint = document.querySelector("#highScorePrint");
var clearHighScore = document.querySelector("#clear");


//populate high scores on highScore.html
window.addEventListener("load", function(){printHighScore()});

function printHighScore() {
    highscores = scoresSorted(highscores, 'score');
    // var sorted = highscores.sort(function(a, b) {return b.score-a.score});

    for (var i = 0; i < highscores.length; i++) {
      console.log(highscores[i].score);
      var home = document.createElement("li"); //creates new p
      var words = document.createTextNode(highscores[i].initials + ": " + highscores[i].score)  ; //content of p
      home.appendChild(words);
      highScorePrint.appendChild(home);
    }
}

//sort the scores
function scoresSorted(array, key) {
  return array.sort(function(a,b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}

// //button named clear high score defined
// //function to clear high scores or 'localStorage' items
clearHighScore.addEventListener("click", function() {
    localStorage.removeItem("highscores");
    window.location.reload();
});