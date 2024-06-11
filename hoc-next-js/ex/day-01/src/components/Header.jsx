import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import DarkLight from "./DarkLight";
import LogoIcon from "./Icons/Logo";
const Header = async ({ locale }) => {
    unstable_setRequestLocale(locale);
    const t = await getTranslations("Profile");
    const isVietnamese = locale === "vi";
    return (
        <header className="sticky top-0 py-3 bg-orange-400">
            <Container>
                <div className="flex justify-between items-center">
                    <Link href={"/"} locale={locale} className="flex gap-2 items-center" title={t("title")}>
                        <LogoIcon />
                    </Link>
                    <div className="flex justify-end flex-1">
                        <DarkLight />
                        <Link
                            className="switch-i18n px-4 min-w-[50px] text-center py-2 ml-2"
                            locale={isVietnamese ? "en" : "vi"}
                            href={isVietnamese ? "/en" : "/vi"}
                        >
                            {isVietnamese ? "en" : "vi"}
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
