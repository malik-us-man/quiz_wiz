#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow.bold("\tWelcome to the quiz!"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.bold.bgMagenta("Q1. On which date is Pakistan's Independence Day celebrated?"),
        choices: [
            "A) 14th August",
            "B) 15th August",
            "C) 23rd March",
            "D) 25th December",
        ],
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.bold.bgMagenta("Q2. What is the capital city of Pakistan?"),
        choices: ["A) Karachi ", "B) Lahore", "C) Multan", "D) Islamabad"],
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.bold.bgMagenta("Q3. Who was the first Prime Minister of Pakistan?"),
        choices: [
            "A) Liaquat Ali Khan",
            "B) Muhammad Ali Jinnah",
            "C) Zulfikar Ali Bhutto",
            "D) Benazir Bhutto",
        ],
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.bold.bgMagenta("Q4. In which year did Pakistan conduct its first nuclear tests?"),
        choices: ["A) 1990", "B) 1998", "C) 2000", "D) 2002"],
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.bold.bgMagenta("Q5. Who was the captain of the Pakistan cricket team when they won the ICC Cricket World Cup in 1992?"),
        choices: [
            "A) Wasim Akram",
            "B) Javed Miandad",
            "C) Imran Khan",
            "D) Inzamam ul Haq",
        ],
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.bold.bgMagenta("Q6. In which year did Pakistan win their first ICC T20 World Cup?"),
        choices: ["A) 2007", "B) 2009", "C) 2012", "D) 2014"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "A) 14th August":
        console.log(chalk.yellow("1. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "D) Islamabad":
        console.log(chalk.yellow("2. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "A) Liaquat Ali Khan":
        console.log(chalk.yellow("3. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("3. Incorrect!"));
}
switch (quiz.question_4) {
    case "B) 1998":
        console.log(chalk.yellow("4. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("4. Incorrect!"));
}
switch (quiz.question_5) {
    case "C) Imran Khan":
        console.log(chalk.yellow("5. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("5. Incorrect!"));
}
switch (quiz.question_6) {
    case "B) 2009":
        console.log(chalk.yellow("6. Correct!"));
        score += 5;
        break;
    default:
        console.log(chalk.red("6. Incorrect!"));
}
console.log(chalk.bgRed(`\tTotal Score: ${score}`));
