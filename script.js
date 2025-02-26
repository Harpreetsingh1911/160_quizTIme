const startBtn = document.querySelector(".start button");
const start = document.querySelector(".start ");
const part2 = document.querySelector(".part-2 ");
const question = document.querySelector(".question");
const optionContainer = document.querySelector(".option-container");
const options = document.querySelectorAll(".options");
// const next = document.querySelector(".next");
const timer = document.querySelector(".countTImer");
const countSlide = document.querySelector("#count-slide");
const container = document.querySelector(".container");
const popUp = document.querySelector(".pop-up");
const next = document.querySelector("#next");
const retry = document.querySelector("#retry");
const retryFinal = document.querySelector("#retryFinal");
const showResult = document.querySelector("#show-result");
const final = document.querySelector(".final");
const numberAns = document.querySelector("#user-right-ans");
const userResultGrpah = document.querySelector("#graph");
const higestScore = document.querySelector(".start h4");
const audio = document.getElementById("audioElement");
let slide = 0;
let timerup;
let optionClick = false;
let singleClick = 1;
let userAns = localStorage.getItem("hightResult") || 0;
const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correctAnswer: "Delhi",
  },
  {
    question: "What is the capital of Haryana?",
    options: ["Gujrat", "Mumbai", "Chandigarh", "Kolkata"],
    correctAnswer: "Chandigarh",
  },
  {
    question: "What is the capital of Punjab?",
    options: ["Ludhiana", "Mumbai", "Chandigarh", "Kolkata"],
    correctAnswer: "Chandigarh",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: "Diamond",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which is the smallest continent by area?",
    options: ["Africa", "Asia", "Australia", "Europe"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the capital of France?",
    options: ["Rome", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "Who discovered gravity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Isaac Newton",
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Osmium", "Oganesson", "Ozone"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the capital of the United States?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    correctAnswer: "Washington D.C.",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Tiger", "Lion", "Giraffe"],
    correctAnswer: "Lion",
  },
  {
    question: "What is the longest bone in the human body?",
    options: ["Femur", "Humerus", "Tibia", "Radius"],
    correctAnswer: "Femur",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Nikola Tesla",
      "Thomas Edison",
      "Alexander Graham Bell",
      "Samuel Morse",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Finland", "Sweden", "Norway", "Denmark"],
    correctAnswer: "Norway",
  },
  {
    question: "What is the symbol for the chemical element gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Osaka"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Which animal is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who was the first president of the United States?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "Andrew Jackson",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    options: ["Australia", "USA", "Mexico", "South Africa"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the largest island in the world?",
    options: ["Australia", "Greenland", "New Guinea", "Borneo"],
    correctAnswer: "Greenland",
  },
  {
    question: "Who is the author of 'Harry Potter'?",
    options: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "J.K. Rowling",
      "Suzanne Collins",
    ],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "Which country is known as the home of the Eiffel Tower?",
    options: ["Germany", "Italy", "France", "England"],
    correctAnswer: "France",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Lemon", "Cucumber"],
    correctAnswer: "Avocado",
  },
  {
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Horse", "Camel"],
    correctAnswer: "Giraffe",
  },
];

const getHigestScoore = localStorage.getItem("hightResult") || "0";
higestScore.textContent = `${getHigestScoore}/${quizData.length}`;

startBtn.addEventListener("click", () => {
  start.classList.add("disable");
  part2.classList.remove("disable");
  container.style.backgroundColor = "rgba(204, 226, 194, 1)";
  stopwatch();
});

function stopwatch() {
  let time = 30;
  audio.play();
  timerup = setInterval(() => {
    if (time == 0) {
      timer.innerText = `00:${time}0`;
      popUp.classList.remove("display");
      audio.pause();

      clearInterval(timerup);
    } else {
      timer.innerText = `00:${time--}`;
      if (time > 5 && time < 15) {
        container.style.backgroundColor = "rgba(212, 214, 159, 0.55)";
        timer.style.backgroundColor = "rgba(212, 214, 159, 0.55)";
      }
      if (time < 5) {
        container.style.backgroundColor = "rgba(219, 173, 173, 1)";
        timer.style.backgroundColor = "rgba(219, 173, 173, 1)";
      }
    }
  }, 1000);
}
function getHeading() {
  if (slide < quizData.length) {
    question.innerText = quizData[slide].question;
  }
  countSlide.innerText = `${slide + 1}`;
}
function getOptions() {
  let op;

  if (slide < quizData.length) {
    op = quizData[slide].options;

    let index = 0;

    for (let element of op) {
      if (index < options.length) {
        options[index].textContent = element;
        index++;
      }
    }
  }
  slide++;
}
function checkAns(userInput, ele) {
  const ans = quizData[slide - 1].correctAnswer;
  if (ans == userInput) {
    ele.classList.add("green");
    userAns++;
  } else {
    options.forEach((e) => {
      if (ans == e.textContent) {
        e.classList.add("green");
      }
    });
    ele.classList.add("red");
  }
}

optionContainer.addEventListener("click", (e) => {
  optionClick = true;
  if (optionClick && singleClick) {
    checkAns(e.target.innerText, e.target);
    singleClick--;
  }
  if (slide == quizData.length) {
    next.classList.add("display");
    showResult.classList.remove("display");
  }
  clearInterval(timerup);
  audio.pause();
});
getHeading();
getOptions();

next.addEventListener("click", () => {
  if (slide < quizData.length && optionClick) {
    container.style.backgroundColor = "rgba(204, 226, 194, 1)";
    getHeading();
    getOptions();
    stopwatch();
    options.forEach((e) => {
      e.classList.remove("green");
      e.classList.remove("red");
    });
    useClick = false;
    singleClick = 1;
    localStorage.setItem("hightResult", userAns);
  }
});

showResult.addEventListener("click", (e) => {
  part2.classList.add("disable");
  final.classList.remove("display");
  numberAns.textContent = userAns;
  const graphValue = (userAns / slide) * 100;
  userResultGrpah.style.width = `${graphValue}%`;
  localStorage.setItem("hightResult", userAns);
});

retry.addEventListener("click", (e) => {
  location.reload();
  localStorage.setItem("hightResult", userAns);
});

retryFinal.addEventListener("click", (e) => {
  location.reload();
  localStorage.setItem("hightResult", userAns);
});
