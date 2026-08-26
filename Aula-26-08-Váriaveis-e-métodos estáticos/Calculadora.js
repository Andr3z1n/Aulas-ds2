class Calculadora {
    //MÉTODOS ESTÁTICOS
    static somar(a, b) {
        return a + b
    }

    //EXEMPLO 2
    static subtrair(a, b) {
        return a - b
    }
}

console.log(Calculadora.somar(10, 20))
console.log(Calculadora.subtrair(10, 20))