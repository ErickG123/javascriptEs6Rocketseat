"use strict";

/*
// Você não pode reatribuir um valor para uma constante
const a = 1;
*/

/*
// Mutando uma constante
// Trabalha com as mesma informações alterando valores
const usuario = {nome: 'Diego'}

usuario.nome = 'Erick'
console.log(usuario)
*/
// Variáveis de escopo
// {} é um escopo diferente
function teste(x) {
  var y = 2;

  if (x > 5) {
    // Reatribuindo o valor da variável
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
