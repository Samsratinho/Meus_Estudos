import { DiaDaSemana } from '../enums/dia-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacoes-view.js';

export class NegociacaoController { /* declaração de propriedades privadas */
    private inputData: HTMLInputElement; /* no ts, qualquer elemento pode ser null, ent pode isso colocamos strictnullchecks e colocamos ele realmente como htmlinputelement */
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView('#negociacoesView');  /* Instância da classe NegociacaoView para renderizar a view */
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor() { /* puxando do html, buscando elemntos do dom */
        this.inputData = document.querySelector('#data') as HTMLInputElement;/* a variavel pode ser htmlinputelement ou null, então explicitamos que ela é htmlinputelement */
        this.inputQuantidade = document.querySelector('#quantidade')as HTMLInputElement;
        this.inputValor = document.querySelector('#valor')as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes); /* Atualiza a view com as negociações (inicialmente vazia) */
    }

    public adiciona(): void { /* função para adicionar valores */
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUltil(negociacao.data)){ /* if para funcionar em apenas dias uteis */
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao); /* Adiciona a nova negociação à lista de negociações */
        this.limparFormulario();
        this.atualizaView();
    }
    

    private ehDiaUltil(data: Date) { /* função para dias uteis */
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
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
