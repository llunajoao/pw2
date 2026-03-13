function verifyTriangle(a, b, c){
    if(a+b>c && a+c>b && b+c>a){
        if(a === b && b===c){
            console.log('Equilátero')
        }
        else if(a===b || a===c || b===c) {
            console.log('Isósceles')

        }
        else {
            console.log('Escaleno')
        }
    } else {
        console.log('none')
    }
}

export {verifyTriangle}