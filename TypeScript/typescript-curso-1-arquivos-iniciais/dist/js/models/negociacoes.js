export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
/* const list: Array<string/number> = [];
list.push('Samuel');
list.push('Silva');

for(let nome of list){
    nome.
    numero.
} */ 
