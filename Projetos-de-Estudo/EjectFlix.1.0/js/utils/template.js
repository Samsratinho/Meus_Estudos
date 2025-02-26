// Aqui você irá criar os templates das divs que irão se repetir
const itemCarrosselFilmes = `
    <div class="carousel-cell">
        <div class="container-item-img">
            <img src="{img}" alt="Imagem do item" class="item-img" />
            <div class="capa">
                <p class="titulo">Titulo</p>
                <p class="generos">Aventura, Fantasia</p>
                <p class="ano-lancamento">2007</p>
            </div>
        </div>
    </div>
`

// Exporte todos os templates
export { itemCarrosselFilmes }