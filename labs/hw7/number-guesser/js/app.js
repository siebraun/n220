//generates a random number from 1-10
let answer = Math.floor(Math.random()*10)+1;

//creates function on click of button
function checkGuess(){
    //retrieve guess input and assign it to a variable
    let guess = Number(document.getElementById("guessInput").value);

    //if guess is correct, show "that's correct!"
    if(guess==answer){
        document.getElementById("hint").innerHTML="that's correct!"
    }

    //else if guess is bigger than answer, show "your guess is too high"
    else if(guess>answer){
        document.getElementById("hint").innerHTML=" your guess is too high!"
    }

    //else show "your guess is too low"
    else{
        document.getElementById("hint").innerHTML="your guess is too low!"
    }

    //clear guess input field after submit
    document.getElementById('guessInput').value=null;


}