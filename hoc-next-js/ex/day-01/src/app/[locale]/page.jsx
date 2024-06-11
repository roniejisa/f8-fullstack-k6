import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
export default async function Index({ params: { locale } }) {
    unstable_setRequestLocale(locale);
    const p = await getTranslations("Profile");
    return (
        <>
            <Header locale={locale} />
            <main className="mt-4">
                <Container>
                    <div className="grid grid-cols-12 gap-[16px]">
                        <div className="col-span-2">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/f8.jpg"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    priority={true}
                                    className="rounded-md"
                                />
                                <p className="text-center">Fullstack developer</p>
                            </div>
                            <div>
                                <h3 className="section-title">{p("skill")}</h3>
                                <ul>
                                    <li className="border-b mb-2 pb-2">
                                        <b>{p("experience")}</b>: Có 2 năm làm dự án thực tế với Framework Laravel (PHP)
                                        & (Blade, HTML, CSS, Jquery, Javascript)
                                    </li>
                                    <li className="border-b mb-2 pb-2">
                                        <b>Frontend</b>: HTML, CSS, Javascript, React, Nextjs, Tailwindcss, Bootstrap,
                                        Figma,...
                                    </li>
                                    <li className="border-b mb-2 pb-2">
                                        <b>Backend</b>: Nodejs, Express, Sequelize, Mongoose, PHP, Laravel,...
                                    </li>
                                    <li className="border-b mb-2 pb-2">
                                        <b>Database</b>: PostgreSQL, MySQL, MongoDB
                                    </li>
                                    <li className="border-b mb-2 pb-2">
                                        <b>DevOps</b>: Git, Vercel, VPS
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-10">
                            <h2 className="text-xl">{p("title")}</h2>
                            <div>
                                <h3 className="section-title">{p("contact")}</h3>
                                <ul>
                                    <li>{p("fullName")}: Phạm Minh Hiếu</li>
                                    <li>Email: roniejisa@gmail.com</li>
                                    <li>{p("phone")}: 0967358786</li>
                                    <li>{p("address")}: Đại Linh, Trung Văn, Nam Từ Liêm Hà Nội</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="section-title">{p("project")}</h3>
                                <div>
                                    <div>
                                        <h4>Project 1</h4>
                                    </div>
                                    <div>
                                        <h4>Project 2</h4>
                                    </div>
                                    <div>
                                        <h4>Project 3</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="section-title">{p("histories")}</h3>
                                <div>
                                    <div className="border-b mb-2 pb-2">
                                        <h4 className="font-bold">01/2024 - 2024: Fullstack NodeJS </h4>
                                        <div>
                                            <h3>Quá trình học tập sử dụng các kỹ năng:</h3>
                                            <p>
                                                FrontEnd: HTML, CSS, Javascript, React, Nextjs, Tailwindcss, Bootstrap,
                                                Redux, Redux Toolkit,...
                                            </p>
                                            <p>BackEnd: HTML, CSS, Javascript, Laravel, PHP</p>
                                        </div>
                                        <div>Công nghệ sử dụng: HTML, CSS, Javascript, NodeJS, ExpressJS</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">
                                            09/2021 - 04/2023: Công ty Cổ phần Công nghệ Tech5S
                                        </h4>
                                        <div>
                                            <h3>Quá trình làm việc sử dụng các kỹ năng:</h3>
                                            <p>FrontEnd: HTML, CSS, Javascript</p>
                                            <p>BackEnd: Laravel, PHP</p>
                                            <p>DevOps: GIT, VPS, Centos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="section-title">{p("favorite")}</h3>
                                <div>
                                    <div>
                                        <h4>Favorite 1</h4>
                                    </div>
                                    <div>
                                        <h4>Favorite 2</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer locale={locale} />
        </>
    );
}
