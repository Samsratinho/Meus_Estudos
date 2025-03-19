import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js'

/* se não me engano para o array não ser mechido */

/* Array<Negociacao> == Negociacao[] */
export class Negociacoes implements Modelo<Negociacoes>{
    
    private negociacoes: Negociacao[] = [];
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* ReadonlyArray<Negociacao> == readonly Negociacao[] */

    public lista(): readonly Negociacao[] {
        return this.negociacoes
    }

    public paraTexto(): string {
        return (JSON.stringify(this.negociacoes, null, 2));
    }
    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
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