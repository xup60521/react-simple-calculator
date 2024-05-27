import type { Theme } from "../type/theme";

type ComponentType =
    | "bg"
    | "bg-dark"
    | "bg-darker"
    | "text-color-primary"
    | "theme-btn"
    | "theme-special-btn"
    | "theme-enter-btn"
    | "color-switch";

export function getColor(theme: Theme, component: ComponentType) {
    if (theme === "blue") {
        switch (component) {
            case "bg": return "bg-slate-700";
            case "bg-dark": return "bg-slate-800";
            case "bg-darker": return "bg-slate-900";
            case "text-color-primary": return "text-white";
            case "theme-btn": return "bg-neutral-100 border-neutral-400 transition hover:bg-white text-slate-800"
            case "theme-special-btn": return "bg-slate-500 border-slate-700 hover:bg-slate-400 transition text-white"
            case "theme-enter-btn": return "bg-red-500 border-red-700 hover:bg-red-400 transition text-white";
            case "color-switch": return "bg-orange-500"
            default: return ""
        }
    }
    return ""
}
