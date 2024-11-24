const createTodo = async(todo) => {
    let options = {
        method : "POST",
        body: JSON.stringify(todo),
        headers : {
            "Content-type" : "application/json"
        }
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}

let getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id);
    let r = response.json();
    return r;
}

const mainFunc = async() => {
    let todo = {
        title: 'Adeeb',
        body: 'Mansoor',
        userId: 7,
    }
    let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(5));
}
mainFunc();