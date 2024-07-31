let ocorrencias = 0; 
let frase = "Frase muito daoraaa"; 
let qtdLetra = "a"

 
for (let i = 0, f = frase.length; i < f; i++) { 
    if (frase[i].toLowerCase() == qtdLetra) { 
        ocorrencias++; 
    } 
} 
 
console.log(`Foram encontradas ${ocorrencias} letras "${qtdLetra}"`);