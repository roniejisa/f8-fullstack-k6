import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {path} = useParams();
    const [,slug,id] = path.match(/(.+)-(\d+)$/);
    console.log(slug,id);
	return (
		<div>
			<h1 className="font-bold text-2xl">Chi tiết sản phẩm {id}</h1>
            <p>Slug: {slug}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam labore ipsum tempore facilis asperiores, cumque porro reprehenderit, dignissimos itaque quaerat cum officiis? Eligendi autem voluptatum, ut ad corrupti repellendus.</p>
		</div>
	);
};

export default ProductDetail;
