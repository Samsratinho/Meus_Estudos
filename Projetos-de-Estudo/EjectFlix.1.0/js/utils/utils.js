// Substitui o conteudo da div escolhida
function renderizarDivs(id, data, template){
    const elementoDaPagina = document.getElementById(id);
    const listaDeElementos = data.map((item)=>{
        return modelarString(template, item)
    }).join("")

    elementoDaPagina.innerHTML = listaDeElementos
}

// Substitui o que está dentro de chaves no template pelo conteudo da key ``
function modelarString(template, data){
    return template.replace(/\{(.*?)}/g, (match, key) => {
        return data[key] || ""
    })
}

export { renderizarDivs }