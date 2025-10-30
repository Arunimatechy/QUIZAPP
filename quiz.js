

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
let question = document.getElementById("question");
let options = document.getElementById("options");

let prevBtn = document.getElementById("prevBt");
let nextBtn = document.getElementById("nextBtn");
let result = document.getElementById("result");
let playAgainBtn = document.getElementById("playAgainBtn");

function checkanswer(c) {
  if (quiz[index - 1].answer == c) {
    result.innerText = "Correct";
    score++;
  } else {
    result.innerText = "Wrong";
  }

  result.innerText = `Your score is ${score}`;
  return;
}

function render() {
  quiz[index].options.forEach((x) => {
    let div = document.createElement("div");
    div.classList.add("options");
    div.innerText = x;
    div.addEventListener("click", () => {
      checkanswer(x);
    });
    options.append(div);
  });
}

function showQuestion() {
  options.innerHTML = "";
  render();
  question.innerText = quiz[index].question;
  index++;
}

function previous() {
  options.innerHTML = "";
  index--;
  question.innerText = quiz[index].question;
  render();
}

nextBtn.addEventListener("click", showQuestion);
prevBtn.addEventListener("click", previous);


function resetQuiz() {
 
  index = 0;
  score = 0;

 
  options.innerHTML = "";
  result.innerText = "";
  question.innerText = "";

 
  showQuestion();
}

playAgainBtn.addEventListener("click", resetQuiz);


showQuestion();
