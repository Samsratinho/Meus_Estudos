export abstract class View<T>{
    /* só o pai tem acesso a esse elemento, mas as filhas podem tocar */
    protected elemento: HTMLElement; /* criação do elemento que vai ser jogado no hmtl */

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor) /* caminho do dom criado */
    }

    public update(model: T): void{ /* a função mesmo que upa para a tela o template */
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T):string;
}