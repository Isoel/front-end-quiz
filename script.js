const startButton = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz-section');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices-list');
const submitButton = document.getElementById('submit-btn');
const resultsSection = document.getElementById('results-section');
const scoreText = document.getElementById('score-text');
const initialsInput = document.getElementById('initials');
const submitScoreButton = document.getElementById('submit-score');

let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 60;
let timerId;

const questions = [
  {
    question: 'What is the highest hand in poker?',
    choices: ['Straight flush', 'Royal flush', 'Four of a kind', 'Full house'],
    correctAnswer: 'Royal flush'
  },
  {
    question: 'What is the name of the famous poker player nicknamed "Texas Dolly"?',
    choices: ['Doyle Brunson', 'Johnny Chan', 'Phil Ivey', 'Phil Hellmuth'],
    correctAnswer: 'Doyle Brunson'
  },
  {
    question: 'What is the name of the poker hand containing three of a kind and a pair?',
    choices: ['Flush', 'Straight', 'Full house', 'Four of a kind'],
    correctAnswer: 'Full house'
  },
  {
    question: 'What is the name of the poker tournament series that takes place annually in Las Vegas?',
    choices: ['World Series of Poker', 'World Poker Tour', 'European Poker Tour', 'Asia Pacific Poker Tour'],
    correctAnswer: 'World Series of Poker'
  },
  {
    question: 'In Texas hold\'em, what is the term for the two initial cards dealt to each player that are not revealed to the other players?',
    choices: ['Pocket cards', 'Community cards', 'Face-up cards', 'Folded cards'],
    correctAnswer: 'Pocket cards'
  },
  {
    question: 'What is the name of the poker hand containing five cards of the same suit?',
    choices: ['Flush', 'Straight', 'Full house', 'Four of a kind'],
    correctAnswer: 'Flush'
  },
  {
    question: 'What is the name of the poker hand containing five cards of consecutive rank, regardless of suit?',
    choices: ['Flush', 'Straight', 'Full house', 'Four of a kind'],
    correctAnswer: 'Straight'
  },
  {
    question: 'What is the name of the poker hand containing four cards of the same rank?',
    choices: ['Flush', 'Straight', 'Full house', 'Four of a kind'],
    correctAnswer: 'Four of a kind'
  },
  {
    question: 'What is the name of the poker hand containing two cards of the same rank and three cards of different ranks?',
    choices: ['Flush', 'Straight', 'Full house', 'Two pair'],
    correctAnswer: 'Two pair'
  },
  {
    question: 'In Texas hold\'em, what is the term for the five community cards that are revealed in the center of the table?',
    choices: ['Pocket cards', 'Community cards', 'Face-up cards', 'Folded cards'],
    correctAnswer: 'Community cards'
  }
];

function startQuiz() {
  // hide start section and show quiz section
  document.getElementById('start-section').classList.add('hidden');
  quizSection.classList.remove('hidden');

  // start timer
  timerId = setInterval(function() {
    seconds

  
  