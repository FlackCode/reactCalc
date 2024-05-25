import Button from "./Button"
import {BsBackspace} from 'react-icons/bs'

const Buttons = () => {
    return(
        <div className="grid grid-cols-4 gap-2 p-2">
            <Button buttonText={"%"}/>
            <Button buttonText={"CE"}/>
            <Button buttonText={"C"}/>
            <Button buttonText={<BsBackspace/>}/>
            <Button buttonText={"1/x"}/>
            <Button buttonText={"x²"}/>
            <Button buttonText={"√x"}/>
            <Button buttonText={"/"}/>
            <Button buttonText={"7"}/>
            <Button buttonText={"8"}/>
            <Button buttonText={"9"}/>
            <Button buttonText={"*"}/>
            <Button buttonText={"4"}/>
            <Button buttonText={"5"}/>
            <Button buttonText={"6"}/>
            <Button buttonText={"-"}/>
            <Button buttonText={"1"}/>
            <Button buttonText={"2"}/>
            <Button buttonText={"3"}/>
            <Button buttonText={"+"}/>
            <Button buttonText={"+-"}/>
            <Button buttonText={"0"}/>
            <Button buttonText={"."}/>
            <Button buttonText={"="}/>
        </div>
    )
}

export default Buttons