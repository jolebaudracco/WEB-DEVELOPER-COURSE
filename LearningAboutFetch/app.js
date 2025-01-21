// fetch("https://www.swapi.tech/api/people/1/")
// .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
// })
// .then((data) => {
//     // console.log(data.result.properties);
//     console.log(data)
//     return fetch("https://www.swapi.tech/api/people/2/")
// })
// .then(res => {
//     console.log("Second Request Resolved")
//     return res.json();
// })
// .then((data) => {
//     // console.log(data.result.properties);
//     console.log(data)
// })
// .catch((e) => {
//     console.log("Error!", e);
// });

// fetch("https://www.swapi.tech/api/people/1/")
// .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data.result.properties);
//     return fetch("https://www.swapi.tech/api/people/2/");
// })
// .then((res) => {
//     console.log("Second Request Resolved!");
//     return res.json();
// })
// .then((data) => {
//     console.log(data.result.properties);
// })
// .catch(() => {
//     console.log("Error", e);
// });

const loadStarWarsPeople = async () => {
try{
    const res = await fetch("https://www.swapi.tech/api/people/1/")
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://www.swapi.tech/api/people/2/")
    const data2 = await res2.json();
    console.log(data2);
} catch(e) {
    console.log("Error", e);
}
};

loadStarWarsPeople();

// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch("https://www.swapi.tech/api/people/1/");
//         const data = await res.json();
//         console.log(data.result.properties);
//         const res2 = await fetch("https://www.swapi.tech/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2.result.properties);
//     } catch(e) {
//         console.log("Error", e);
//     }
// };

// loadStarWarsPeople();




