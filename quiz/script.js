//these is the questions
const questions = [
    {
        question: "When was the biggest genz protest happen in nepal?",
        answers:[
            {text: "2025-09-08", correct:true},
            {text: "2025-10-08", correct:false},
            {text: "2025-11-08", correct:false},
            {text: "2025-08-08", correct:false},
        ]
    },
    {
        question: "Who was the  culprit in that genz protest?",
        answers:[
            {text: "Shere chor", correct:false},
            {text: "Kp chor", correct:false},
            {text: "Prachande chor", correct:false},
            {text: "all of them", correct:true},
        ]
    },
    {
        question: "Who mainly participated in the recent protest in nepal?",
        answers:[
            {text: "senior", correct:false},
            {text: "junior", correct:false},
            {text: "none", correct:false},
            {text: "genz", correct:true},
        ]
    },
    {
        question: "What were the main reasons behind the genz protest?",
        answers:[
            {text: "corruption in politics", correct:true},
            {text: "lack of employment oppurtunities", correct:false},
            {text: "restrictions of freedom of expression", correct:false},
            {text: "all of them", correct:false},
        ]
    },
    {
        question: "Which tool is widely used by genz to organize the protest?",
        answers:[
            {text: "social media platforms", correct:false},
            {text: "online compaign and hashtags", correct:false},
            {text: "a and b", correct:true},
            {text: "traditional radio", correct:false},
        ]
    },
    
    {
        question: "What value were the genz protestors demanding?",
        answers:[
            {text: "transparency", correct:false},
            {text: "accountability", correct:false},
            {text: "good governance", correct:false},
            {text: "all of above", correct:true},
        ]
    },
    {
        question: "Where did the main protest takes place?",
        answers:[
            {text: "kathmandu", correct:true},
            {text: "pokhara", correct:false},
            {text: "butwal", correct:false},
            {text: "Bhaktapur", correct:false},
        ]
    },
    {
        question: "What does the genz protest reflects about the Nepali youth?",
        answers:[
            {text: "political awarness", correct:false},
            {text: "frustation with existing systems", correct:false},
            {text: "desire for change", correct:false},
            {text: "all", correct:true},
        ]
    },
    {
        question: "What outcomes were expect by the protestors?",
        answers:[
            {text: "policy reform", correct:false},
            {text: "better leadership", correct:false},
            {text: "systematic change", correct:false},
            {text: "all", correct:true},
        ]
    }

]

// main javascript is here
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;
let score = 0;

function startQuiz()
{
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//showing question function- rendering the question
function showQuestion()
{
    resetState(); //reset the previous answer buttons
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-buttons");
        answerButton.appendChild(button);

        //save the true/false status inside button
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });


}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // After clicking, show the correct answer and disable all buttons
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Call the function to begin
startQuiz();

