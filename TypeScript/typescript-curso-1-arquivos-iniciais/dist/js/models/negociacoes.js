/* se não me engano para o array não ser mechido */
/* Array<Negociacao> == Negociacao[] */
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /* ReadonlyArray<Negociacao> == readonly Negociacao[] */
    lista() {
        return this.negociacoes;
    }
}
/* TIPO DE ARRAY QUE PODE USAR STRIG OU NUMBER:::::
 const list: Array<string/number> = [];
list.push('Samuel');
list.push('Silva');

for(let nome of list){
    nome.
    numero.
} */ 
