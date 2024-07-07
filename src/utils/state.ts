import { type Theme } from "../type/theme";
import { atomWithStorage } from "jotai/utils";

const STORAGE_KEY = "c8e4eafe-64f4-4457-a7d4-f4a25be92799";
export const themeAtom = atomWithStorage<Theme>(STORAGE_KEY, "blue");
