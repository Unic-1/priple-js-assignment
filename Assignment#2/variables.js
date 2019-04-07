/**
 * Hoisting is the property of javascript which always moves the 
 * declaration to the starting of the scope
 * 
 * Hoisting only moves the declaration and not initialization
 * 
 */
function sampleHoisting() {
    // Initialize variable before declaration
    x = 'Hello World'

    // Use variable before declaration
    console.log(x)
    
    // The declaration will be moved to the begining of the scope while interpretation
    var x;

    // y will be undefined sice it has not been initialized
    console.log(y)

    // Since we are initializing the variable hoisting doesnt' work here
    var y = 'Hello World!!!!!!!!'
}

sampleHoisting()


/**
 * This function demonstrates that var is function scoped.
 * If you declare a variable using var keyword then the variable
 * is visible throught the function. But it cannot be accessed outside
 * the function.
 */
function sampleVar() {
    var num = 10; // Defining num variable

    if (num % 2 === 0) { // Check if num is divisible by 2
        var isEven = true; // Define a variable to store the state if the num is even
        console.log('Even:', isEven) // Print the state
    } else {
        var isEven = false; // Define a variable to store the state if the num is odd
        console.log('Even:', isEven) // Print the state
    }

    // Even though the variable was declared inside the scope of if statement
    // it is accessible through out the function after declaration
    console.log('Even:', isEven)
}

sampleVar();
// The variable is not accessible outside the function scope
console.log('Even:', isEven)


/**
 * This function demonstrates that let is block scoped.
 * If you declare a variable using let keyword then the variable
 * is visible only within the block it is declared. 
 */
function sampleLet() {
    // Block 1
    {
        let num = 10; // Define num inside block 1

        if (num % 2 === 0) { // Check if num is divisible by 2
            let isEven = true; // Define a variable to store the state if the num is even
            console.log('Even:', isEven) // Print the state
        } else {
            let isEven = false; // Define a variable to store the state if the num is odd
            console.log('Even:', isEven) // Print the state
        }

        // Since let is block scoped 'isEven' will not be visible to block 1 
        // scope hence this line will trigger an error  
        console.log('Even:', isEven)
    }
    // Since let is block scoped 'num' will not be visible to the function block
    // scope hence this line will trigger an error
    console.log('Num:', num);
}

sampleLet()


/**
 * This function demonstrates that const stops the valiable from changing its' value .
 * If you declare a variable using const keyword then the variable
 * value cannot be modified
 */
function sampleConst() {
    const num = 10; // Define num inside block 1

    // Since const will not let you change the value this line will trigger an error
    num = 11
    console.log('NUM:', num)

    const arr = [0, 2];

    // This line is not valid since here we are changing the reference
    // of the array stored in the variable
    arr = [1, 4, 5];

    // This is valid since we are not changing the reference to the array
    // but we are changing the array data which does not violates the constriant
    // put by const keyword
    arr.push(4);
    console.log(arr)

    // Similar to push pop is also valid
    arr.pop()
    console.log(arr)


    const obj = {
        movie: 'Avengers - Infinity War'
    }

    // This line is not valid since here we are changing the reference
    // of the object stored in the variable
    obj = {
        movie: 'Iron man'
    }

    // This is valid since we are not changing the reference to the object
    // but we are changing the object data which does not violates the 
    // constriant put by const keyword
    obj.movie = 'Avengers - End Game'
    console.log(obj)

}

sampleConst();