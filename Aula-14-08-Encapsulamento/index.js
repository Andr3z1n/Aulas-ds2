//📌 Exemplo 1: Conta Bancária
//Imagine uma conta bancária:

class Conta {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

}

//Agora seria possível fazer:

const conta = new Conta("João", 1000)

conta.saldo = -50000

//Isso representa um problema.

//O código externo conseguiu modificar diretamente o saldo para um valor inválido.

//📌 Exemplo 2: Conta Bancária
//Imagine uma conta bancária:

class Conta {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

}

//Agora seria possível fazer:

const conta = new Conta("João", 1000)

conta.saldo = -50000

//Isso representa um problema.

//O código externo conseguiu modificar diretamente o saldo para um valor inválido.

//📌 Exemplo 3 — Tentando acessar uma propriedade privada
class Conta {

    #saldo

    constructor(saldo) {
        this.#saldo = saldo
    }

}

const conta = new Conta(1000)

console.log(conta.#saldo)

//Esse código gera erro.

//O atributo privado só pode ser utilizado dentro da própria classe.

//🧠 Por que isso é importante?
//Observe:

conta.#saldo

//Não podemos acessar diretamente.

//Mas podemos criar uma ação:

consultarSaldo()

//Assim, a classe decide como o dado será disponibilizado.

//📌 Exemplo 4 — Encapsulando o saldo
class Conta {

    #saldo

    constructor(titular, saldo) {
        this.titular = titular
        this.#saldo = saldo
    }

    consultarSaldo() {
        return this.#saldo
    }

}

//Agora:

const conta = new Conta("João", 1000)

console.log(conta.consultarSaldo())

Resultado:

1000

//O saldo continua privado.

//📌 Exemplo 5 — Controlando alterações
//Podemos criar uma action para realizar um depósito:

class Conta {

    #saldo

    constructor(titular, saldo) {
        this.titular = titular
        this.#saldo = saldo
    }

    depositar(valor) {
        this.#saldo = this.#saldo + valor
    }

    consultarSaldo() {
        return this.#saldo
    }

}

//Agora o código externo não altera diretamente o saldo.

//Ele solicita uma operação:

conta.depositar(500)

//⚠️ Criando regras
//O encapsulamento permite que a classe controle as alterações.

//Por exemplo, não queremos permitir depósitos negativos.

class Conta {

    #saldo

    constructor(saldo) {
        this.#saldo = saldo
    }

    depositar(valor) {

        if (valor > 0) {
            this.#saldo = this.#saldo + valor
        }

    }

    consultarSaldo() {
        return this.#saldo
    }

}

//Agora a própria classe controla a regra.

//📌 Público x Privado
//Podemos visualizar assim:

                 CONTA
//        ┌─────────────────────┐
//        │                     │
//        │  #saldo             │
//        │  Dado privado       │
//        │                     │
//        │  depositar()        │ ← Público
//        │  consultarSaldo()   │ ← Público
//        │                     │
//        └─────────────────────┘
//                  ↑
//                  │
//          acesso controlado

//O código externo não precisa conhecer como o saldo é armazenado internamente.

//🧠 Encapsulamento na prática
//Sem encapsulamento:

conta.saldo = -1000

//Com encapsulamento:

conta.depositar(500)

//A diferença é importante.

//No segundo caso, a classe pode decidir:

//se o valor é válido;
//como o saldo será alterado;
//quais regras devem ser respeitadas.
//📌 Exemplo 6 — Conta completa

class Conta {

    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular
        this.#saldo = saldoInicial
    }

    depositar(valor) {

        if (valor <= 0) {
            return false
        }

        this.#saldo += valor

        return true
    }

    sacar(valor) {

        if (valor <= 0 || valor > this.#saldo) {
            return false
        }

        this.#saldo -= valor

        return true
    }

    consultarSaldo() {
        return this.#saldo
    }

}

//Uso:

const conta = new Conta("Maria", 1000)

conta.depositar(500)
conta.sacar(200)

console.log(conta.consultarSaldo())

Resultado:

1300

//⚠️ Erros comuns
//❌ Tentar acessar atributo privado diretamente
conta.#saldo

//Isso não é permitido fora da classe.

//❌ Criar um atributo privado e nunca utilizá-lo
//class Conta {

    #saldo

//}

//O encapsulamento deve existir para proteger algum estado ou regra importante.

//❌ Achar que encapsulamento significa esconder tudo
//Não.

//Algumas informações podem continuar públicas:

conta.titular

//Enquanto informações sensíveis podem ser privadas:

conta.#saldo

//O objetivo é controlar o acesso, não simplesmente esconder todos os atributos.