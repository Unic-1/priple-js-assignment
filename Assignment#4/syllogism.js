function isMortal(name) {
    if (typeof name === 'string') {
        if (name === 'Socrates') {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(isMortal('Jhon'))

function syllogismCake(flavours, isChocolate) {
    let response = flavours.filter(item => 
        typeof item === 'string' ? 
            isChocolate ? 
                item.toLowerCase() === 'chocolate'  : item.toLowerCase() !== 'chocolate' 
            : false 
    )

    return response.join()
}

console.log(syllogismCake(['vanila', 'chocolate', 8], false))