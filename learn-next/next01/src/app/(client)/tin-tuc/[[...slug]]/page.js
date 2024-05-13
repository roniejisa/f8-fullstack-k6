const Post = ({ params }) => {
	const { slug } = params;
	return <h1>Tin tức</h1>;
};

export default Post;

//Dynamic router --> Bắt buộc
//Optional Params --> [[...id]] Có thể bắt được tất cả các trường hợp kể cả từ cấp ngoài cùng
