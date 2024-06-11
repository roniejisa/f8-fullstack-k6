import { NextIntlClientProvider } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import "@/app/globals.css";
import Provider from "@/providers/ThemeProvider";
const locales = ["vi", "en"];

export async function generateMetadata({ params: { locale } }) {
    const p = await getTranslations({ locale, namespace: "Profile" });

    return {
        title: p("title"),
        description: p("description"),
        keywords: p("keywords"),
    };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <Provider>
                    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
                </Provider>
            </body>
        </html>
    );
}
