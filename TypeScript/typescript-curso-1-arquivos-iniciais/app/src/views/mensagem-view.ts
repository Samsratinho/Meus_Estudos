import { View } from "./view.js";
/* SEMPRE DEIXAR CLARO A VISIBILIDADE DOS METODOS */
export class MensagemView extends View <string>{
    /* protected para os filgos poderen ver mas n~~ao pode mecher */
    protected template(model: string):string {
        return`
            <p class="alert alert-info">${model}</p>
        `
    }

}