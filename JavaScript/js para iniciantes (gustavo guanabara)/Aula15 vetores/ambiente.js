let num = [5,8,9,3]
num.push(1)/* a ordem influencia */
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


/* num[3] = 6 colocar o numero na posição
num.push(7) adicionar numero
num.length quantidade de posições
num.sort() organizar a ordem
num.indexOf() saber a posição do numero*/