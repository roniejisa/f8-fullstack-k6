"use client";
import { showRipple } from "@/components/Button/ripple";
import { fetcher } from "@/utils/fetch";
import { useState } from "react";
import useSWR from "swr";
import UserAdd from "./userAdd";

const UserPage = () => {
    const dbApi = process.env.NEXT_PUBLIC_SERVER_API;
    const [userId, setUserId] = useState(null);
    const [show, setShow] = useState(false);
    const option = {
        url: dbApi + "/users",
    };
    const { data, error, isLoading, mutate } = useSWR(option, fetcher, {
        fallbackData: [],
    });

    const {
        data: dataContent,
        error: errorContent,
        isLoading: isLoadingContent,
    } = useSWR(
        {
            url: dbApi + "/user-content?user_id=" + userId,
        },
        fetcher
    );

    const {
        data: allContent,
        error: errorAllContent,
        isLoading: isLoadingAllContent,
    } = useSWR(
        {
            url: dbApi + "/user-content",
        },
        fetcher
    );

    return (
        <div>
            <h1>Danh sách người dùng</h1>
            {isLoading && <h4>Loading...</h4>}
            <button
                onMouseDown={showRipple}
                onClick={() => {
                    setUserId(null);
                    setShow(!show);
                }}
            >
                {show ? "Đóng tất cả" : "Mở tất cả"}
            </button>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>
                        <div className="flex gap-2 items-center">
                            {user.username}
                            <button
                                className="py-2 px-4 border"
                                onMouseDown={(e) =>
                                    showRipple(e, {
                                        bgColor: "purple",
                                        borderColor: "purple",
                                        opacityStart: 1,
                                        opacityEnd: 0,
                                        time: 600,
                                    })
                                }
                                onClick={() => {
                                    setShow(false);
                                    setUserId(user.id);
                                }}
                            >
                                Chi tiết
                            </button>
                        </div>
                        {show && allContent.find((content) => content.user_id === user.id) !== null
                            ? allContent.find((content) => content.user_id === user.id).content
                            : ""}
                        {isLoadingContent && <h4>Loading...</h4>}
                        {dataContent?.length
                            ? dataContent.find((content) => content.user_id === user.id) && (
                                  <p>{dataContent[0]?.content}</p>
                              )
                            : ""}
                    </li>
                ))}
            </ul>
            <UserAdd mutate={mutate} />
        </div>
    );
};

export default UserPage;
