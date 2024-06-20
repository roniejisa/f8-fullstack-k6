"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const videos = ["/vid-1.mp4", "/vid-2.mp4", "/vid-3.mp4"];

const Video = () => {
    const controlRef = useRef({
        controls: [],
    });
    const indexRef = useRef(0);
    useEffect(() => {}, []);

    const handleChangeVideo = (index) => {
        controlRef.current.video.src = videos[index];
        indexRef.current = index;
        controlRef.current.controls.forEach((_, i) => {
            if (index === i) {
                controlRef.current.controls[i].classList.remove("bg-white");
                controlRef.current.controls[i].classList.add("bg-orange");
            } else {
                controlRef.current.controls[i].classList.add("bg-white");
                controlRef.current.controls[i].classList.remove("bg-orange");
            }
        });
    };
    return (
        <section className="h-screen w-full relative">
            <video
                src={videos[indexRef.current]}
                ref={(el) => (controlRef.current.video = el)}
                muted={true}
                autoPlay
                loop
                className="h-screen w-full object-cover bg-[url('/homeimg.jpg')] object-center"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                    <h3 className="text-[40px] text-[var(--icon)] font-bold uppercase">Mọi chuyến đi đều đáng giá</h3>
                    <p className="text-2xl text-white">Khám phá các vùng đất mới cùng chúng tôi</p>
                    <p className="text-2xl text-white">Những chuyến đi đang chờ đợi bạn</p>
                    <Link href="#uu-dai" className="btn mt-5 mb-10">
                        Khám phá ngay
                    </Link>
                </div>
                <div className=" bg-[#00000080] flex gap-3 p-2 rounded-xl w-fit mx-auto">
                    {videos.map((_, index) => {
                        return (
                            <button
                                key={index}
                                ref={(el) => (controlRef.current.controls[index] = el)}
                                className={`${
                                    index === indexRef.current ? "bg-orange" : "bg-white"
                                } rounded-full  w-5 h-5`}
                                onClick={() => handleChangeVideo(index)}
                            ></button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Video;
