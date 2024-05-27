import type { Theme } from "../type/theme";
import { getColor } from "../utils/getColor";
import { useSetTheme, useTheme } from "./themeProvider";

export default function CalcHead() {
    const theme = useTheme()
    const setTheme = useSetTheme()
    return (
        <div className={`flex justify-between items-center w-full py-4 ${getColor(theme, "text-color-primary")}`}>
            <h1 className={`font-mono font-black text-3xl tracking-wide`}>calc</h1>
            <div className="flex gap-8 justify-between items-end">
                <span className="font-black tracking-wide py-1 text-xs">THEME</span>
                <div className="flex flex-col w-20 gap-1">
                    <p className="flex w-full justify-between px-2 font-mono text-sm">
                        <button onMouseDown={() => setTheme("blue")}>1</button>
                        <button onMouseDown={() => setTheme("white")}>2</button>
                        <button onMouseDown={() => setTheme("dark")}>3</button>
                    </p>
                    <div className={`relative rounded-full w-full h-6 ${getColor(theme, "bg-dark")} px-1`}>
                        <div className={`absolute size-[1.1rem] rounded-full top-[0.19rem] transition-all ${getColor(theme, "color-switch")} ${getPosition(theme)}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getPosition(theme: Theme) {
    if (theme === "blue") {
        return ""
    }
    if (theme === "white") {
        return "translate-x-[1.75rem]"
    }
    return "translate-x-[3.4rem]"
}