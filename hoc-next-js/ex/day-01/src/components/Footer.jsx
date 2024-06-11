import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Container from "./Container";

const Footer =async ({ locale }) => {
    unstable_setRequestLocale(locale);
    const f = await getTranslations("Footer");
    return (
        <footer>
            <Container>
                <p className="text-center">{f("title")}</p>
            </Container>
        </footer>
    );
};

export default Footer;
