// Rest
// Pega o resto das propriedades
/*
const usuario = {
    nome: 'Erick',
    idade: 23,
    empresa: 'ErickCorps'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
*/

/*
const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
*/

/*
function soma(a, b, ...params) {
    // return params.reduce((total, next) => total + next);
    return params;
}

console.log(soma(1, 2, 3, 4, 5, 6));
*/

// Spread
// Repassa informações de um objeto para outra estrutura de dados
/*
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3)
*/
const usuario1 = {
    nome: 'Erick',
    idade: 17,
    empresa: 'ErickCorps'
}

const usuario2 = { ...usuario1, nome: 'XPTO'}

console.log(usuario1);
console.log(usuario2);