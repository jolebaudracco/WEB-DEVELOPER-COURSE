// console.log('BEFORE CONDITIONAL')
// let random = Math.random();
// if(random < 0.5) {
//     console.log('Your number is less than 0.5!')
//     console.log(random);
// }

// if(random >= 0.5) {
//     console.log('YOUR NUMBER IS GREATER THAN 0.5!')
//     console.log(random); 
// }

// const dayOfWeek = 'Saturday';
// if(dayOfWeek === 'Monday') {
//     console.log('I hate Mondays')
// } else if (dayOfWeek === 'Saturday') {
//     console.log('I love Saturday')
// }

//0-5 - FREE
//5-10 - CHILD: $10
//10 - 65 ADULT $20
//65+ SENIOR $10

// const age = 77;
// if(age < 5) {
//   console.log("You're a baby. You get in for free")  
// } else if(age < 10) {
//     console.log("You're a child. You pay $10")
// } else if (age < 65) {
//     console.log("You're an adult. You pay $10")
// } else {
//     console.log("You are too old to get in. Get out!!!")
// }


// const password = prompt('Please enter a new password')
// //password must be 6+ character
// //Password cannot include space
//     if(password.length >= 6) {
//         if(password.indexOf(' ') === -1) {
//             console.log('Good Job! No Space!') 
//          } else {
//              console.log('Password cannot contain spaces!')
//          }
//     } else {
//         console.log('Password too short!')
//     }

// const userInput = prompt("Enter something")
//     if(userInput) {
//         console.log("Truthy")
//     } else {
//         console.log("Falsy")
//     }

    //0-5 free
    //5-10 $10
    //10-65 $20
    //65+ free

//     const age = 4;
//         if(age >= 0 && age < 5 || age >= 65) {
//             console.log("FREE")
//         } else if ( age >= 5 && age < 10) {
//             console.log("$10")
//         } else if(age >= 10 && age < 65) {
//             console.log("$20")
//         } else {
//             console.log("INVALID AGE!")
//         }

//  const firstName = prompt("Enter your first name")   
//         if(!firstName) {
//             firstName = prompt("TRY IT AGAIN!") 
//         } 

    // const age = 45;
    //     if(!(age >= 0 && age < 5 || age >= 65)) {
    //         console.log("You're not a baby or a senior!")
    //     }

// const day = 4;
//     switch (day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         default:
//             console.log("WTF?")
//     }

// const colors = []
//     console.log(colors)

// let movieLine = ['Tom', 'Nancy']
//     movieLine.push('Pablo')
//     console.log('Movie Line', movieLine)

// let students = ['Sheila', 'Aru', 'Alejo', 'Lucas', 'Jorge', 'Lucre']
//     // console.log(students)
//     // let result = students.pop()
//     // console.log('Result', result)
//     // let result2 = students.shift()
//     // console.log(result2)
//     let add = students.unshift('Lucia')
//     console.log(students, add)

// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
// const result1 = planets.shift();
// const result2 = planets.push('Saturn');
// const result3 = planets.unshift('Mercury');
// const result4 = planets.slice(2, 5);
// const result5 = planets.splice(3,1);
//     // console.log(result4)
//     // console.log(result5)

// console.log('Planets',planets)

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats.indexOf(null)

// const fitBitData = {
//     totalSteps: 308727,
//     totalMiles: 211.7,
//     avgCaloriesBurn: 5755,
//     workoutsThisWeek: '5 of 7',
//     avgGoodSleep:'2:13'
// };

// const result = fitBitData.totalMiles;

// console.log('Fit Bit Data', fitBitData)
// console.log('Result', result)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(let i = 1; i <=10; i++) {
//     console.log(i)
// }

// for(let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa")
// }

// for(let num = 100; num >= 0; num -= 10) {
//     console.log(num)
// }

// for(let i = 25; i >= 0; i -= 5) {
//     console.log(i)
// };

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
//     for(let counter = 0; counter < people.length ; counter++) {

//         let valorDecounter = counter
//         console.log("🚀JB ~ valorDecounter:", valorDecounter)
//         let valorEnEstaVuelta = people[counter]
//         console.log("🚀JB ~ valorEnEstaVuelta:", valorEnEstaVuelta)
//         let valorDeEstaVueltaEnMayuscula = valorEnEstaVuelta.toUpperCase()
//         console.log("🚀JB ~ valorDeEstaVueltaEnMayuscula:", valorDeEstaVueltaEnMayuscula)
//     }

    // const seatingChart = [
    //     ['Kristen', 'Erik', 'Namita'],
    //     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    //     ['Yuma', 'Sakura', 'Jack', 'Erika'],
    // ]

    // for(let i = 0; i < seatingChart.length; i++) {
    //     const row = seatingChart[i];
    //     console.log(`ROW #${i + 1}`)
    //     for(let j = 0; j < row.length; j++) {
    //       console.log(row[j])
    //     }
    // }
    