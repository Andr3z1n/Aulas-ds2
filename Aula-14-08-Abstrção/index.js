//Abstração no mundo real
//Imagine um carro.

//Para dirigir um carro, você utiliza:

volante
pedais
câmbio

//📌 Exemplo 1 — Sem abstração
//Imagine que tentássemos representar absolutamente todas as características de um carro:

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "Prata",
    quantidadeDeRodas: 4,
    peso: 1300,
    altura: 1.43,
    largura: 1.78,
    comprimento: 4.63,
    tipoMotor: "Combustão",
    quantidadeCilindros: 4,
    volumeMotor: 2.0,
    tipoCombustivel: "Gasolina",
    quantidadePortas: 4
}

//Existe muita informação.

//Mas será que um sistema de estacionamento precisa conhecer todas essas informações?

//Provavelmente não.

//Exemplo 2-🧩 Abstração depende do contexto
//A mesma entidade pode possuir diferentes representações.

//Por exemplo, um Carro em um sistema de estacionamento:

class Carro {
    constructor(placa, modelo) {
        this.placa = placa
        this.modelo = modelo
    }

}

//Já em um sistema de oficina mecânica:

class Carro {
    constructor(placa, modelo, quilometragem, motor) {
        this.placa = placa
        this.modelo = modelo
        this.quilometragem = quilometragem
        this.motor = motor
    }

}

//Não existe necessariamente uma única classe Carro correta.

//📌 Exemplo 3 — Sistema de banco
//Um cliente de banco possui muitas informações.

//Porém, para um determinado sistema, podemos trabalhar com:

class Conta {
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }

}

//Não precisamos representar todos os detalhes da pessoa para trabalhar com a conta.

//⚠️ Erro comum
//❌ Confundir abstração com apagar informações
//Abstração não significa simplesmente remover informações.

//Significa selecionar aquilo que é relevante para o problema.

//Por exemplo:

class Aluno {
    constructor(nome, matricula, curso) {
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
    }

}

//Se o sistema é responsável por controlar notas, talvez seja necessário adicionar outras informações.

//A abstração depende dos requisitos do sistema.

//📌 Abstração e Classes
//As classes são uma ferramenta importante para implementar abstrações.

//Podemos representar:

//Mundo real
//     ↓
//Identificar informações importantes
//     ↓
//Identificar comportamentos importantes
//     ↓
//Criar uma classe
//     ↓
//Criar instâncias