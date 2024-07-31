let pessoa = {
    nome: "Minguel",
    peso: 70,     
    altura: 1.75, 

    calcularIMC: function() {
        return this.peso / (this.altura * this.altura);
    }
};

let imc = pessoa.calcularIMC();

console.log(`${pessoa.nome} tem IMC de ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}