const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const questionELm = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerElms = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submitBtn");

let currentQuizIndex = 0;
let currentScore = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuiz = quizData[currentQuizIndex];
  questionELm.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}

function selectAnswer() {
  let answer = undefined;
  answerElms.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerElms.forEach((element) => {
    element.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  let answer = selectAnswer();

  if (answer) {
    if (answer === quizData[currentQuizIndex].correct) currentScore++;
    currentQuizIndex++;

    if (currentQuizIndex < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML= (`<div>
      <span> Your score ${currentScore} </span>
      <button onclick="location.reload()">refresh </button>
      </div>`);
    }
  }
});
