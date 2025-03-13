import { View } from "./view.js";
/* SEMPRE DEIXAR CLARO A VISIBILIDADE DOS METODOS */
export class MensagemView extends View {
    /* protected para os filgos poderen ver mas n~~ao pode mecher */
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
