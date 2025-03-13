/* construtor para o const dos valores tipados */
/* forma nova muito mais simples */
export class Negociacao {
    constructor(_data, /* adicona uma data que ninguem pode mexer */ quantidade, /* adiciona uma quantidade publica que só podemos ler*/ valor /* mesmo aqui */) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor; /* volume que é a multiplicação de quantidade e valor */
    }
    get data() {
        const data = new Date(this._data.getTime()); /* função para não mudar os dados da data com as propriedades */
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ',')); /* para em vez de a data funcionar assim: 1111-11-11, ela fica escrita assim: 1111,11,11*/
        const quantidade = parseInt(quantidadeString); /* valor de inteiros */
        const valor = parseFloat(valorString); /* valor racional */
        return new Negociacao(date, quantidade, valor);
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
