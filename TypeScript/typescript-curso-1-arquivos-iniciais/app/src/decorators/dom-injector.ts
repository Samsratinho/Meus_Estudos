export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento){
                console.log(`buscando ${seletor} para injetar em ${propertyKey}`);
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}