"use client";
import { ThemeProvider } from "next-themes";
const Provider = ({ children }) => {
    return (
        <ThemeProvider attribute="data-theme" enableSystem={true} defaultTheme="system">
            {children}
        </ThemeProvider>
    );
};
export default Provider;