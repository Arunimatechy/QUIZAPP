const quiz = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["script", "style", "css", "design"],
    answer: "style"
  },
  {
    question: "Which property changes the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["script", "javascript", "js", "code"],
    answer: "script"
  }
];

let index = 0;
let score = 0;
let selectedAnswer = null;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const prevBtn = document.getElementById("prevBt");
const nextBtn = document.getElementById("nextBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

function showQuestion() {
  options.innerHTML = "";
  result.innerText = "";
  selectedAnswer = null;

  question.innerText = `Q${index + 1}. ${quiz[index].question}`;

  quiz[index].options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "options";
    div.innerText = opt;

    div.onclick = () => selectAnswer(div, opt);
    options.appendChild(div);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = true;
}

function selectAnswer(element, answer) {
  if (selectedAnswer) return;

  selectedAnswer = answer;
  nextBtn.disabled = false;

  const correct = quiz[index].answer;

  if (answer === correct) {
    element.classList.add("correct");
    result.innerText = "✅ Correct!";
    score++;
  } else {
    element.classList.add("wrong");
    result.innerText = "❌ Wrong!";

    document.querySelectorAll(".options").forEach(opt => {
      if (opt.innerText === correct) {
        opt.classList.add("correct");
      }
    });
  }
}

nextBtn.onclick = () => {
  if (index < quiz.length - 1) {
    index++;
    showQuestion();
  } else {
    showResult();
  }
};

prevBtn.onclick = () => {
  index--;
  showQuestion();
};

function showResult() {
  question.innerText = "🎉 Quiz Completed!";
  options.innerHTML = "";
  result.innerText = `Your Score: ${score} / ${quiz.length}`;

  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  playAgainBtn.style.display = "block";
}

function resetQuiz() {
  index = 0;
  score = 0;

  nextBtn.style.display = "inline-block";
  prevBtn.style.display = "inline-block";
  playAgainBtn.style.display = "none";

  showQuestion();
}

playAgainBtn.onclick = resetQuiz;

showQuestion();
