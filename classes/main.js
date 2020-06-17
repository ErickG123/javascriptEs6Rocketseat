/*
// Classe pai
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

// Classe TodoList herda a classe List
class TodoList extends List {
    constructor() {
        // Chama o constructor da classe pai
        super();

        this.usuario = 'Erick';
    }

    mostraUruario() {
        console.log(this.usuario)
    }
}

// Variável MinhaLista recebe a função TodoList
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUruario();
*/

// Métodos estáticos
// Não depende de nenhuma outra informação da nossa classe
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Matematica.soma(1, 2));