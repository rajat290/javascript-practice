function checkArgumet(arg){
    if (typeof arg !== 'string'){
        throw new Error ('invalid argument : must be a string')
    }
}