import fetch from 'node-fetch';

const url = `https://jsonplaceholder.typicode.com/posts`;

// conectando com o endpoint da API (url)
fetch(url)
// retornando a resposta como json
.then(resposta => resposta.json())

// exibir a resposta no console (obtida na API)
.then(dados =>console.log(dados))

