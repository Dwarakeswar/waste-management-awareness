const quizData = [

    {
        question: "Plastic disappears naturally within a few years.",
        correct: "myth",
        explanation: "Correct! Plastic can take hundreds of years to decompose."
    },

    {
        question: "Wet waste can be converted into compost.",
        correct: "fact",
        explanation: "Correct! Organic waste can be composted naturally."
    },

    {
        question: "Throwing garbage into rivers damages ecosystems.",
        correct: "fact",
        explanation: "Correct! Water pollution harms aquatic life."
    },

    {
        question: "Burning plastic waste is environmentally safe.",
        correct: "myth",
        explanation: "Correct! Burning plastic releases toxic gases."
    },

    {
        question: "Segregating waste improves recycling systems.",
        correct: "fact",
        explanation: "Correct! Segregation helps recycling efficiency."
    },

    {
        question: "Batteries should be thrown with normal waste.",
        correct: "myth",
        explanation: "Correct! Batteries contain hazardous chemicals."
    },

    {
        question: "Paper can usually be recycled.",
        correct: "fact",
        explanation: "Correct! Recycling paper helps save trees."
    },

    {
        question: "Food waste belongs in wet waste bins.",
        correct: "fact",
        explanation: "Correct! Organic food waste is biodegradable."
    },

    {
        question: "Littering has no major environmental impact.",
        correct: "myth",
        explanation: "Correct! Littering creates serious pollution."
    },

    {
        question: "Reducing plastic usage helps the environment.",
        correct: "fact",
        explanation: "Correct! Less plastic means less pollution."
    }

];



let currentQuestion = 0;
let score = 0;



function startQuiz(){

    document.getElementById("startScreen").classList.add("hidden");

    document.getElementById("quizContainer").classList.remove("hidden");

    loadQuestion();

}



function loadQuestion(){

    const questionData = quizData[currentQuestion];

    document.getElementById("questionText").innerText =
        questionData.question;

    document.getElementById("answerText").innerText = "";

    document.getElementById("nextBtn").classList.add("hidden");

}



function checkAnswer(selected){

    const questionData = quizData[currentQuestion];

    const answerText = document.getElementById("answerText");

    if(selected === questionData.correct){

        score++;

        answerText.innerHTML =
            "✅ " + questionData.explanation;

        answerText.style.color = "#7ee787";

    }

    else{

        answerText.innerHTML =
            "❌ Wrong Answer. " + questionData.explanation;

        answerText.style.color = "#ff6b6b";

    }

    document.getElementById("nextBtn").classList.remove("hidden");

}



function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    }

    else{

        showResult();

    }

}



function showResult(){

    document.getElementById("quizContainer").classList.add("hidden");

    document.getElementById("resultScreen").classList.remove("hidden");

    document.getElementById("scoreText").innerText =
        "Your Score: " + score + " / " + quizData.length;

}