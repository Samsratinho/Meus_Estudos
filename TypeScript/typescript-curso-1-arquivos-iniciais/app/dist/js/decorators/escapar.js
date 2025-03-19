export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map