const Product = ({ data: { id } }) => {
	return `<div>
    <h1>Product ${id}</h1>
    <a href="/san-pham" class="block text-center p-2 border rounded-md" data-navigo>Back</a>
  </div>
  `;
};

export default Product;
