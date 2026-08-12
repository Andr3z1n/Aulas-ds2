//Classe
class Pessoa{ constructor(nome, idade) {
     this.nome = nome 
     this.idade = idade 
} 

//Ação
apresentar() {
     return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`
    } }

const andre = new Pessoa("Andre", 16) 

//Actions
console.log(andre.apresentar())