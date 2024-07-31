function GerarNumber(min,max){
    return Math.random() * (max - min) + min
}

console.log((GerarNumber(1,10)))