function sum(array){
    return(array.reduce((addition, value) => addition + value));
}

function sumOdds(array){
    return(array.filter((value) => value % 2 !==0).reduce((addition, value) => addition + value, 0))

}

function product(array){
    return(array.reduce((addition, value) => addition * value))
}

export { sum, sumOdds, product};