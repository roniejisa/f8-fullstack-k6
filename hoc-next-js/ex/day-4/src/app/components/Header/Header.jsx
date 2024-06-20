import React from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import ToggleLightDark from "./ToggleLightDark";
import MenuMobile from "./MenuMobile";
import NavMenu from "./NavMenu";
import ToggleSearch from "./ToggleSearch";
import ToggleLogin from "./ToggleLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
const Header = async ({ data }) => {
    const user = await getServerSession(authOptions);
    return (
        <header className="py-3 md:py-5 bg-[#333333bf] fixed top-0 w-full left-0 z-10">
            <MainContainer>
                <div className="flex justify-between items-center">
                    <MenuMobile />
                    <Link href="/" className="uppercase text-4xl md:text-[25px] text-white font-bold">
                        <span className="text-orange">S</span>
                        travel
                    </Link>
                    <NavMenu />
                    <div className="basis-[108px] flex items-center gap-4 font-bold">
                        <ToggleLightDark />
                        <ToggleSearch />
                        <ToggleLogin user={user}/>
                    </div>
                </div>
            </MainContainer>
        </header>
    );
};

export default Header;
