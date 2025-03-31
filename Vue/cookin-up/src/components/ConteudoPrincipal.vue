<script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

const ingredientes = ref<string[]>([]);

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
}
</script>

<!-- <script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';


export default {
    data() {
        return{
            ingredientes: [] as string [] ,
        };
    },

    components: { SelecionarIngredientes, SuaLista },
    methods: {
      adicionarIngrediente(ingrediente: string){
        this.ingredientes.push(ingrediente)
      },
      removerIngrediente(ingrediente: string) {
            this.ingredientes = this.ingredientes.filter(ing => ing !==ingrediente);
        }
    }
}
</script> -->

<template>
    <main class="conteudo-principal">
<!-- conteudo principal é pai de SuaLista (infredientes para passar o conteudo dos arrays) -->
       <SuaLista :ingredientes="ingredientes"/>
<!-- conteudo principal é pai do selecionar ingredientes -->
        <SelecionarIngredientes 
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente"
        />
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



