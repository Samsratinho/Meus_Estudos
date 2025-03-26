<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
/* só importa dentro do export default com o component: { } */
export default {
    data() {
        return{
            ingredientes: ['Alho', 'Manteiga' , 'Orégano']
        }
    },
/* para pode importar o selecionar ingredientes  */
    components: { SelecionarIngredientes }
}

</script>

<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">
                Sua Lista:
            </span>
<!-- v-if é para aparecer apenas se tiver variaveis dentro do aray ingredientes -->
            <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
<!-- o v-for é para usar um for no vue, ele coloca todas as variaveis do aray ai dentro -->
                <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
                    {{ ingrediente }}
                </li>
            </ul>
<!-- v-else para mostrar caso não tenha variaveis dentro do aray -->
            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/images/icones/lista-vazia.svg" alt="icone de pesquisa">
                Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        </section>
<!-- conteudo principal é pai do selecionar ingredientes -->
        <SelecionarIngredientes />
    </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingrediente {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
    transition: 0.2s;
    color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>



