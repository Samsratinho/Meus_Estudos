<script lang="ts">
export default{
  /* Utilizamos a opção props de um componente para receber informações do componente pai */
    props:{
      /* É possível tipar essa prop com classes do JavaScript, como String, Number, Array, Object, etc */
        texto: {type: String, required: true},
        ativa: { type: Boolean, default: false }
        
    }
}
</script>

<template>
  <!-- Criamos uma prop booleana ativa e a utilizamos em conjunto com uma sintaxe especial que o Vue fornece quando utilizamos o atributo class com o v-bind:
:class="{ 'nome-da-classe': valorBooleano }"; Uma variação dessa sintaxe é passar uma lista:
:class="['classe-estatica', { 'classe-dinamica': valorBooleano }]". -->
    <span :class="['tag', { ativa: ativa }]">
        {{ texto }}
    </span>
</template>

<style scoped>

.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}

.tag.ativa{
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}
</style>