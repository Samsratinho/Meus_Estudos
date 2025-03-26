import type ICategoria from "@/insterfaces/ICategoria";
/* REQUISIÇÃO HTTP PARA ISSO USAR AS FUNÇÕES ASYNC E AWAIT FETCH
DE ESPERAR PROMESSA PARA RETORNAR O JSON */
export async function obterCategorias(){
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

  const categorias: ICategoria[] = await resposta.json();
  
   return categorias
}