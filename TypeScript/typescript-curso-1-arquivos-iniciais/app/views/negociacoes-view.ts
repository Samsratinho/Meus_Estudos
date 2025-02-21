import { Negociacoes } from "../models/negociacoes.js"; /* importação do negociacoes onde temos nossas variaveis */

export class NegociacaoView{ /* nossa função para printar na tela o HTML das variaveis */

    private elemento: HTMLElement; /* criação do elemento que vai ser jogado no hmtl */

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor) /* caminho do dom criado */
    }

    template(model: Negociacoes): string{ /* template do HTML que vai ser printado na tela (é uma tabela) */
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
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td> 
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
                    /* Intl.DateTimeFormat().format(negociacao.data) é para vir o padrao de data do seu codigo */
                }).join('')}
            </tbody>
        `; /* .join é algo que tem q ter, PERGUNTAR SOBRE */
    }

    update(model: Negociacoes): void{ /* a função mesmo que upa para a tela o template */
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = this.template(model);
    }
}