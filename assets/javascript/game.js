$(document).ready(function() {

    var secondsLeft;
    var intervalId;
    var wrongAnswers = 0;
    var rightAnswers = 0;

//============================ RIGHT/WRONG FUNCTION ===============================

function rightGuess() {
    //increment the number of correct answers
    rightAnswers++;

    //stop the timer
    clearInterval(intervalId);
}

function wrongGuess() {
    //incrememnt the number of wrong answers
    wrongAnswers++;

    //stop the timer
    clearInterval(intervalId);
}
    
//============================ COUNT SECONDS ===============================

    //count second left for Q1
    function countSeconds1() {

        //count the second down
        secondsLeft--;

        console.log("hit");

        //add the second left counter to the screen
        $("#seconds-left").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 1
            $("#question-one").css("display", "none");

            //show question 1 losing screen
            $("#question-one-lose").css("display", "block");

            //after 10 seconds, show question 2
            var showNextQ = setTimeout(nextQuestion2, 1000 * 5);
        }
    }

    //count second left for Q2
    function countSeconds2() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-two").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 2
            $("#question-two").css("display", "none");

            //show question 2 losing screen
            $("#question-two-lose").css("display", "block");

            //after 10 seconds, show question 3
            var showNextQ = setTimeout(nextQuestion3, 1000 * 5);
        }
    }

    //count second left for Q3
    function countSeconds3() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-three").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 3
            $("#question-three").css("display", "none");

            //show question 3 losing screen
            $("#question-three-lose").css("display", "block");

            //after 10 seconds, show question 4
            var showNextQ = setTimeout(nextQuestion4, 1000 * 5);
        }
    }

    //count second left for Q4
    function countSeconds4() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-four").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 4
            $("#question-four").css("display", "none");

            //show question 4 losing screen
            $("#question-four-lose").css("display", "block");

            //after 10 seconds, show question 5
            var showNextQ = setTimeout(nextQuestion5, 1000 * 5);
        }
    }

    //count second left for Q5
    function countSeconds5() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-five").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 5
            $("#question-five").css("display", "none");

            //show question 5 losing screen
            $("#question-five-lose").css("display", "block");

            //after 10 seconds, show question 6
            var showNextQ = setTimeout(nextQuestion6, 1000 * 5);
        }
    }

    function countSeconds6() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-six").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 6
            $("#question-six").css("display", "none");

            //show question 6 losing screen
            $("#question-six-lose").css("display", "block");

            //after 10 seconds, show question 7
            var showNextQ = setTimeout(nextQuestion7, 1000 * 5);
        }
    }

    function countSeconds7() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-seven").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 7
            $("#question-seven").css("display", "none");

            //show question 7 losing screen
            $("#question-seven-lose").css("display", "block");

            //after 10 seconds, show question 8
            var showNextQ = setTimeout(nextQuestion8, 1000 * 5);
        }
    }

    function countSeconds8() {

        //count the seconds down
        secondsLeft--;

        //add the second left counter to the screen
        $("#seconds-left-eight").html("<h2>Time Remaining: " + secondsLeft + "</h2>");
    
        //if the seconds reach 0, stop counting and player loses that question
        if (secondsLeft <= 0) {
            wrongGuess();

            //hide question 8
            $("#question-eight").css("display", "none");

            //show question 8 losing screen
            $("#question-eight-lose").css("display", "block");

            //after 10 seconds, show question 2
            var showNextQ = setTimeout(endingScreen, 1000 * 5);
        }
    }

