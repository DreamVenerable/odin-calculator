let savedNum = ''
let currentNum = ''
let operator = ''
let currentDisplay = 0
let storage = []


const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const calcDisplay = document.getElementById('calcDisplay')


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


//Display refresh
const refreshDisplay = () => {
    calcDisplay.innerText = currentDisplay
}



numbers.forEach(e => {
    e.addEventListener('click', () => {
        addToStorage(e.innerText)
        refreshDisplay()
    })
});

operators.forEach(e => {
    e.addEventListener('click', () => {
        savedNum = +storage.toString().split(',').join('')
        getOperator(e.innerText)
        setOperator(e.innerText)
        refreshDisplay()
    })
});


const addToStorage = (num) => {
    storage.push(num)
    currentNum = +storage.toString().split(',').join('')
    currentDisplay = `${savedNum} ${operator} ${currentNum}`
}

const getOperator = (op) => {
    storage = []
    currentNum = ''
    storage.push(op)
    currentDisplay = `${savedNum} ${op}`
    storage = []
}

const setOperator = (oper) => {
    operator = oper
}


const getAnswer = () => {
    savedNum = operation(savedNum, currentNum, operator)
    currentDisplay = `${savedNum}`
    refreshDisplay()
    storage = savedNum
}

const clearAll = () => {
    savedNum = ''
    currentNum = ''
    operator = ''
    currentDisplay = 0
    storage = []
    refreshDisplay()
}

equals.addEventListener('click', getAnswer)

clear.addEventListener('click', clearAll)
