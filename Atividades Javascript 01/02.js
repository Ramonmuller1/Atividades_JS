function verifica(n1){
    if(n1 < 0){
        console.log(`O número: ${n1} é negativo!`);
    } else if(n1 > 0){
        console.log(`O número: ${n1} é positivo!`);
    } else{
        console.log(`O número: ${n1} é zero!`);
    }
}

verifica(5);