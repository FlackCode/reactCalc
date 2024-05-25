import Button from "./Button"
import {BsBackspace} from 'react-icons/bs'

const Buttons = ({setScreenValue, mathArray, setMathArray, result, setResult}) => {
    const buttonTexts = ['%', 'CE', 'C', <BsBackspace/>, 
                        '1/x', 'x²', '√x', '/',
                        '7', '8', '9', '*',
                        '4', '5', '6', '-',
                        '1', '2', '3', '+',
                        '+-', '0', '.', '=']
    return (
        <div className="grid grid-cols-4 gap-2 p-2">
            {buttonTexts.map((symbol, index) => (
                <Button 
                key={index} 
                buttonText={symbol} 
                setScreenValue={setScreenValue} 
                mathArray={mathArray} 
                setMathArray={setMathArray} 
                result={result} 
                setResult={setResult}/>
            ))}
            
        </div>
    )
}

export default Buttons