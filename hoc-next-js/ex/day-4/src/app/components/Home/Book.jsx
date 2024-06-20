import React from "react";
import MainContainer from "../MainContainer";
import SelectCountry from "../SelectCountry";
import InputEl from "../Input";
import TitleSection from "../TitleSection";
import Image from "next/image";
import SectionInner from "../SectionInner";

const Book = () => {
    const handleAction =async () => {
        "use server"
        return null;
    };
    return (
        <SectionInner id="uu-dai">
            <MainContainer>
                <TitleSection title="Ưu đãi" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 relative">
                        <Image fill={true} src="/book-img.svg" alt="Book" />
                    </div>
                    <div className="col-span-1 shadow-[0_10px_2px_rgba(0,0,0,.15)] bg-[var(--box)] p-5 rounded-md">
                        <form action={handleAction} className="flex flex-col gap-[10px]">
                            <InputEl
                                data={{
                                    label: "Hãy liên hệ với tôi bằng :",
                                    placeholder: "Email và số điện thoại",
                                    type: "text",
                                }}
                            />
                            <InputEl
                                data={{
                                    label: "Tôi muốn đến :",
                                    placeholder: "Địa điểm chính xác",
                                    type: "text",
                                }}
                            >
                                <SelectCountry />
                            </InputEl>
                            <InputEl
                                data={{
                                    label: "Chúng tôi có :",
                                    placeholder: "Số người",
                                    type: "number",
                                }}
                            />
                            <InputEl
                                data={{
                                    label: "Bắt đầu từ :",
                                    placeholder: "Số người",
                                    type: "date",
                                }}
                            />
                            <InputEl
                                data={{
                                    label: "Kết thúc vào :",
                                    placeholder: "Số người",
                                    type: "date",
                                }}
                            />
                            <button className="btn rounded-[3px] w-fit mt-2">Tìm ngay</button>
                        </form>
                    </div>
                </div>
            </MainContainer>
        </SectionInner>
    );
};

export default Book;
