<script lang="ts">
import Tag from './Tag.vue';

export default{
    components:{ Tag },
    props: {
        ingrediente: { type: String, required: true}
    },
    data(){
        return{
            selecionado: false
        }
    },
    methods: {
        /* Criamos o componente IngredienteSelecionavel com o estado booleano selecionado. Com ele, conseguimos saber quando o ingrediente está selecionado ou não; */
        aoCLicar(){
            /* Cada ingrediente selecionável possui seu próprio estado: podemos mudar o valor do estado de um sem interferir no estado dos outros; */
            this.selecionado = !this.selecionado
            /* Podemos passar um estado como prop: o estado selecionado foi definido como o valor da prop ativa da Tag. Dessa forma, caso o estado mude, a prop ativa também muda e o visual da Tag irá mudar de acordo; */
            if(this.selecionado){
                /* Usamos $emit (no template) ou this.$emits (no script) para emitir um evento personalizado. O primeiro parâmetro é o nome do evento, e o segundo parâmetro (e consecutivos) é um dado JavaScript que o evento pode carregar; */
                this.$emit('adicionarIngrediente', this.ingrediente)
            } else {
                this.$emit('removerIngrediente', this.ingrediente)
            }
        }
    },
    /* É uma boa prática definir os eventos na opção emits do componente; */
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <!-- Criamos o componente IngredienteSelecionavel com o estado booleano selecionado. Com ele, conseguimos saber quando o ingrediente está selecionado ou não; -->
    <button
    class="ingrediente"
    @:click="aoCLicar"
    :aria-pressed="selecionado"
    >
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
        
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>