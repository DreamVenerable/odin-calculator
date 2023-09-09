let storageArr = [1, '', '*']
let tempStorage = []

const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const calcDisplay = document.getElementById('calcDisplay')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')

const setSecondIndex = () => {
    storageArr[1] = tempStorage[0]
}
const setLastIndex = (op) => {
    storageArr[2] = op
}
const getNumbers = (num) => {
    tempStorage.push(num)
    tempStorage = [+tempStorage.toString().split(',').join('')]
}
const clearSecondIndex = () => storageArr[1] = ''
const clearTempStorage = () => tempStorage[0] = ''
const getAnswer = () => {
    storageArr[0] = operation(storageArr[0], storageArr[1], storageArr[2])
    refreshDisplayAns()
}
const refreshDisplayNum = () => {
    currentDisplay = `${storageArr[1]}`
    calcDisplay.innerText = currentDisplay
}
const refreshDisplayOp = () => {
    currentDisplay = `${storageArr[0].toFixed(2)} ${storageArr[2]}`
    calcDisplay.innerText = currentDisplay
}
const refreshDisplayAns = () => {
    currentDisplay = `${storageArr[0].toFixed(2)}`
    calcDisplay.innerText = currentDisplay
}

const calculate = () => {
    if(storageArr[1] != ''){
        getAnswer()
    }
    else{return}
}

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

const clearAll = () => {
    currentDisplay = ''
    storageArr = [1, '', '*']
    clearTempStorage()
    refreshDisplayNum()
}

const dotControl = () => {
    if(storageArr[1] != ''){
    storageArr[1] = `${tempStorage[0]}.`
    tempStorage[0] = `${tempStorage[0]}.`
    refreshDisplayNum()
    }else{return}
}


numbers.forEach(e => {
    e.addEventListener('click', () => {
        getNumbers(e.innerText)
        setSecondIndex()
        refreshDisplayNum()
    })
});

operators.forEach(e => {
    e.addEventListener('click', () => {
        calculate()
        clearSecondIndex()
        clearTempStorage()
        setLastIndex(e.innerText)
        refreshDisplayOp()
    })
});


equals.addEventListener('click', () => {
    calculate()
    clearSecondIndex()
})

clear.addEventListener('click', clearAll)

dot.addEventListener('click', dotControl)