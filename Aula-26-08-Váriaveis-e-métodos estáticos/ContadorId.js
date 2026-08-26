class ContadorId {
    static id = 1

    constructor(nome) {
        this.nome = nome
        this.id = ContadorId.id

        ContadorId.id++
    }
}

const user1 = new ContadorId("John")
const user2 = new ContadorId("Wick")
const user3 = new ContadorId("Maria")


console.log(user1)
console.log(user2)
console.log(user3)
console.log(ContadorId)