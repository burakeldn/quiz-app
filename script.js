const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyperlinks and Text Markup Language",
        b: "Hyper Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
    {
        question: "Who is making the Web standards?",
        a: "Google",
        b: "Microsoft",
        c: "Mozilla",
        d: "The World Wide Web Consortium",
        correct: "d",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<heading>",
        b: "<h1>",
        c: "<head>",
        d: "<h6>",
        correct: "b",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<lb>",
        c: "<br>",
        d: "<h1>",
        correct: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Colorful Style Sheets",
        c: "Cascading Style Sheets",
        d: "Creative Style Sheets",
        correct: "c",
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        a: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        b: '<style src="mystyle.css">',
        c: '<stylesheet>mystyle.css</stylesheet>',
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <head> section",
        b: "In the <body> section",
        c: "At the end of the document",
        d: "<stylesheet>mystyle.css</stylesheet>",
        correct: "a",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<scripting>",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <head> section",
        b: "The <body> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "none of the above",
        correct: "c",
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World");',
        b: 'alert("Hello World");',
        c: 'alertBox("Hello World");',
        d: 'msgBox("Hello World");',
        correct: "b",
    },
];

const quiz =document.getElementById("quiz");
const answerEls =document.querySelectorAll(".answer");
const questionEl =document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn =document.getElementById("submit");
const backBtn =document.getElementById("back");

let currentQuiz =0;
let score =0;
loadQuestion();

function loadQuestion(){
    deselectAnswers();

    const currentQuizData =quizData[currentQuiz];

    questionEl.innerText =currentQuizData.question;
    a_text.innerText =currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d;
}

function getSelected(){
    let answer =undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked =false;
    });
}

submitBtn.addEventListener("click", () =>{
    const answer =getSelected();

    if(answer){
        if(answer ===quizData[currentQuiz].correct){
            score++;
        }
    }

        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuestion();
        }else{
            quiz.innerHTML =`<h2> You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
});
backBtn.addEventListener("click", () =>{
    if( currentQuiz > 0){
        currentQuiz--;
        if(score > 0){
            score--;
        }
        loadQuestion();
    }
});
