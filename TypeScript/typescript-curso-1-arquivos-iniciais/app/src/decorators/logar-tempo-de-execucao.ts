export function logarTempoDeExecucao(){
    return function(
        target: any, /* pode ser um construtor ou um prototype da classe */
        propertyKey: string, /* nome do metodo que foi decorado como string*/
        descriptor: PropertyDescriptor/* referencia para o meotodo original */
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(){
            const t1 = performance.now();
            const retorno = metodoOriginal();
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1 - t2)/ 1000}, segundos`);
            retorno
        }

        return descriptor;
    }
}