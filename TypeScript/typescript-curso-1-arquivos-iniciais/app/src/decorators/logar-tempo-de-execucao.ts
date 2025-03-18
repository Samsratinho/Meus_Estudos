export function logarTempoDeExecucao(emSegundos: boolean = false){  
    return function(
        target: any, /* pode ser um construtor ou um prototype da classe */
        propertyKey: string, /* nome do metodo que foi decorado como string*/
        descriptor: PropertyDescriptor/* referencia para o meotodo original */
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1 - t2)/divisor}, ${unidade}`);
            retorno
        }

        return descriptor;
    }
}