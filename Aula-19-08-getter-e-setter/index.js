class Conta {

    #saldo

    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    //Adiciona o valor
    set depositar(valor) {
        if(valor >= 500) {
            this.#saldo = this.#saldo + valor
        }
    }
    //Visualiza o valor
    get valor() {
        return this.#saldo
    }
}

const conta = new Conta("John", 1000)
contar.depositar = 800
console.log(conta.saldo)