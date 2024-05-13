"use client";
import useSWR from "swr";
import PostForm from "./PostForm";
export const postAPI = "http://localhost:3001/posts";

const PostList = () => {
	const fetcher = (url) => fetch(url).then((res) => res.json());
	const {
		data: posts,
		isLoading,
		error,
	} = useSWR(postAPI, fetcher, {
		// refreshInterval: 2000,
		// revalidateOnFocus:false
		// revalidateOnReconnect:true
	});

	if (error) {
		return <h3>Đã có lỗi xảy ra</h3>;
	}

	return (
		<div>
			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				posts?.map(({ id, title }) => (
					<div key={id}>
						<h3>{title}</h3>
					</div>
				))
			)}
			<PostForm />
		</div>
	);
};

export default PostList;
