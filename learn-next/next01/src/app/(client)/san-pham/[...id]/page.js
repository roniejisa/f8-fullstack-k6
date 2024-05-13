const ProductDetail = ({ params }) => {
	return (
		<>
			<h1>Chi tiết sản phẩm </h1>
			<h2>Danh mục: {params.id[0]} </h2>
			<h2>Sản phẩm: {params.id[1]} </h2>
		</>
	);
};
export default ProductDetail;
// Sử dụng [...id] Để bắt nhiều path đằng sau
