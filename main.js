let storageArr = [1, '', '*']
let tempStorage = []

const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const calcDisplay = document.getElementById('calcDisplay')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const del = document.getElementById('delete')
const dot = document.querySelector('.enabled')

const setSecondIndex = () => {
    storageArr[1] = tempStorage[0]
}
const setLastIndex = (op) => {
    storageArr[2] = op
}
const getNumbers = (num) => {
    if(tempStorage.toString().length <= 15){
        tempStorage.push(num)
        tempStorage = [tempStorage.toString().split(',').join('')]
    }

}
const clearSecondIndex = () => storageArr[1] = ''
const clearTempStorage = () => tempStorage[0] = ''
const getAnswer = () => {
    storageArr[1] = +storageArr[1]
    storageArr[0] = operation(storageArr[0], storageArr[1], storageArr[2])
    storageArr[0] = +storageArr[0].toFixed(2)
    refreshDisplayAns()
}
const refreshDisplayNum = () => {
    currentDisplay = storageArr[1]
    calcDisplay.innerText = currentDisplay
}
const refreshDisplayOp = () => {
    currentDisplay = `${storageArr[0]} ${storageArr[2]}`
    calcDisplay.innerText = currentDisplay
}
const refreshDisplayAns = () => {
    currentDisplay = `${storageArr[0]}`
    calcDisplay.innerText = currentDisplay
}

const calculate = () => {
    if(storageArr[1] != ''){
        getAnswer()
    }
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
    enableDot()
}

const dotControl = () => {
    if(storageArr[1] != '' || storageArr[1] == 0 && dot.className !== 'disabled'){
    storageArr[1] = `${tempStorage[0]}.`
    tempStorage[0] = `${tempStorage[0]}.`
    refreshDisplayNum()
    }
}

const disableDot = () => {
    dot.classList = 'disabled'
}

const enableDot = () => {
    dot.classList = 'enabled'
}

const checkDotClass = () => {
    if(dot.className !== 'disabled'){
        dotControl()
    }
}

const delDigit = () => {
    tempStorage = tempStorage.toString().split('')
    tempStorage.pop()
    tempStorage = [tempStorage.toString().split(',').join('')]
    setSecondIndex()
    refreshDisplayNum()
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
        enableDot()
    })
});


equals.addEventListener('click', () => {
    calculate()
    clearSecondIndex()
    clearTempStorage()
    enableDot()
})

clear.addEventListener('click', clearAll)

dot.addEventListener('click', () => {
    checkDotClass()
    disableDot()
})

del.addEventListener('click', delDigit)