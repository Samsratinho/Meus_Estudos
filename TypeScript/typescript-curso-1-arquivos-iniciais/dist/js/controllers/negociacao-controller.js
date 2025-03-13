import { DiaDaSemana } from '../enums/dia-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView('#negociacoesView'); /* Instância da classe NegociacaoView para renderizar a view */
        this.mensagemView = new MensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes); /* Atualiza a view com as negociações (inicialmente vazia) */
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUltil(negociacao.data)) { /* if para funcionar em apenas dias uteis */
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao); /* Adiciona a nova negociação à lista de negociações */
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUltil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes); /* Atualiza a view com a lista de negociações atualizada */
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
