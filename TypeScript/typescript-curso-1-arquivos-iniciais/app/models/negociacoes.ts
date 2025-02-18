import { Negociacao } from './negociacao.js'

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}

/* const list: Array<string/number> = [];
list.push('Samuel');
list.push('Silva');

for(let nome of list){
    nome.
    numero.
} */