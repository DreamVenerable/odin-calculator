let firstNum
let secondNum
let operator


//Adding function
const getSum = (a, b) => a + b

//Subtracting function
const getDifference = (a, b) => a - b

//Multiplication function
const getProduct = (a, b) => a * b

//Adding function
const getDivision = (a, b) => a / b

//Operation function
const operation = (a, b, c) => {
    if(c === '+'){
        return getSum(a, b)
    }
    else if(c === '-'){
        return getDifference(a, b)
    }
    else if(c === '*'){
        return getProduct(a, b)
    }
    else if(c === '/'){
        return getDivision(a, b)
    }
}