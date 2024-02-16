const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Language",
      b: "Hyperlink and Text Markup Language",
      c: "High-level Text Markup Language",
      d: "Home Tool Markup Language",
      correct: "a",
    },
    {
      question: "Which of the following is not a valid CSS property?",
      a: "margin",
      b: "padding",
      c: "spacing",
      d: "border",
      correct: "c",
    },
    {
      question: "What is the purpose of JavaScript?",
      a: "To style web pages",
      b: "To create dynamic content",
      c: "To define the structure of a webpage",
      d: "To manage database operations",
      correct: "b",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      a: "//",
      b: "/*",
      c: "#",
      d: "--",
      correct: "a",
    },
    {
      question: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
      a: "To change the style of an element",
      b: "To retrieve the value of an input field",
      c: "To select an HTML element by its id",
      d: "To create a new HTML element",
      correct: "c",
    },
    {
      question: "What does the acronym AJAX stand for?",
      a: "Asynchronous JavaScript and XML",
      b: "All JavaScript and XML",
      c: "Advanced JavaScript and XHTML",
      d: "Asynchronous Java and XML",
      correct: "a",
    },
    {
      question: "Which of the following is a front-end framework/library for JavaScript?",
      a: "Express.js",
      b: "Django",
      c: "React.js",
      d: "Flask",
      correct: "c",
    },
    {
      question: "What is the purpose of the 'localStorage' object in JavaScript?",
      a: "To store data permanently on the server",
      b: "To store data temporarily on the client",
      c: "To manage session data",
      d: "To handle server-side storage",
      correct: "b",
    },
    {
      question: "What does the 'npm' command do?",
      a: "Installs packages globally",
      b: "Installs packages locally",
      c: "Uninstalls packages",
      d: "Lists installed packages",
      correct: "b",
    },
    {
      question: "Which of the following is a valid way to declare a function in JavaScript?",
      a: "function = myFunction() {}",
      b: "var myFunction = function() {}",
      c: "def myFunction() {}",
      d: "myFunction: function() {}",
      correct: "b",
    },
    {
      question: "What does the 'git' command 'git clone' do?",
      a: "Creates a new Git repository",
      b: "Commits changes to the repository",
      c: "Clones a repository into a new directory",
      d: "Checks out a branch",
      correct: "c",
    },
    {
      question: "Which of the following is a valid way to include an external JavaScript file in HTML?",
      a: "<script src='script.js'></script>",
      b: "<js src='script.js'></js>",
      c: "<link rel='stylesheet' href='script.js'>",
      d: "<include src='script.js'></include>",
      correct: "a",
    },
    {
      question: "What does the CSS property 'display: none;' do?",
      a: "Hides an element",
      b: "Shows an element",
      c: "Makes an element semi-transparent",
      d: "Changes the font of an element",
      correct: "a",
    },
    {
      question: "Which of the following is used to iterate through an array in JavaScript?",
      a: "for (var i = 0; i < array.length; i++)",
      b: "foreach (var item in array)",
      c: "while (array.hasNext())",
      d: "iterate array { }",
      correct: "a",
    },
    {
      question: "What is the purpose of the 'box-sizing' property in CSS?",
      a: "Controls the visibility of an element",
      b: "Specifies the size of an element's content box",
      c: "Sets the background color of an element",
      d: "Defines the position of an element",
      correct: "b",
    },
  ];
  

const timer = document.getElementById("timer")
const quiz = document.getElementById("quiz")
const startBtn = document.getElementById("start")
const welcomeCard = document.querySelector(".welcome-card")
const quizCard = document.querySelector(".quiz-card")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
const reloadBtn = document.getElementById("reload")
const correctImage = document.getElementById("correct-image")
const incorrectImage = document.getElementById("incorrect-image")
let seconds = 60;
let interval;
const audio =  new Audio('487724__matrixxx__ticking-timer-10-sec.wav')
//audio.play();

let currentQuiz = 0;
let score = 0


startBtn.addEventListener('click', () => {
    welcomeCard.classList.add("hide");
    quizCard.classList.remove("hide");
    loadQuiz();
    startTimer(seconds);
});
   

function loadQuiz(){
    deselectAnswers()


    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
            correctImage.classList.remove('hide');
            setTimeout(() => {correctImage.classList.add('animate-image')}, 125);
        }
        else {
            incorrectImage.classList.remove('hide');
            setTimeout(() => {incorrectImage.classList.add('animate-image')}, 125);
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            setTimeout(() => { 
                correctImage.classList.remove('animate-image');
                correctImage.classList.add('hide');
                incorrectImage.classList.remove('animate-image');
                incorrectImage.classList.add('hide');       
                loadQuiz();
            }, 1125);
        } else {
            stopTimer();
            results();
        }
    }
})

function startTimer(seconds) {
    timer.classList.remove('hide');
    interval = setInterval(() => {
        seconds = seconds - 1;
        timer.innerText = `0:${seconds < 10 ? '0' + seconds : seconds}`;

        if (seconds <= 10) {
            timer.style.color = 'red';
            timer.style.fontWeight = 'bold';
            timer.classList.add('pulsate');
            audio.play();
        }

        if (seconds === 0) {
            clearInterval(interval);
            timer.classList.remove('pulsate');
            setTimeout(() => {timesUp()}, 250);
            results();
        }
    }, 1000);
};

function timesUp() {
    window.alert("Time's up, buddy");
}

function stopTimer() {
    clearInterval(interval);
    audio.pause();
    timer.classList.add('hide');
}

function results() {
    quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
    <button id="reload" onclick="location.reload()">Finish</button>
    `;
}

function addQuestion(theQuestion, optionA, optionB, optionC, optionD, correctOption) {
    quizData.push({
        question: theQuestion,
        a: optionA,
        b: optionB,
        c: optionC,
        d: optionD,
        correct: correctOption
    });
}