import { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import CalcHead from "./components/CalcHead";
import CalcKeyboard from "./components/CalcKeyboard";
import { useTheme } from "./components/themeProvider";
import { getColor } from "./utils/getColor";
import type { InputType } from "./type/input";

export default function App() {
    const theme = useTheme();
    const [input, setInput] = useState<string[]>([]);
    function handleInput(e: InputType) {
        if (e === "reset") {
            setInput([]);
            return;
        }
        const lastElm = input[input.length - 1]??undefined;
        if (e === "enter" && !Number.isNaN(Number(lastElm))) {
            const changeX = input.map(d => {
                if (d === "x") {
                    return "*"
                }
                return d
            })
            const result = Function("return " + changeX.join(""))();
            setInput([`${result}`]);
            return;
        }

        
        if (
            e === "del" &&
            input.length > 0 &&
            !["+", "-", "x", "/"].includes(lastElm)
        ) {
            setInput((prev) => {
                if (lastElm?.length === 1) {
                    prev.pop();
                    return [...prev];
                }
                prev[prev.length - 1] = prev[prev.length - 1].slice(0, -1);
                return [...prev];
            });
            return;
        }

        if (e === "del" && lastElm?.length === 1) {
            setInput((prev) => {
                prev.pop();
                return [...prev];
            });
        }
        if (
            (input.length === 0 || ["+", "-", "x", "/"].includes(lastElm)) &&
            Number(e) < 10 &&
            Number(e) >= 0
        ) {
            setInput((prev) => {
                prev.push(e);
                return [...prev];
            });
            return;
        }

        if (
            (!Number.isNaN(Number(lastElm)) &&
                Number(e) < 10 &&
                Number(e) >= 0)
        ) {
            
            setInput((prev) => {
                prev[prev.length - 1] = prev[prev.length - 1] + e;
                return [...prev];
            });

            return;
        }
        if (!Number.isNaN(Number(lastElm)) && !lastElm.includes(".") && e === "." && input.length > 0) {
            setInput(prev => {
                prev[prev.length - 1] = prev[prev.length - 1] + e
                return [...prev]
            })
            return;
        }

        if (
            ["+", "-", "x", "/"].includes(e) &&
            !(["+", "-", "x", "/"].includes(lastElm)) && input.length > 0
        ) {
            console.log(["+", "-", "x", "/"].includes(lastElm))
            setInput((prev) => [...prev, e]);
            return;
        }
    }
    
    return (
        <main
            className={`w-screen h-screen overflow-hidden transition-all ${getColor(
                theme,
                "bg"
            )} flex justify-center items-center px-8`}
        >
            <div className="flex flex-col gap-4 md:w-[30rem] w-full h-full py-8 justify-center">
                <CalcHead />
                <CalcDisplay input={input} />
                <CalcKeyboard handleInput={handleInput} />
            </div>
        </main>
    );
}
