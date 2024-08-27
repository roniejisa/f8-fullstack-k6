"use client";
import useSWR from "swr";
const Post = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher, {
        fallbackData: [],
    });
    console.log(data);
    if (error) {
        return <div>Failed to load</div>;
    }
    return <div>{isLoading ? <div>Loading...</div> : data?.map((post) => <div key={post.id}>{post.title}</div>)}</div>;
};

export default Post;
