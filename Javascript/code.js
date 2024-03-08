var currentScore = sessionStorage.getItem("currentScore");
let maxScore = 8;

let previousQuestionPage;

//update and save score
function scorePlus1(){
    currentScore = parseInt(currentScore) + 1;
    sessionStorage.setItem("currentScore", currentScore);
}

//start page - reset stats
if (document.getElementById("startPage"))
{
    sessionStorage.setItem("currentScore", 0);
    sessionStorage.setItem("previousQuestion", 0);
}

//for the correctAnswer/wrongAnswer page
if (document.getElementById("nextButton"))
{
    previousQuestionPage = parseInt(sessionStorage.getItem("previousQuestion"));

    console.log("score: " + currentScore);
    console.log("prevPage: " + previousQuestionPage);

    document.getElementById("nextButton").onclick = function(){
        if (previousQuestionPage == 1)
        {
            location.href = "../Pages/question2.html";
        }
        else if (previousQuestionPage == 2)
        {
            location.href = "../Pages/question3.html";
        }
        else if (previousQuestionPage == 3)
        {
            location.href = "../Pages/question4.html";
        }
        else if (previousQuestionPage == 4)
        {
            location.href = "../Pages/question5.html";
        }
        else if (previousQuestionPage == 5)
        {
            location.href = "../Pages/question6.html";
        }
        else if (previousQuestionPage == 6)
        {
            location.href = "../Pages/question7.html";
        }
        else if (previousQuestionPage == 7)
        {
            location.href = "../Pages/question8.html";
        }
        else if (previousQuestionPage == 8)
        {
            location.href = "../Pages/finalScore.html";
        }
    }
}

//question 1
if (document.getElementById("q1AnswerButton"))
{
    document.getElementById("q1AnswerButton").onclick = function(){
        let text1 = document.getElementById("q1Answer").value.toUpperCase();

        if (text1 == "8" || text1 == "EIGHT")
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 1);
    }
}

//question 2
if (document.getElementById("q2AnswerButton"))
{
    document.getElementById("q2AnswerButton").onclick = function(){
        let radio = document.querySelector('input[name="question2Radio"]:checked').value;

        if (radio == "correct")
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 2);
    }
}

//question 3
if (document.getElementById("q3AnswerButton"))
{
    document.getElementById("q3AnswerButton").onclick = function(){
        let checkBox = document.querySelector('input[name="question2CheckBox"]:checked').value;

        if (checkBox == "correct" && document.querySelectorAll('input[name="question2CheckBox"]:checked').length == 1)
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 3);
    }
}

//question 4
if (document.getElementById("q4Dropdown"))
{
    document.getElementById("q4AnswerButton").onclick = function(){
        let dropdown = selectElement = document.querySelector("#q4Dropdown").value;

        if (dropdown == "correct")
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 4);
    }
}

//question 5
if (document.getElementById("q5AnswerButton"))
{
    document.getElementById("q5AnswerButton").onclick = function(){
        let text2 = document.getElementById("q5Answer").value.toUpperCase();

        if (text2 == "MOUNT EVEREST" || text2 == "EVEREST" || text2 == "MOUNTEVEREST")
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 5);
    }
}

//question 6
if (document.getElementById("q6AnswerButton"))
{
    document.getElementById("q6AnswerButton").onclick = function(){
        let number1 = parseInt(document.getElementById("q6Number").value);

        if (number1 == 48)
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 6);
    }
}

//question 7
if (document.getElementById("q7AnswerButton"))
{
    document.getElementById("q7AnswerButton").onclick = function(){
        let radio = document.querySelector('input[name="question7Radio"]:checked').value;

        if (radio == "correct")
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 7);
    }
}

//question 8
if (document.getElementById("q8AnswerButton"))
{
    document.getElementById("q8AnswerButton").onclick = function(){
        let checkBox = document.querySelector('input[name="question8CheckBox"]:checked').value;

        if (checkBox == "correct" && document.querySelectorAll('input[name="question8CheckBox"]:checked').length == 1)
        {
            location.href = "../Pages/answerCorrect.html";
            scorePlus1();
        }
        else
        {
            location.href = "../Pages/answerWrong.html";
        }

        sessionStorage.setItem("previousQuestion", 8);
    }
}

//final score page
if (document.getElementById("finalScoreText"))
{
    document.getElementById("finalScoreText").innerHTML = currentScore + " / " + maxScore;

    if (currentScore <= 3)
    {
        document.getElementById("finalScoreImage").src = "../Images/finalScoreImage1.png";
    }
    else if (currentScore > 3 && currentScore <= 6)
    {
        document.getElementById("finalScoreImage").src = "../Images/finalScoreImage2.png";
    }
    else if (currentScore > 6)
    {
        document.getElementById("finalScoreImage").src = "../Images/finalScoreImage3.png";
    }

    document.getElementById("playAgainButton").onclick = function(){
        location.href = "../start.html";
    }
}