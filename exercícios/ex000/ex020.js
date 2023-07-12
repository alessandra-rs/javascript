let num = [1,3,2]
num[3] = 6
num.push(5)
num.sort()

console.log(`Os elementos do vetor são: ${num}`)
console.log(`O vetor tem ${num.length} índices.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
