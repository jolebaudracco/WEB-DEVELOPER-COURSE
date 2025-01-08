// let count = 0;
// while(count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("Enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// USING BREAK KEYWORD
// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;   
// }

// console.log("OK, YOU WIN!")

// let maximum = parseInt(prompt("Enter the maximun number!"));
// if(!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = prompt("Enter your first guess (Type 'q' to quit)");
// let attempts = 1;

// while(parseInt(guess) !== targetNum) {
//     if(guess === 'q') break;
//     guess = parseInt(guess);
//     attempts++;
//     if(guess > targetNum) {
//         guess = parseInt(prompt("Too high! Enter a new guess:"));
//         attempts++;
//     } else if (guess < targetNum){
//         guess = parseInt(prompt("Too low! Enter a new guess:"));
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }
// if(guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`YOU GOT IT! It took you ${attempts} guesses`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']
// for(let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for(let sub of subreddits) {
//     console.log(sub)
// }

//Learning about FOR...OR LOOP
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for(let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of Object.values(testScores)) {
    total +=score;
}
console.log(total / scores.length)