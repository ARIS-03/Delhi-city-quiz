var readlineSync = require("readline-sync");
var chalk = require("chalk");
const log = console.log;

var score = 0;

log(chalk.keyword("pink").bgBlue.underline.bold("Check how much do you know about DELHI City ;-)"));

var userName = readlineSync.question(chalk.bgCyan.bold.keyword("purple")("\nEnter your Name:") + " ");

log(chalk.keyword("pink").bgBlue.underline("\nWelcome ") + chalk.keyword("pink").bgBlue.underline(userName));

log(chalk.red.bold(chalk.red.underline("\n--Rules:") + "\n>There are total 7 MCQ questions." + "\n>You will get 2 points for each correct answer." + "\n>One mark will deduct for each wrong answer.\n"))

var leaderBoard = [
  {
    place : 1,
    name : "Aris",
    score : 6
  },

  {
    place : 2,
    name : "aspa",
    score : 4
  },

  {
    place : 3,
    name : "Paplu",
    score : 2
  }
]

log(chalk.green.bold.underline("LEADERBOARD:"));
log(chalk.keyword("yellow").underline.bold("Place\t" + "Name\t" + "\tScore"));

for(var i=0; i<leaderBoard.length; i++) {
  log(leaderBoard[i].place + "\t\t" + leaderBoard[i].name + "\t\t" + leaderBoard[i].score)
}

log("---------------------------------------------------");

var questions = [
  {
    question : "DELHI is known as ____  of India.",
    options : ["capital", "Home", "Culture", "Heart"],
    answer : "Heart"
  },

  {
    question : "Where is Qutub Minar?",
    options : ["karol bagh", "Mehrauli", "punjabi bhag", "None of these"],
    answer : "Mehrauli"
  },

  {
    question : "Delhi is establish by which mughal ____",
    options : ["Shah Jahan", "Arungzeb", "Akbar", "Marco polo"],
    answer : "Shah Jahan"
  },

  {
    question : "Who first made Delhi as capital?",
    options : ["Thomson hustin", "King George V", "Lee yung","Richard pablo"],
    answer : "Anil Kumble"
  },

  {
    question : "What is the oldest name of Delhi??",
    options : ["Indraprastha", "Shahjanabaad", "Hasbarpur", "Ghazbabad"],
    answer : "Indraprastha"
  },

  {
    question : "Who ruled Delhi the most??",
    options : ["Marathas", "Mughal", "Polo's","Prithviraaj"],
    answer : "Mughal"
  },

  {
    question : "Red-Fort is made by?",
    options : ["Arungzeb", "Shah Jahan", "Fateh", "Akbar"],
    answer : "Shah Jahan"
  },

 

 
]

function quiz(options, question, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question)
  if(options[userAnswer] === answer) {
    log(chalk.red ("\n--Right" + "\n"));
    score = score + 2;
    log(chalk.green("Current Score : " + score));
    log("===================================================")
  }
  else {
    log(chalk.red("\n--Wrong" + "\n"));
    score = score - 1;
    log(chalk.red("Current Score : " + score));
    log("===================================================")
  }
}

var z = 1;

for(var i=0; i<questions.length; i++) {
  log(chalk.keyword("pink").bgBlue.underline.bold("\nQuestion " + z++))
  quiz(questions[i].options, questions[i].question, questions[i].answer)
}

log(chalk.green("Final Score: " + score));

var highScores = [10, 8, 6];

for(var i=0; i<highScores.length; i++) {
  if(score>highScores[i]) {
    log(chalk.keyword("pink").bgBlue.bold("\nCongratulations!! you are a high scorer."));
    break;
  }
}