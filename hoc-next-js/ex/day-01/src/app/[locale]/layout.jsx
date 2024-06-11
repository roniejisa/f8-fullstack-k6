import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import "@/app/globals.css";
import Provider from "@/providers/ThemeProvider";
const locales = ["vi", "en"];
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <Provider>
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </Provider>
            </body>
        </html>
    );
}
