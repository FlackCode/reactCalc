import Buttons from "./Buttons"
import Menu from "./Menu"
import Screen from "./Screen"

const Calc = () => {
    return (
        <div className="bg-gray-700 text-white h-3/5 w-1/5 rounded-xl flex flex-col justify-between">
            <Menu/>
            <Screen/>
            <Buttons/>
        </div>
    )
}
export default Calc