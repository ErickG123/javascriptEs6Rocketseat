"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var usuario1 = {
  nome: 'Erick',
  idade: 17,
  empresa: 'ErickCorps'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'XPTO'
});

console.log(usuario1);
console.log(usuario2);
