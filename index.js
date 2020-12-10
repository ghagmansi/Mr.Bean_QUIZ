var userscore = 0;
var hasBeaten = "no";
var gameLevel = 1;
const chalk = require('chalk');
var readlineSync = require("readline-sync");

var topThreeScores =
  [{ name: "Mansi", tscore: 15 }, { name: "Anjali", tscore: 14 }, { name: "Nitya", tscore: 13 }]

var quesListLevelOne =
  [{ ques: "1. Who does Mr. Bean considers his friend and always carries along ? ", ans: 2, options: ['A Mickey Mouse', 'A Teddy', 'A Cat', 'A Dog'] },
  { ques: "2. What does Mr. Bean is usually seen wearing? ", ans: 3, options: ['A Black Tshirt', 'A Jersey and Track pant', 'A Shirt, Coat and a Tie', 'A Checkered Shirt'] },
  { ques: "3. What vehicle does Mr. Bean own in the show? ", ans: 1, options: ['A Car', 'A Truck', 'A Bicycle', 'A Jeep'] },
  { ques: "4. What is the name of animated series based on Mr. Bean series? ", ans: 4, options: ['Mr. Bean - The alien', 'Teddy and Mr. Bean', 'The Beanny Bean', 'Mr. Bean'] },
  { ques: "5. Originally who played the Mr. Bean's character? ", ans: 4, options: ['Colin Firth', 'Tom Hiddleston', 'Henry Cavill', 'Rowan Atkinson'] }]

var quesListLevelTwo =
  [{ ques: "6. Mr. Bean is originally which TV series? ", ans: 1, options: ['British TV Series', 'American TV Series', 'Italian TV Series', 'French TV Series'] },
  { ques: "7. What is the name of Mr. Bean's girlfriend in the series? ", ans: 2, options: ['Julie Dray', 'Irma Gobb', 'Alice Clarke', 'Jessica Baker'] },
  { ques: "8. In which year did Mr. Bean appeared on TV as a show? ", ans: 3, options: ['2003', '2000', '1990', '1995'] },
  { ques: "9. What is Mr. Bean's first name in the series? ", ans: 3, options: ['Rudolf', 'Jack', 'Mr.', 'Oliver'] },
  { ques: "10. Which room did Mr. Bean wanted to stay at the hotel? ", ans: 4, options: ['425', '450', '421', '426'] }]

var quesListLevelThree =
  [{ ques: "11. Mr. Bean mistakenly attempts which paper during his Maths exam? ", ans: 2, options: ['Algebra', 'Calculas', 'Chemistry', 'Trigonometry'] },
  { ques: "12. What does Mr. Bean unknowingly carries along himself when he drives his way to the Fun fair? ", ans: 4, options: ['A Police Van', 'A Cycle', 'A Thief', 'A Baby with his stroller'] },
  { ques: "13. In the scene, when Mr. Bean is inside the church, what does he struggles to eat? ", ans: 3, options: ['Pasta', 'A piece of Cake', 'A Candy', 'Fruits'] },
  { ques: "14. What does Mr. Bean serve his guests during the celebration of New year's eve? ", ans: 1, options: ['Wooden sticks and vinegar', 'Noodles', 'French fries', 'Salad'] },
  { ques: "15. What was Mr. Bean going to cook for the Christmas? ", ans: 2, options: ['Chicken', 'Turkey', 'Fishes', 'Nothing'] }]

console.log(chalk.cyan('---------------------------------'));
console.log(chalk.bgCyanBright.black.bold('     M R.   B E A N   Q U I Z    '));
console.log(chalk.cyan('---------------------------------'));

console.log(chalk.yellowBright("\nWhat is your name?"));
var userName = readlineSync.question(chalk.italic("Type your name and press enter: "));
console.log(chalk.cyanBright.bold("\n Welcome " + userName + " to 'Mr. Bean Quiz' "));
console.log(chalk.yellowBright.underline("\nRules for this Game:"));
console.log("\n1) There are 3 levels in the quiz. Each level with 5 questions.\n2) Each question has 4 options with one option being correct.\n3) You score 1 point for every right answer.\n4) You must score 5 points to enter into Level 2. You must score 10 points to enter into Level 3.  \n");