//============================ SWITCH FROM WIN/LOSE TO NEXT Q ================

    //timeOut function to switch from Q1 winning or loosing screen to Q2
    function nextQuestion2() {

        //hide question one losing screen
        $("#question-one-lose").css("display", "none");

        //hide question one winning screen
        $("#question-one-win").css("display", "none");
        
        //show question
        $("#question-two").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds2, 1000);
        
    }

    //timeOut function to switch from Q2 winning or loosing screen to Q3
    function nextQuestion3() {

        //hide question two losing screen
        $("#question-two-lose").css("display", "none");

        //hide question two winning screen
        $("#question-two-win").css("display", "none");
        
        //show question
        $("#question-three").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds3, 1000);
        
    }

    //timeOut function to switch from Q3 winning or loosing screen to Q4
    function nextQuestion4() {

        //hide question two losing screen
        $("#question-three-lose").css("display", "none");

        //hide question one winning screen
        $("#question-three-win").css("display", "none");
        
        //show question
        $("#question-four").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds4, 1000);
        
    }

    //timeOut function to switch from Q4 winning or loosing screen to Q5
    function nextQuestion5() {

        //hide question 4 losing screen
        $("#question-four-lose").css("display", "none");

        //hide question 4 winning screen
        $("#question-four-win").css("display", "none");
        
        //show question 5
        $("#question-five").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds5, 1000);
        
    }

    function nextQuestion6() {

        //hide question 5 losing screen
        $("#question-five-lose").css("display", "none");

        //hide question 5 winning screen
        $("#question-five-win").css("display", "none");
        
        //show question 6
        $("#question-six").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds6, 1000);
        
    }

    function nextQuestion7() {

        //hide question 6 losing screen
        $("#question-six-lose").css("display", "none");

        //hide question 6 winning screen
        $("#question-six-win").css("display", "none");
        
        //show question 7
        $("#question-seven").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds7, 1000);
        
    }

    function nextQuestion8() {

        //hide question 7 losing screen
        $("#question-seven-lose").css("display", "none");

        //hide question 7 winning screen
        $("#question-seven-win").css("display", "none");
        
        //show question 8
        $("#question-eight").css("display", "block");

        //reset seconds left to 10
        secondsLeft = 10;

        //restart counting
        intervalId = setInterval(countSeconds8, 1000);
        
    }

