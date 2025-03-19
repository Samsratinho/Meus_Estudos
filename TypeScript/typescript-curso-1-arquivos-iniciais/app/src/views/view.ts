import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T>{
    /* só o pai tem acesso a esse elemento, mas as filhas podem tocar */
    protected elemento: HTMLElement; /* criação do elemento que vai ser jogado no hmtl */

    constructor(seletor: string){ /* nunca pode ter um obrigatorio dps do opcional */
        const elemento = document.querySelector(seletor) /* caminho do dom criado */
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. verifique.`);
        }

    }
    

    public update(model: T): void{ /* a função mesmo que upa para a tela o template */
         let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T):string;
}