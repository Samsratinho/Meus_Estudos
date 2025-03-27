<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

/* só importa dentro do export default com o component: { } */
export default {
    data() {
        return{
            ingredientes: ['Alho', 'Manteiga' , 'Orégano']
        }
    },
/* para pode importar o selecionar ingredientes  */
    components: { SelecionarIngredientes, SuaLista }
}
</script>

<template>
    <main class="conteudo-principal">
<!-- conteudo principal é pai de SuaLista (infredientes para passar o conteudo dos arrays) -->
       <SuaLista :ingredientes="ingredientes"/>
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