//============================ ENDING SCREEN FUNCTION =============================

    function endingScreen() {
        //hide question 8 losing screen
        $("#question-eight-lose").css("display", "none");

        //hide question 8 winning screen
        $("#question-eight-win").css("display", "none");
        
        //show ending screen
        $("#end-screen").css("display", "block");

        var winsDiv = $("<h2 class='m-auto'>");

        winsDiv.text("Correct: " + rightAnswers);
        
        $("#final-wins").append(winsDiv);

        var losesDiv = $("<h2 class='m-auto'>");

        losesDiv.text("Incorrect: " + wrongAnswers);
        
        $("#final-loses").append(losesDiv);
    }



    //============================ CLICK EVENTS ===============================

    //whenever you click any answer1 button
    $(document).on("click", ".answers1", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the first answer is correct
        if (winningId === "right-answer-one") {
            
            rightGuess();

            //hide question 1
            $("#question-one").css("display", "none");

            //show question 1 winning screen
            $("#question-one-win").css("display", "block");

            //after 10 seconds, show question 2
            var showNextQ = setTimeout(nextQuestion2, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 1
            $("#question-one").css("display", "none");

            //show question 1 losing screen
            $("#question-one-lose").css("display", "block");

            //after 10 seconds, show question 2
            var showNextQ = setTimeout(nextQuestion2, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer2 button
    $(document).on("click", ".answers2", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the first answer is correct
        if (winningId === "right-answer-two") {
            
            rightGuess();

            //hide question 1
            $("#question-two").css("display", "none");

            //show question 1 winning screen
            $("#question-two-win").css("display", "block");

            //after 10 seconds, show question 3
            var showNextQ = setTimeout(nextQuestion3, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 1
            $("#question-two").css("display", "none");

            //show question 1 losing screen
            $("#question-two-lose").css("display", "block");

            //after 10 seconds, show question 2
            var showNextQ = setTimeout(nextQuestion3, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer3 button
    $(document).on("click", ".answers3", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the first answer is correct
        if (winningId === "right-answer-three") {
            
            rightGuess();

            //hide question 3
            $("#question-three").css("display", "none");

            //show question 3 winning screen
            $("#question-three-win").css("display", "block");

            //after 10 seconds, show question 4
            var showNextQ = setTimeout(nextQuestion4, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 3
            $("#question-three").css("display", "none");

            //show question 3 losing screen
            $("#question-three-lose").css("display", "block");

            //after 10 seconds, show question 4
            var showNextQ = setTimeout(nextQuestion4, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer4 button
    $(document).on("click", ".answers4", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the fourth answer is correct
        if (winningId === "right-answer-four") {
            
            rightGuess();

            //hide question 4
            $("#question-four").css("display", "none");

            //show question 4 winning screen
            $("#question-four-win").css("display", "block");

            //after 10 seconds, show question 5
            var showNextQ = setTimeout(nextQuestion5, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 4
            $("#question-four").css("display", "none");

            //show question 4 losing screen
            $("#question-four-lose").css("display", "block");

            //after 10 seconds, show question 5
            var showNextQ = setTimeout(nextQuestion5, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer5 button
    $(document).on("click", ".answers5", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the 5th answer is correct
        if (winningId === "right-answer-five") {
            
            rightGuess();

            //hide question 5
            $("#question-five").css("display", "none");

            //show question 5 winning screen
            $("#question-five-win").css("display", "block");

            //after 10 seconds, show question 6
            var showNextQ = setTimeout(nextQuestion6, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 5
            $("#question-five").css("display", "none");

            //show question 5 losing screen
            $("#question-five-lose").css("display", "block");

            //after 10 seconds, show question 6
            var showNextQ = setTimeout(nextQuestion6, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer6 button
    $(document).on("click", ".answers6", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the 5th answer is correct
        if (winningId === "right-answer-six") {
            
            rightGuess();

            //hide question 6
            $("#question-six").css("display", "none");

            //show question 6 winning screen
            $("#question-six-win").css("display", "block");

            //after 10 seconds, show question 7
            var showNextQ = setTimeout(nextQuestion7, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 6
            $("#question-six").css("display", "none");

            //show question 6 losing screen
            $("#question-six-lose").css("display", "block");

            //after 10 seconds, show question 7
            var showNextQ = setTimeout(nextQuestion7, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer7 button
    $(document).on("click", ".answers7", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the 5th answer is correct
        if (winningId === "right-answer-seven") {
            
            rightGuess();

            //hide question 7
            $("#question-seven").css("display", "none");

            //show question 7 winning screen
            $("#question-seven-win").css("display", "block");

            //after 10 seconds, show question 8
            var showNextQ = setTimeout(nextQuestion8, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 7
            $("#question-seven").css("display", "none");

            //show question 7 losing screen
            $("#question-seven-lose").css("display", "block");

            //after 10 seconds, show question 8
            var showNextQ = setTimeout(nextQuestion8, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //whenever you click any answer8 button
    $(document).on("click", ".answers8", function() {

        //store the id of that button in a var
        var winningId = $(this).attr("id");

        //if the 5th answer is correct
        if (winningId === "right-answer-eight") {
            
            rightGuess();

            //hide question 8
            $("#question-eight").css("display", "none");

            //show question 8 winning screen
            $("#question-eight-win").css("display", "block");

            //after 10 seconds, show question 8
            var showNextQ = setTimeout(endingScreen, 1000 * 3);

            console.log(winningId);
        }
        else {
            console.log("lose");

            wrongGuess();

            //hide question 8
            $("#question-eight").css("display", "none");

            //show question 8 losing screen
            $("#question-eight-lose").css("display", "block");

            //after 10 seconds, show question 8
            var showNextQ = setTimeout(endingScreen, 1000 * 5);
            
        }

        
        console.log("right " + rightAnswers);
        console.log("wrong " +wrongAnswers);
    })

    //when you click the start button
    $("#start-btn").on("click", function() {

        secondsLeft = 10;

        //hide the start area
        $("#start-btn-div").css("display", "none");

        //show the first question
        $("#question-one").css("display", "block");


        //run the countSeconds function every 1 second.
        intervalId = setInterval(countSeconds1, 1000);
        
        })

    //when you click the reset button
    $(document).on("click", "#reset-button", function() {
        $("#end-screen").css("display", "none");

        $("#start-btn-div").css("display", "flex");

        rightAnswers = 0;
        wrongAnswers = 0;
    })

        



    })


    //create function for when time runs out
    //should iterate wrongAnswers, move to an "out of time screen" for a few secs
    //then go to next question

    //use this URL for first winning guess gif and use array[1]: http://api.giphy.com/v1/gifs/search?q=flying+harry+potter&api_key=mb4yygjFzZGQsA8hC0Y339VyMeSucWD0&limit=5
    //giphyAPI
