export default function CalcDisplay({input}:{input: string[]}) {
    return (
        <div className="w-full h-24 rounded-xl bg-slate-900 px-8 text-white text-[2.5rem] font-bold flex items-center justify-end">
            {input.join(" ")}
        </div>
    );
}
