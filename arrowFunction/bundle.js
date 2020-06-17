"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return 'Teste';
};

var teste2 = function teste2() {
  return 3;
};

var teste3 = function teste3() {
  return [1, 2, 3, 4];
};

var teste4 = function teste4() {
  return {
    nome: 'Erick'
  };
};

console.log(teste());
console.log(teste2());
console.log(teste3());
console.log(teste4());
