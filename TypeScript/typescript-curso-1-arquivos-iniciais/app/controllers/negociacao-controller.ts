import { DiaDaSemana } from '../enums/dia-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacoes-view.js';

export class NegociacaoController { /* declaração de propriedades privadas */
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView('#negociacoesView');  /* Instância da classe NegociacaoView para renderizar a view */
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor() { /* puxando do html, buscando elemntos do dom */
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes); /* Atualiza a view com as negociações (inicialmente vazia) */
    }

    public adiciona(): void { /* função para adicionar valores */
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUltil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao); /* Adiciona a nova negociação à lista de negociações */
        this.limparFormulario();
        this.atualizaView();
    }
    

    private ehDiaUltil(data: Date) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }    

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ',')); /* para em vez de a data funcionar assim: 1111-11-11, ela fica escrita assim: 1111,11,11*/
        const quantidade = parseInt(this.inputQuantidade.value); /* valor de inteiros */
        const valor = parseFloat(this.inputValor.value); /* valor racional */
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void { /* retirar os valores da tela */
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes); /* Atualiza a view com a lista de negociações atualizada */
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
