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
                        <td>${this.formatar(negociacao.data)}</td> 
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().
            format(data);
    }
}
