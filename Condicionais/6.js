
let a = 1.90, p = 40, s

s = p / (a*a) 

if( s < 24.9){
    if ( s >= 18.6)
    console.log ('peso ideal')
    else {
        console.log('abaixo do peso')
    }
}

else if( s < 34.9 ){

    if( 30 < s ){
        console.log('obesidade grau I')
    }
    else{
        console.log('Levemente acima do peso')
    }
}

else{
    if( s < 40 ){
        console.log('Obesidade grau II')}
    else{
        console.log('Obesidade grau III')
    }

}


console.log ( s )




