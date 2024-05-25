import { useState } from "react"
import Buttons from "./Buttons"
import Menu from "./Menu"
import Screen from "./Screen"

const Calc = () => {
    const [screenValue, setScreenValue] = useState(0)
    const [mathArray, setMathArray] = useState([])
    const [result, setResult] = useState('')

    return (
        <div className="bg-gray-700 text-white h-3/5 w-1/5 rounded-xl flex flex-col justify-between">
            <Menu/>
            <Screen screenValue={screenValue}/>
            <Buttons setScreenValue={setScreenValue} mathArray={mathArray} setMathArray={setMathArray} result={result} setResult={setResult}/>
        </div>
    )
}
export default Calc