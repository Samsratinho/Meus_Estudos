export abstract class View<T>{
    /* só o pai tem acesso a esse elemento, mas as filhas podem tocar */
    protected elemento: HTMLElement; /* criação do elemento que vai ser jogado no hmtl */
    private escapar= false;

    constructor(seletor: string, escapar?: boolean){ /* nunca pode ter um obrigatorio dps do opcional */
        const elemento = document.querySelector(seletor) /* caminho do dom criado */
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. verifique.`);
        }
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void{ /* a função mesmo que upa para a tela o template */
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S/]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T):string;
}