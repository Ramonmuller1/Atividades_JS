let n1 = 2, n2 = 5, n3 = 9, m, n

if ( n1 >= (n2 + n3)){
    
    if (n2 > n3){
        m = n2, n = n3
    }
    else {
        m = n3, n = n2
    }
console.log( n1, m, n)
}

else if ( n2 >= ( n1 + n3)){
    if (n1 > n3){
        m = n1, n = n3
    }
    else {
        m = n3, n = n1
    }
console.log( n2, m, n)
}

else {
    if (n1 > n2){
        m = n1, n = n2
    }
    else {
        m = n2, n = n1
    }
console.log( n3, m, n)
}