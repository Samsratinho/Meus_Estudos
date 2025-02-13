const botao = document.getElementById("button-entrar");

        botao.addEventListener("click", (event) => {

            event.preventDefault();

            window.location.href = "paginas/tela-dos-filmes.html";
        });