const usuario = {
    nome: 'Erick', 
    idade: 17,
    endereco: {
        cidade: 'Barra Bonita',
        estado: 'SP'
    }
}

// Desestruturação
/*
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/

function mostraNome({ nome }) {
    console.log(nome);
}

mostraNome(usuario);