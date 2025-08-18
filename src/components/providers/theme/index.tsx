"use client";

import { ThemeProvider as NextThemProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return <NextThemProvider { ...props }>{ children }</NextThemProvider>
};

export default ThemeProvider;