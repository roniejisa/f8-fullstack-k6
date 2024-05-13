const postsAPI = `https://jsonplaceholder.typicode.com/posts`;
const Post = async () => {
	const response = await fetch(postsAPI);
	const posts = await response.json();

	return (
		<div>
			<h1>POSTS</h1>
			{posts.map(({ id, title }) => (
				<h3 key={id}>{title}</h3>
			))}
		</div>
	);
};

export default Post;
// Server Component
