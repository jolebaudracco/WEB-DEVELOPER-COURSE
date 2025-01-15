
//This is a way of creating a promise by using async + a common function
// async function hello() {
// }

//we can also do async arrow functions
// const sing = async() => {
//     //if in this function with throw an error, or if there is an error inside of the async function, that magical promise
//     //that's created is going to be rejected.
//     throw new Error("Upps, la hemos cagado!")
//     //If I retunr a value, the promise is going to be resolved
//     return 'I love coding'
// }

// sing().then(data => {
//     console.log("Promise resolved with:", data)
// })
// .catch(err => {
//     console.log("Upps problem rejected")
//     console.log(err)
// })

// const login = async(username, password) => {
//     if(!username || !password) throw 'Missing Credentials'
//     if(password === 'jolefeetarecute') return 'Welcome!'
//     throw 'Invalid Password'
// }

// login('Jole126', 'jolefeetarecute')
// .then(msg => {
//     console.log('Logged In!')
//     console.log(msg)
// })
// .catch(err => {
//    console.log('Error') 
//    console.log(err) 
// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('indigo', 1000))
.then(() => delayedColorChange('violet', 1000))

async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All Done"
}

// rainbow().then(() => console.log("End of Rainbow!"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow!")
}

printRainbow();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/Page1');
        console.log(data1);
        let data2 = await fakeRequest('/Page2');
        console.log(data2);

    } catch (e) {
        console.log("Caught an error")
        console.log("Error is:", e)

    }
}

