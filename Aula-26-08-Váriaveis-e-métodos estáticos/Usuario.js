class Usuario {
    static quantidade = 0
    
    constructor(nome) {
        this.nome = nome

        //ao chamar uma nova instância
        // seria adicionado +1 em static quantidade
        Usuario.quantidade++
    }
}