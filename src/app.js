// Entry point da aplicação web

// exemplo de import de libraries externas
import { person, sayHello } from "./lib";
//console.log(person.name);
console.log( sayHello(person.name));


// exemplo de funcao asyncrona com o async await e fetch
async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}
getPosts().then(posts => console.log(posts));


