/** @format */
const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",
    correct: "b",
  },
  {
    question: "What is the capital of USA?",
    a: "Mineapolis",
    b: "Peru",
    c: "Washignton dc",
    d: "new york",
    correct: "c",
  },
  {
    question: "What is the best laptop product company?",
    a: "Apple",
    b: "Lenovo",
    c: "HP",
    d: "Dell",
    correct: "d",
  },
  {
    question: "What is the best mobile product company?",
    a: "Apple",
    b: "Samsung",
    c: "Nokia",
    d: "LG",
    correct: "a",
  },
  {
    question: "What does HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "Hyper Text Multipurpose Language",
    c: "Hyper Text Monetary Language",
    d: "Hyper Text Markin Language",
    correct: "a",
  },
  {
    question: "what year was javasript launched",
    a: "1997",
    b: "1996",
    c: "1995",
    d: "1998",
    correct: "c",
  },
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");
const answersEl = document.querySelectorAll(".answer");
const quizCont = document.getElementById("quizCont");
const resultBox = document.getElementById("resultBox");
const startBtn = document.getElementById("startBtn");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");

restartBtn.onclick = () => {
  window.location.reload();
};

// ? starting quiz
startBtn.onclick = () => {
  quizCont.classList.add("active");
  startBtn.classList.add("hidden");
};

let score = 0;
let currentQuiz = 0;

// ? load quiz
function LoadQuiz() {
  DeselectAnswer();
  question.innerHTML = quizData[currentQuiz].question;
  a_text.innerHTML = quizData[currentQuiz].a;
  b_text.innerHTML = quizData[currentQuiz].b;
  c_text.innerHTML = quizData[currentQuiz].c;
  d_text.innerHTML = quizData[currentQuiz].d;
  console.log(currentQuiz);
}

LoadQuiz();

// ? get the answer the user chooses
function getAnswer() {
  let userAnswer = undefined;
  answersEl.forEach((answer) => {
    if (answer.checked) {
      userAnswer = answer.id;
    }
  });

  return userAnswer;
}

// ? deselect answer
function DeselectAnswer() {
  answersEl.forEach((answer) => {
    answer.checked = false;
  });
}

function Submit() {
  const answer = getAnswer();
  // checking if the use has not selected an option
  if (!answer) {
    return alert("Please select an option");
  }

  // checking if the users answer is correct
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      LoadQuiz();
    } else {
      quizCont.classList.remove("active");
      resultBox.classList.add("active");
      resultText.innerHTML = `You scored ${score} out of ${quizData.length} questions`;
    }
  }
}

submitBtn.addEventListener("click", Submit);
