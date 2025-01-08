let input = prompt('What would you like to do?');
const toDos = ["Collect Chicken Eggs", "Clean Cat Little Box"];
while(input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("***************")
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`)
        };
        console.log("***************")
    } else if (input === "new") {
        const newTodo = prompt("Ok, What is the new todo");
        toDos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete"));
        if(!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1); 
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    };
    input = prompt("What would you like to do?")
};
console.log("OK, QUIT THE  APP!")