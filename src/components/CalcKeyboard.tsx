import { InputType } from "../type/input";
import { getColor } from "../utils/getColor";
import { useTheme } from "./themeProvider";

export default function CalcKeyboard({
    handleInput,
}:{
    handleInput: (e: InputType) => void
}) {
    const theme = useTheme()
    return <div className={`w-full md:flex-grow-0 flex-grow grid grid-cols-4 md:p-8 p-6 rounded-xl gap-4 md:gap-4 text-xl font-bold ${getColor(theme, "bg-dark")}`}>
        <button onMouseDown={()=>handleInput("7")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>7</button>
        <button onMouseDown={()=>handleInput("8")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>8</button>
        <button onMouseDown={()=>handleInput("9")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>9</button>
        <button onMouseDown={()=>handleInput("del")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-special-btn")}`}>DEL</button>
        <button onMouseDown={()=>handleInput("4")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>4</button>
        <button onMouseDown={()=>handleInput("5")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>5</button>
        <button onMouseDown={()=>handleInput("6")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>6</button>
        <button onMouseDown={()=>handleInput("+")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>+</button>
        <button onMouseDown={()=>handleInput("1")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>1</button>
        <button onMouseDown={()=>handleInput("2")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>2</button>
        <button onMouseDown={()=>handleInput("3")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>3</button>
        <button onMouseDown={()=>handleInput("-")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>-</button>
        <button onMouseDown={()=>handleInput(".")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>.</button>
        <button onMouseDown={()=>handleInput("0")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>0</button>
        <button onMouseDown={()=>handleInput("/")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>/</button>
        <button onMouseDown={()=>handleInput("x")} className={`flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-btn")}`}>x</button>
        <button onMouseDown={()=>handleInput("reset")} className={`col-span-2 flex items-center justify-center p-2 rounded-lg border-b-4 ${getColor(theme, "theme-special-btn")}`}>RESET</button>
        <button onMouseDown={()=>handleInput("enter")} className={`col-span-2 flex items-center justify-center p-2 rounded-lg border-b-4 border-neutral-400 ${getColor(theme, "theme-enter-btn")}`}>=</button>
    </div>
}