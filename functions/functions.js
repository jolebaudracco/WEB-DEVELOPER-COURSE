// console.log("Hello World")

// function singSong(){
//     console.log("Do");
//     console.log("Re");
//     console.log("Mi");
// }

// function greet(person){
//     console.log(`Hello, ${person}!`);
// }

// greet("Pablo");

// function sayHi(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName}!`)
// }

// sayHi('Pablo', 'Gomila')

// function repeat(str, numTimes){
//     let result = ''
//     for(let i = 0; i < numTimes; i++){
//         result += str;
//     } 
//     console.log(result)
// }

// repeat('Pablo ', 3)
// repeat('Jole ', 3)

// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     let sum = x + y;
//     return sum;
// }
// console.log(add(5, 20))
// function sumArray(arr){
//     var result = 0
//         for(let i = 0; i < arr.length; i++) {
//             result = result + arr[i]
//         }
//             console.log(result)
//             return result;
//     }
    
//     sumArray([3, 4, 5])

    // const add = function(x, y){
    //     return x + y;
    // }
    // console.log(add(3, 4))


// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for(let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function() {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!")
//         } 
//     } else {
//         return function() {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
            
//         }
//     }
// }

// function makeBetweenFunc(min, max){
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// const cat = {
//     name: "Blue",
//     color: "orange",
//     breed: "scottish fold",
//     meow(){
//         console.log(`My cat whose name is ${this.name} and his color is ${this.color} and its breed is ${this.breed}`)
//     }
// }

// console.log(cat)

// let hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg(){
//         const result = this.eggCount += 1 
//         return "EGG"
//     }
// }

// console.log(hen.layAnEgg())

//Now we're gonna learn about TRY/CATCH

try{
    hello.toUpperCase();   
} catch {
    console.log("ERROR!")
}

function yell(msg) {
    try {
        console.log(msg.toUpeerCase().repeat(3))
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time!");

    }
}