readlineSync.keyInPause('To begin the quiz, press Y :', { limit: ['Y', 'y'], guide: false });

console.log(chalk.black.bold.bgYellowBright("\n     L E V E L  - " + gameLevel + "      "));
for (var i = 0; i < quesListLevelOne.length; i++) {
  console.log(" ");
  playGameLevel(quesListLevelOne[i].ques, quesListLevelOne[i].options, quesListLevelOne[i].ans);
}

if (userscore == 5) {
  gameLevel = 2;
  console.log(chalk.rgb(204, 0, 204).bold("\nCongrats!! You enter Level 2 "));
  console.log(chalk.black.bold.bgYellowBright("\n     L E V E L  - " + gameLevel + "      "));
  for (var i = 0; i < quesListLevelTwo.length; i++) {
    console.log(" ");
    playGameLevel(quesListLevelTwo[i].ques, quesListLevelTwo[i].options, quesListLevelTwo[i].ans);
  }

  if (userscore == 10) {
    gameLevel = 3;
    console.log(chalk.rgb(204, 0, 204).bold("\nCongrats!! You enter Level 3 "));
    console.log(chalk.black.bold.bgYellowBright("\n     L E V E L  - " + gameLevel + "      "));
    for (var i = 0; i < quesListLevelThree.length; i++) {
      console.log(" ");
      playGameLevel(quesListLevelThree[i].ques, quesListLevelThree[i].options, quesListLevelThree[i].ans);
    }

    checkIfInTopThree(topThreeScores, userscore, userName);
    displayTopThreeScores(topThreeScores);
  }
  else {
    checkIfInTopThree(topThreeScores, userscore, userName);
    displayTopThreeScores(topThreeScores);
  }
}
else {
  checkIfInTopThree(topThreeScores, userscore, userName);
  displayTopThreeScores(topThreeScores);
}

function playGameLevel(question, option, answer) {

  console.log(chalk.cyanBright.bold(question));

  var userAns = readlineSync.keyInSelect(option, "Option selected ? ", { guide: false, cancel: false });

  if (userAns + 1 === answer) {
    console.log(chalk.green("Option " + (userAns + 1) + " is the right answer!! "));
    userscore = userscore + 1;
  } else {
    console.log(chalk.red("X X...That's wrong...X X"));
    console.log(chalk.rgb(0, 204, 153)("Correct answer is Option " + answer));
  }

  console.log(chalk.rgb(204, 0, 204).bold("Score : " + userscore + " "));
  console.log("");
}

function displayTopThreeScores(topThreeScores) {
  console.log(" ");
  console.log(chalk.yellowBright("\n\n- - - -Top 3 scorers- - - -"));

  console.log(chalk.black.bold.bgYellowBright("     S C O R E B O A R D     "));
  console.log(chalk.bgWhiteBright.rgb(204, 0, 204).bold("     Name      |     Score   "));
  for (var i = 0; i < topThreeScores.length; i++) {
    console.log(chalk.rgb(204, 0, 204).bold("     " + topThreeScores[i].name + "         " + topThreeScores[i].tscore));
  }
}

function checkIfInTopThree(topThreeScores, userscore, userName) {
  console.log(" ");
  for (var k = 0; k < topThreeScores.length; k++) {
    var result = hasBeatenHighScore(topThreeScores[k].tscore, userscore);
  }

  if (result === "yes") {
    console.log(chalk.bgCyanBright.black.bold("\n  " + userName + " your final score is: " + userscore + "  "));
    console.log(chalk.green.bold("\nCongratulations!! You are among top three scorers.\nPlease send us a screenshot of your score."));
  }
  else {
    console.log(chalk.bgCyanBright.black.bold("\n  " + userName + " your final score is: " + userscore + "  "));
  }
}

function hasBeatenHighScore(existingtscore, userscore) {
  if (userscore >= existingtscore) {
    hasBeaten = "yes";
  }
  return hasBeaten;
}