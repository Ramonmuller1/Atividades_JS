function contarPalavrasUnicas(frase) {

    let palavras = frase.toLowerCase().match(/\w+/g);
    let contagem = {};

    palavras.forEach(palavra => {
        contagem[palavra] = contagem[palavra] ? contagem[palavra] + 1 : 1;
    });

    return Object.keys(contagem).length;
}

let frase = "Testando... Test ando";
let numeroPalavrasUnicas = contarPalavrasUnicas(frase);
console.log(`Número de palavras únicas na frase: ${numeroPalavrasUnicas}`);