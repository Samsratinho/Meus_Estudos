/* construtor para o const dos valores tipados */

import { Modelo } from "../interfaces/modelo.js";


/* forma nova muito mais simples */
export class Negociacao implements Modelo<Negociacao>{

    constructor(
        private _data: Date, /* adicona uma data que ninguem pode mexer */
        public readonly quantidade: number, /* adiciona uma quantidade publica que só podemos ler*/
        public readonly valor: number /* mesmo aqui */
    ){}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{ /* virou um metodo e estatico */
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ',')); /* para em vez de a data funcionar assim: 1111-11-11, ela fica escrita assim: 1111,11,11*/
        const quantidade = parseInt(quantidadeString); /* valor de inteiros */
        const valor = parseFloat(valorString); /* valor racional */
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor /* volume que é a multiplicação de quantidade e valor */
    }

    get data(): Date {
        const data = new Date(this._data.getTime()) /* função para não mudar os dados da data com as propriedades */
        return data;
    }

    public paraTexto(): string{
        return`
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }
}

/* forma antiga

export class Negociacao{

    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){    /COISA VELHA DO TYPESCRIPT/
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor
    }

    get volume(): number {
        return this._quantidade * this._valor
    }
} */