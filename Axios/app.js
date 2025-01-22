// axios
// .get("https://www.swapi.tech/api/people/1")    
// .then((res) => {
//     console.log("Response", res);
// })
// .catch((e) => {
//     console.log("Error", e);
// });


// const getStarWarsPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.tech/api/people/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("Error!", e);
//     }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');


const addNewJokes = async () => {
    const jokeText = await getDadJokes()
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJokes = async() => {
    try{
    const config = {headers: { Accept: 'application/json' }}
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke;
    } catch (e) {
        return "No jokes available! Sorry!"
    }
}

button.addEventListener('click', addNewJokes)

//esto es un ejemplo de chat chatgpt de como se usa de manera correcta async y await
// async function obtenerDatos() {
//     console.log("Solicitando datos...");
    
//     // Simula una solicitud a un servidor con fetch
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
//     // Cuando la promesa se resuelve, obtenemos los datos en formato JSON
//     const datos = await respuesta.json();
    
//     console.log("Datos obtenidos:", datos);
//   }
  
//   obtenerDatos();
  