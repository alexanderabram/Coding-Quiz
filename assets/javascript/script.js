var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");
var currentIndex = 0;

var score = 0;

startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index at startQuiz click" + currentIndex);
    document.querySelector("#boxOne").style.display = "none"; 
    document.querySelector("#boxTwo").style.display = "block";
    showQs();
});

function showQs() {
    var question = quizQs[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#chA").innerHTML = question.choices[0];
    document.querySelector("#chB").innerHTML = question.choices[1];
    document.querySelector("#chC").innerHTML = question.choices[2];
    document.querySelector("#chD").innerHTML = question.choices[3];
}

for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        //when they click any quizBtn grab value out of that option  
        
        //if they got it right
        if(event.currentTarget.innerText === quizQs[currentIndex].answer){
            score++;
            console.log(score);
            //display "correct!" and continue 
            document.querySelector("#checkAns").innerHTML = "correct";
        } else {
            //if they got it wrong display "wrong!"
            // deduct 5 seconds from the clock and continue 
            document.querySelector("#checkAns").innerHTML = "wrong";
            secondsLeft = secondsLeft - 15;
        }
        console.log("Current Index before ++" + currentIndex);
        //go to the next question
        currentIndex++;
        
        if (currentIndex < 5) {
        //go back to the questions
        showQs();
        }
    });
}
