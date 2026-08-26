//class Produto {
//    static marca = "Positivo" // Váriavel estática
    
//    constructor(nome, preco) {
//        this.nome = nome
//        this.preco = preco
//    }
//}

//const cadeira = new Produto("Cadeira Econômica", 80)
//const mesa = new Produto("Mesa Econômica", 150)

//console.log(Produto.marca)

//OUTRO EXEMPLO 

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    aplicarDesconto(valor) {
        this.preco -= this.preco / valor
    }
}

const cadeira = new Produto("Cadeira Azul", 100)

console.log(cadeira)
console.log(cadeira.preco)

cadeira.aplicarDesconto(10)
console.log(cadeira)