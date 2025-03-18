import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js"; /* importação do negociacoes onde temos nossas variaveis */
import { View } from "./view.js";

export class NegociacaoView extends View <Negociacoes>{ /* nossa função para printar na tela o HTML das variaveis */
    @escapar
    protected template(model: Negociacoes): string{ /* template do HTML que vai ser printado na tela (é uma tabela) */
        return `
        <table class="table table-houver table-bordered">
            <therad>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </therad>
            <tbody>
                ${model.lista().map(negociacao => { /* função que adiciona as variaveis na tabela (data, quantidade, valor) */
                    return`
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td> 
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
                    /* Intl.DateTimeFormat().format(negociacao.data) é para vir o padrao de data do seu codigo */
                }).join('')}
            </tbody>
        `; /* .join é algo que tem q ter, PERGUNTAR SOBRE */
    }


    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().
        format(data)
    }
}