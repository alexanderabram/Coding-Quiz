// before clicking the button secondsLeft is displaying 0?
// all this info is being printed to #counterDisplay

//grab what's inside of the box
var userName = document.querySelector("#userName");
var endMsg = document.querySelector("#endMsg");
var yourScore = document.querySelector("#yourScore");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var submitBtn = document.querySelector("#submitNameScore");
var secondsLeft = 91;

function startTimer () {

  var interval = setInterval(function() {
    secondsLeft--;
    document.querySelector("#counterDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);
    
    //if we run out of time
    if (secondsLeft === 0) {
      clearInterval(interval);
      //   BOX TWO set to display: none
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      //   BOX THREE displays
      document.querySelector("#boxThree").setAttribute("style", "display: block");
    
    //or if we run out of questions, putting it at 5 so
    //it doesn't cut off our final quesiton
    } else if (currentIndex === 5) {
      //print seconds left to localStorage as "finalTime"
      //end timer
      clearInterval(interval); 
      //   BOX TWO set to display: none
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      //   BOX FOUR displays
      document.querySelector("#boxFour").setAttribute("style", "display: block");
      
      //grab score value and multiply it by seconds left
      score = ((score)*(secondsLeft));
      
      if (isNaN(score)) {
        yourScore.innerHTML = "Your score is: 0";
      } else {
        endMsg.innerHTML = "You made it to the end!";
        yourScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000) 
}



// populates the leaderboard and adds to the high scores
submitBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  
  console.log("on submitBtn click print out score: " + score); 

  //take in initals box value
  var initials = userName.value;
  console.log("initials" + initials);

  var finalScore = {
    initials, 
    score
  };
  console.log("finalScore" + finalScore);
  
  // store score and initials client side in 'localStorage'
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(initials, score);
});