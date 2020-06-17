const arr = [1, 2, 3, 4, 5, 6];

// .map percorre cada item do vetor e retorna um nova informação
// item recebe o valor do item
// index recebe a posição do item no vetor
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

// Consome todo o vetor e transforma em um única informação
// Recebe o total
// next recebe o próximo valor
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

// Filtra o vetor
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

// Verifica se existe alguma informação dentro do vetor
const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);