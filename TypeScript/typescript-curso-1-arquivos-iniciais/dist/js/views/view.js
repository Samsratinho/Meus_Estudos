export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); /* caminho do dom criado */
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
