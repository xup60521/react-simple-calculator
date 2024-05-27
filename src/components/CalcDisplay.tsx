import { useEffect, useRef } from "react";
import "./DisplayScrollbar.css"
import { getColor } from "../utils/getColor";
import { useTheme } from "./themeProvider";

export default function CalcDisplay({ input }: { input: string[] }) {
    const theme = useTheme()
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollLeft += 50;
        }
    }, [input]);
    return (
        <div
            className={`w-full h-24 rounded-xl ${getColor(theme, "bg-darker")} px-8 ${getColor(theme, "text-color-primary")} text-[2.5rem] font-bold flex items-center overflow-x-scroll ${getColor(theme, "scroll")}`}
            ref={divRef}
        >
            <div className="flex-grow"></div>
            {input.map((item, index) => {
                return (
                    <p className="translate-y-[0.25rem]" key={index}>
                        {item}
                    </p>
                );
            })}
        </div>
    );
}
