import { View } from "./view.js";
export class NegociacaoView extends View {
    template(model) {
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
                ${model.lista().map(negociacao => {
            return `
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
}
