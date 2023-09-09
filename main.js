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
    currentDisplay = `${savedNum} ${operator} ${currentNum}`
    calcDisplay.innerText = currentDisplay
}





const opEval = () => {
    if(currentNum == '' && operator == '*' || operator == '/'){
        currentNum = 1
    }
    else if(currentNum == '' && operator != '*'){
        currentNum = 0
    } else{
        currentNum = currentNum
    }


    if(operator === '+'){
        savedNum = +savedNum + currentNum
    }
    else if(operator === '-'){
        savedNum = +savedNum - currentNum
    }
    else if(operator === '/'){
        savedNum = +savedNum / currentNum
    }
    else if(operator === '*'){
        savedNum = +savedNum * currentNum
    }
    
}

const addToStorage = (num) => {
    storage.push(num)
    currentNum = +storage.toString().split(',').join('')
}

const clearCurrentNum = () => {
    currentNum = ''
}

const clearOperator = () => {
    operator = ''
}

const clearSavedNum = () => {
    savedNum = ''
}

const clearStorage = () => {
    storage = []
}

const setSavedNumToAnswer = () => {
    savedNum = operation(savedNum, currentNum, operator)
}

const setSavedNumToCurrentNum = () => {
    savedNum = currentNum
}

const getOperator = (op) => {
    clearStorage()
    clearCurrentNum()
    storage.push(op)
    clearStorage()
}

const setOperator = (oper) => {
    operator = oper
}

const getAnswer = () => {
    setSavedNumToAnswer()
    storage = savedNum
    clearCurrentNum()
    clearOperator()
    refreshDisplay()
}

const clearAll = () => {
    currentDisplay = 0
    clearSavedNum()
    clearCurrentNum()
    clearOperator()
    clearStorage()
    refreshDisplay()
}

numbers.forEach(e => {
    e.addEventListener('click', () => {
        addToStorage(e.innerText)
        refreshDisplay()
    })
});

operators.forEach(e => {
    e.addEventListener('click', () => {
        opEval()
        getOperator(e.innerText)
        setOperator(e.innerText)
        refreshDisplay()
    })
});

equals.addEventListener('click', getAnswer)

clear.addEventListener('click', clearAll)