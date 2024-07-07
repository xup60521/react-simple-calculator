# Frontend Mentor Challenge - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29 "https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29").

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
        - [Theme change](#theme-change)
        - [Digit display](#digit-display)
        - [Calculation](#calculation)
- [Resources](#resources)

## Overview

Users should be able to:

- See the size of the elements adjust based on their device's screen size

- Perform mathematical operations like addition, subtraction, multiplication, and division

- Adjust the color theme based on their preference

Links:

- GitHub Repo: <https://github.com/xup60521/react-simple-calculator>

- Live website: <https://xup60521.github.io/react-simple-calculator/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

- React (powered by vite)

- TailwindCSS

- Jotai (global state management)

### What I learned

#### Theme change

In this project, the calculator should have 3 themes, and user is able to freely change among them.

Since the theme is going to be accessed from anywhere, it’s more reasonable to make it a global state.

Though context API could help us achieve that, I decided to use `Jotai` to do so. Not only it is lightweight, performant global state management solution, its `atomWithStorage` automatically syncs localstorage with states.

```tsx
import { type Theme } from "../type/theme";
import { atomWithStorage } from "jotai/utils";

const STORAGE_KEY = "c8e4eafe-64f4-4457-a7d4-f4a25be92799";
export const themeAtom = atomWithStorage<Theme>(STORAGE_KEY, "blue");
```

The usage is quite similar to context API and useState.

```tsx
const [theme, setTheme] = useAtom(themeAtom)
```

Now, we know which theme our app is currently on. Next we need to determine which color of each component of different theme is.

Here we define a `getColor` function. Based on the input theme and component name, it returns the corresponding tailwind utility class.

```tsx
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
    // such that
    return "";
}
```

It feels like reinventing `class-variance-authority`. For every element that is theme-changeable, just pass the function call in the className attribute.

```tsx
 <div
    className={`flex justify-between items-center w-full py-4 ${getColor(
        theme,
        "text-color-primary"
    )}`}
>
  {/* ... */}
</div>
```

Whenever the theme is changed, each component will change its color as well.

#### Digit display

When the content overflows, it needs to immediately scroll to the right end.

```tsx
const divRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    if (divRef.current) {
        divRef.current.scrollLeft += 50;
    }
}, [input]);

return (
  <div className={"..."} ref={divRef} >
    <div className="flex-grow"></div>
    {input.map((item, index) => {
        return (
            <p className="translate-y-[0.25rem]" key={index}>
                {item}
            </p>
        );
    })}    
  </div>
)
```

When the input length is shorter than the container, the flex-grow div will expand, making sure that our input content is aligned on the right side.

When the input content overflows, `useEffect` call will scroll the container, making sure that it behaves just like a real calculator.

#### Calculation

Each input is stored in an array. When the user press enter, it checks whether the input the calculatable, and then uses `Function` to get the result.

```tsx
function handleInput(e: InputType) {
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
}
```

To make sure the input is calculatable, we have setup many conditions. It is almost impossible to have a invalid input.

## Resources

- Google font - <https://fonts.google.com>

- TailwindCSS Docs - <https://tailwindcss.com/docs>