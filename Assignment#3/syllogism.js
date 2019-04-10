function syllogismSocrates() {
    let name = ['Socrates', 'Jhon', 'Ruby', 'Danny']
    let isMan = false

    if(name.includes('Socrates')) {
        isMan = true
        console.log(name.join()+' are men')
    } else {
        isMan = false
        console.log(name.join()+' are not men')
    }

    if(isMan) {
        console.log('Since all of them are men they are mortal.')
    } else {
        console.log('Since all of them are not men they are immortal.')
    }
}

syllogismSocrates()

function syllogismCake() {
    let isChocolate = false

    if(isChocolate) {
        console.log('Cake is Chocolate')
    } else {
        console.log('Cake is Vanilla')
    }
}

syllogismCake()
