<script lang="ts">
import Tag from './Tag.vue';

export default {
    /* Utilizamos a opção props de um componente para receber informações do componente pai */
    props: {
        /* para importar os igredientes do ConteudoPincripal e declarar eles como array e string pro ts não reclamar */
        ingredientes: { type: Array as () => string[], required: true }
    },
    /* tag importado para estilizar */
    components: { Tag }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua Lista:
        </span>
        <!-- v-if é para aparecer apenas se tiver variaveis dentro do aray ingredientes -->
        <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
            <!-- o v-for é para usar um for no vue, ele coloca todas as variaveis do aray ai dentro -->
            <li v-for="ingrediente in ingredientes" :key="ingrediente">
                <!-- prop booleana que ativa a caracteristica do tag vue -->
                <Tag :texto="ingrediente" :ativa="true" />
            </li>
        </ul>
        <!-- v-else para mostrar caso não tenha variaveis dentro do aray -->
        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icones/lista-vazia.svg" alt="icone de pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
    </section>
</template>

<style scoped>
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

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>