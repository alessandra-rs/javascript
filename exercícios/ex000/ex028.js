let ficha = {
nome:'Alessandra', 
sexo:'F', 
peso:'47.5', 
engordar(p){
    console.log('Engordou')
    this.peso += p
}
}

ficha.engordar(2)
console.log(`${ficha.nome} pesa ${ficha.peso}Kg.`)