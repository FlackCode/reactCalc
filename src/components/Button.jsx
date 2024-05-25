const Button = ({ buttonText, setScreenValue, mathArray, setMathArray, result, setResult }) => {
    let joinedArray = ''
    const updateDisplay = () => {
        setScreenValue((prev) => {
            switch (buttonText) {
                case 'CE':
                case 'C':
                    setMathArray([])
                    console.log(mathArray)
                    return 0
                case '=':
                    return result
                case '+': 
                    return "+"
                case '-': 
                    return "-"
                case '/':
                    return "/"
                case '*':
                    return "*"
                default:
                    if(prev == 0 || prev == "+") {
                        return buttonText
                    } else {
                        return prev + buttonText
                    }
            }
        })
    }
    const updateValues = () => {
        if ('123456789+-/*'.includes(buttonText)) {
            setMathArray((prevArray) => [...prevArray, buttonText])
        } else if ('='.includes(buttonText)) {
            joinedArray = mathArray.join('')
            console.log("Joined array: ", joinedArray)
            const operators = ['+', '-', '*', '/']
            const operatorIndexes = []
            for ( let i = 0; i < joinedArray.length; i++ ) {
                if (operators.includes(joinedArray[i])) {
                    operatorIndexes.push(i)
                }
            }
            console.log(operatorIndexes)
            if(operatorIndexes.length > 0) {
                const operatorIndex = operatorIndexes[0]
                const leftNumber = parseFloat(joinedArray.slice(0, operatorIndex))
                const operator = joinedArray[operatorIndex]
                const rightNumber = parseFloat(joinedArray.slice(operatorIndex + 1))

                let calcResult

                switch(operator) {
                    case '+':
                        calcResult = leftNumber + rightNumber;
                        break;
                    case '-':
                        calcResult = leftNumber - rightNumber;
                        break;
                    case '*':
                        calcResult = leftNumber * rightNumber;
                        break;
                    case '/':
                        calcResult = leftNumber / rightNumber;
                        break;
                    default:
                        calcResult = 'Error'
                }
                setResult(calcResult)
                setScreenValue(calcResult)
                setMathArray(String(calcResult))
            }
            
        }
    }
    const handleButtonClick = () => {
        updateDisplay()
        updateValues()
    }

    return (
        <button className="flex justify-center items-center font-semibold text-xl bg-gray-800 py-4 hover:bg-gray-600 cursor-default"
        onClick={handleButtonClick}>
            <p>{buttonText}</p>
        </button>
    )
}

export default Button