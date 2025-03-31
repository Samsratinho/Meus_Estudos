<!-- lang ts para poder estar rodando o typescript -->
 <script lang="ts"> 
/* import de requisições http */
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/insterfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

    export default {
        data(){
            return {
/* tipagem para o typescrip não dar trabalho */
                categorias: [] as ICategoria[]
            }
        },
/* para obter a requisição http com async, primeiro 
carrega o "caregorias:[]" depois o "created()" */
        async created() {
            this.categorias = await obterCategorias();
        },
        components: { CardCategoria, BotaoPrincipal },
        emits: ['adicionarIngrediente', 'removerIngrediente']
    }
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>
        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
<!-- v-for para mostrar todas as categorias -->
            <li v-for="categoria in categorias" :key="categoria.nome">
              <!--  possível escutar o evento diretamente no componente pai, escrevendo v-on:nome-do-evento (ou @nome-do-evento) no consumo do componente filho; -->
            <CardCategoria 
            :categoria="categoria"
            @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
            @remover-ingrediente="$emit('removerIngrediente', $event)"
            />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: consideramos que você tem em casa sal, pimenta e água
        </p>

        <BotaoPrincipal texto="Buscar receitas!" />
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}

</style>