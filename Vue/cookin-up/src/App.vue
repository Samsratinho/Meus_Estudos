<!-- app vue é pai de todos os componentes -->
<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
/* tudo q for importado aqui e usado como export default vai para o html */
/* tem q colocar o nome da pasta no template, como componente e como importação para funcionar */
export default {
  components: { Banner, ConteudoPrincipal }
}
</script>

<template>

  <Banner />

  <ConteudoPrincipal />

</template>

<!--  scoped é apenas para este css, posso usar outro css para pode colocar em todos os lugares, como a pai e filho  -->
<style scoped> 

</style>