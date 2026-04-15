function min(array){
    let min = array[0];

    for (let value of array){
        if (min > value){
            min = value;
        } 
    }
    return min;
}

function max(array){
    let max = array[0];

    for (let value of array){
        if(max < value){
            max = value;
        }
    }
    return max;  
}

function range(start, stop, step = 1){
    if (stop === undefined){
        stop = start;
        start = 0
    }

    const result = []

    for (let i = start; i < stop; i+=step){
        result.push(i);
    }
    return result;
}

function zip(...arrays){
    

}

export {min, max, range}