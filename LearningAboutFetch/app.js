fetch("https://www.swapi.tech/api/people/1/")
.then((res) => {
    console.log("Resolved!", res);
    return res.json();
})
.then((data) => {
    console.log(data.result.properties);
})
.catch((e) => {
    console.log("Error!", e);
});

fetch("https://www.swapi.tech/api/people/1/")
.then((res) => {
    console.log("Resolved!", res);
    return res.json();
})
.then((data) => {
    console.log(data.result.properties);
    return fetch("https://www.swapi.tech/api/people/2/");
})
.then((res) => {
    console.log("Second Request Resolved!");
    return res.json();
})
.then((data) => {
    console.log(data.result.properties);
})
.catch(() => {
    console.log("Error", e)
})
