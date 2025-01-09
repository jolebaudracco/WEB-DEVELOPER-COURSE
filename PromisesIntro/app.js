const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() *(4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallBack('books.com/page1', 
//     function(response){
//         console.log("It worked!");
//         console.log(response); 
//         fakeRequestCallBack('books.com/page2',
//             function(response){
//                 console.log("It worked Again!");
//                 console.log(response); 
//                 fakeRequestCallBack('books.com/page3',
//                     function(response){
//                         console.log("It worked for third time!");
//                         console.log(response);
//                     }, function(err){
//                         console.log("Error for the third time!", err)

//                     }
//                 )
//         },
//             function(err){
//                 console.log("Error (2nd req)!", err)

//             })
// },  function (err) {
//         console.log("Error!", err)
// })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("Promise Resolved")
        console.log("It's working!")
    fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
            console.log("Promise Resolved 2nd page")
            console.log("It's working 2nd page!")
        })
        .catch(() => {
            console.log("Promise Rejected 2nd page")
            console.log("Upps, Error in the 2nd page!!! ")
        })
    })
    .catch(() => {
        console.log("Promise Rejected")
        console.log("Upps, Error!!! ")
    })