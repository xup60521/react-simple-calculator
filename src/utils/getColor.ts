import type { Theme } from "../type/theme";

type ComponentType =
    | "bg"
    | "bg-dark"
    | "bg-darker"
    | "text-color-primary"
    | "theme-btn"
    | "theme-special-btn"
    | "theme-enter-btn"
    | "color-switch"
    | "scroll";

export function getColor(theme: Theme, component: ComponentType) {
    if (theme === "blue") {
        switch (component) {
            case "bg":
                return "bg-slate-700";
            case "bg-dark":
                return "bg-slate-800";
            case "bg-darker":
                return "bg-slate-900";
            case "text-color-primary":
                return "text-white";
            case "theme-btn":
                return "bg-neutral-100 border-neutral-400 transition hover:bg-white text-slate-800";
            case "theme-special-btn":
                return "bg-slate-500 border-slate-700 hover:bg-slate-400 transition text-white";
            case "theme-enter-btn":
                return "bg-red-500 border-red-700 hover:bg-red-400 transition text-white";
            case "color-switch":
                return "bg-orange-500";
            case "scroll":
                return "blue"
            default:
                return "";
        }
    }
    if (theme === "white") {
        switch (component) {
            case "bg":
                return "bg-neutral-100";
            case "bg-dark":
                return "bg-neutral-200";
            case "bg-darker":
                return "bg-white";
            case "text-color-primary":
                return "text-black";
            case "theme-btn":
                return "bg-neutral-100 border-neutral-400 transition hover:bg-white text-slate-800";
            case "theme-special-btn":
                return "bg-cyan-600 border-cyan-700 hover:bg-cyan-500 transition text-white";
            case "theme-enter-btn":
                return "bg-red-500 border-red-700 hover:bg-red-400 transition text-white";
            case "color-switch":
                return "bg-orange-500";
            case "scroll":
                return "white"
            default:
                return "";
        }
    }
    if (theme === "dark") {
        switch (component) {
            case "bg":
                return "bg-indigo-950";
            case "bg-dark":
                return "bg-violet-950";
            case "bg-darker":
                return "bg-violet-950";
            case "text-color-primary":
                return "text-yellow-300";
            case "theme-btn":
                return "bg-purple-950 border-purple-600 transition hover:bg-purple-900 text-yellow-300";
            case "theme-special-btn":
                return "bg-purple-900 border-purple-400 hover:bg-purple-800 transition text-white";
            case "theme-enter-btn":
                return "bg-cyan-400 border-cyan-200 hover:bg-cyan-300 transition text-black";
            case "color-switch":
                return "bg-cyan-500";
            case "scroll":
                return "dark"
            default:
                return "";
        }
    }
    return "";
}
