import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/middlewares/postMiddleware";

const Posts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, []);
	return (
		<div>
			<h1>Danh sách bài viết</h1>
		</div>
	);
};

export default Posts;
