let dollar = 5.09;

let dollar10 = 10 * dollar;

console.log(`U$ 10 equivale a R$ ${dollar10}`);
console.log('-------------------------------');

let aluno = 'chaves';
let nota1 = 7.58;
let nota2 = 9.12;
let media = (nota1 + nota2) /2;

console.log(nota1, nota2, media);
console.log('---------------------');

let situacao;
if (media >=7) {
    situacao = "aprovado";
} else {
    situacao = "reprovado";
}

console.log(`o aluno ${aluno} alcancou media ${media} e esta ${situacao}.`)

console.log('---------------------');

var dados = {
    nome : 'astolfo',
    idade : '24',

}
console.table(dados);
console.log(dados.nome);
console.log(dados.idade);

