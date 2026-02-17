const quizQuestions = [
  {
    question: "Why do programmers prefer dark mode?",
    options: [
      "A. Because light attracts bugs",
      "B. To save electricity",
      "C. It looks cool",
      "D. Because Google said so"
    ],
    answer: "A. Because light attracts bugs"
  },
  {
    question: "What is a programmer’s favorite hangout place?",
    options: ["A. Coffee shop", "B. The Loop", "C. Beach", "D. Gym"],
    answer: "B. The Loop"
  },
  {
    question: "Why do Java developers wear glasses?",
    options: [
      "A. Because Java is blurry",
      "B. Because they can’t C#",
      "C. Fashion",
      "D. Too much screen time"
    ],
    answer: "B. Because they can’t C#"
  },
  {
    question: "How do programmers deal with stress?",
    options: ["A. Meditation", "B. Sleep", "C. Debugging", "D. Turning it off and on"],
    answer: "D. Turning it off and on"
  },
  {
    question: "What did the HTML say to the CSS?",
    options: ["A. You complete me", "B. Stop styling me", "C. Nice syntax", "D. Let’s flex"],
    answer: "A. You complete me"
  },
  {
    question: "Why was the computer cold?",
    options: [
      "A. Too many windows open",
      "B. No blanket",
      "C. Bad GPU",
      "D. Low battery"
    ],
    answer: "A. Too many windows open"
  },
  {
    question: "Why did the developer go broke?",
    options: [
      "A. Bought too many gadgets",
      "B. Because he used up all his cache",
      "C. Crypto loss",
      "D. Bug bounty failed"
    ],
    answer: "B. Because he used up all his cache"
  },
  {
    question: "What is a programmer’s favorite type of music?",
    options: ["A. Rock", "B. Jazz", "C. Algo-rhythm", "D. Pop"],
    answer: "C. Algo-rhythm"
  },
  {
    question: "Why do programmers hate nature?",
    options: ["A. Too many bugs", "B. No Wi-Fi", "C. No charging", "D. All of the above"],
    answer: "D. All of the above"
  },
  {
    question: "What’s a programmer’s biggest enemy?",
    options: ["A. Deadline", "B. Syntax error", "C. Internet down", "D. Semicolon"],
    answer: "B. Syntax error"
  }
];

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const timerEl = document.getElementById("timer");
const quizContainer = document.getElementById("quizContainer");
const startBtn = document.getElementById("startBtn");
const sound = document.getElementById("tick");

let currentQuestionIndex = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);
let timeLeft = 60;
let timerInterval;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => changeQuestion(1));
prevBtn.addEventListener("click", () => changeQuestion(-1));
submitBtn.addEventListener("click", finishQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  quizContainer.classList.remove("hidden");
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  timeLeft = 60;
  sound.play().catch(err => console.log("Play blocked:", err));

  startTimer();
  showQuestion();
}

function startTimer() {
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;
  answerButtons.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.className =
      "optionBtn border-2 border-white-400 bg-blue-500 hover:bg-blue-600 transition rounded-lg p-4 text-left shadow-md";
    button.textContent = option;

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add("ring", "ring-yellow-300");
    }
    button.addEventListener("click", () => selectAnswer(option));
    answerButtons.appendChild(button);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === quizQuestions.length - 1;

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function selectAnswer(option) {
  userAnswers[currentQuestionIndex] = option;

  const buttons = document.querySelectorAll(".optionBtn");

  buttons.forEach(btn => {
    btn.disabled = true;
    btn.classList.remove("ring", "ring-green-400");

    if (btn.textContent === option) {
      btn.classList.add("ring", "ring-greem-600","bg-blue-800");
    }
  });
}
function changeQuestion(direction) {
  currentQuestionIndex += direction;
  showQuestion();
}

function finishQuiz() {
  clearInterval(timerInterval);
  let score = 0;

  quizQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });

  questionEl.innerHTML = `🎉 Quiz Finished! <br> Your Score: <b>${score} / ${quizQuestions.length}</b>`;
  answerButtons.innerHTML = ""; 

  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  submitBtn.style.display = "none"
  sound.pause();
}