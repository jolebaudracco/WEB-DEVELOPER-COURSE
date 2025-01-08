// const numbers = [1, 2, 3, 4, 5, 6]

//THIS IS ONE WAY OF DOING IT
// function print(element){
//     console.log(element)
// }
// numbers.forEach(print)

//THIS IS ANOTHER WAY
//  numbers.forEach(function(elem){
//     if(elem % 2 === 0){
//         console.log(elem)
//     }
//  })

// for(let el of numbers) {
//     console.log(el)
// }

// const movies = [
//     {
//         title: "Amadeus",
//         score: 99
//     },
//     {
//         title: "Stand by me",
//         score: 85
//     },
//     {
//         title: "Parasite",
//         score: 95
//     },
//     {
//         title: "Aliens",
//         score: 90
//     }
// ]

//  const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// movies.forEach(function(movie){
//     console.log(movie)
// })

// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)
// const double = numbers.map(function(num){
//     return num * 2
// })

// const add = (num1, num2) => {
//     return num1 + num2
// } 

// console.log(add(5, 4))

// Implicit return in a function

// const add = (a, b) => a + b
// console.log(add(3, 2))

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))
// console.log(newMovies)

// const cars = [
//     {
//         brand: "chevrolet",
//         color: "grey",
//         year: 1990
//     },
//     {
//         brand: "Toyota-Yaris",
//         color: "white",
//         year: 2023
//     },
//     {
//         brand: "Fiat-Palio",
//         color: "grey",
//         year: 2002
//     },
//     {
//         brand: "ford-a",
//         color: "red",
//         year: 1857
//     }
// ]

// const filteringYears = cars.filter(car => {
//     return car.year > 2000
// })

// const filterYear = cars.filter(car => car.year > 2000).map(car => car.brand)
// console.log(filterYear)

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
//     total += price
// }
// console.log(total)

//otra forma de hacer eso es a través del .reduce
// const total = prices.reduce((total, price) => {
//     return total + price
// })

// const total = prices.reduce((total, price) => total * price)

// const minPrice = prices.reduce((min, price) => {
//     if(price < min) {
//         return price;
//     } 
//     return min;
// })

// const maxPrice = prices.reduce((max, price) => {
//     if(price > max) {
//         return price
//     }
//     return max;
// })

// console.log(total)
// console.log(minPrice)
// console.log(maxPrice)

// const evens = [2, 4, 6, 8];
// const total = evens.reduce((sum, num) => sum + num)

// console.log(total)

// const person = {
//     firstName: "Pablo",
//     lastName: "Gomila",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
// }

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'Helloworld!',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey was an American politician',
//     city: 'San Francisco',
//     state: 'California'
// }

// // const firstName = user.firstName;
// // const lastName = user.lastName;
// // const email = user.email;

// //OTRO SIMILAR A ESE ES:
// const { email, firstName, lastName, city, state } = user;

// //Now, the born property can be replaces by another one in this way
// const { born: birthYear, died: deathYear } = user;

//Desestructurando Parámetros
// const fullName = ({first, last}) => {
//     return `${first} ${last}`
// }
// const runner = {
//     first: 'Pablo',
//     last: 'Gomila',
//     country: 'Argentina',
// }

// fullName(runner);

// const movies = [
//     {
//         title: 'Shrek',
//         score: 99,
//         year: 2005
//     },
//     {
//         title: 'Madagascar',
//         score: 79,
//         year: 2010
//     },
//     {
//         title: 'Minions',
//         score: 86,
//         year: 2000
//     },
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     }
// ]

// // movies.filter((movie) => movie.score > 90)
// // movies.filter(({score}) => score > 90)

// //Now, we want to map each movie
// movies.map(movie =>{
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// } )

//ACÁ CUBRIMOS TODO LO QUE ES: SELECTORS
// const doneTodos = document.querySelectorAll('.done');
// const checkbox = document.querySelector("input[type='checkbox']")

// console.log(checkbox)