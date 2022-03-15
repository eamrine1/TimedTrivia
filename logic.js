//create a timed quiz
//display the first question
//call upon an array for questions and answers
//series of prompts
//keep score
//when question is incorrect or time runs out the game ends
//score is displayed
//score is kept in local storage to show top 5 scorers
function finalScore()

var highscore = localStorage.setItem(finalScore);

var highscore = localStorage.getItem('highscore');
if (highscore === null){
    highscore = 0;
}

//filter index to 4 in order to get top 5 
//getResultById()

//