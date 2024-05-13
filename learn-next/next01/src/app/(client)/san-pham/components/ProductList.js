"use client";
import React, {
	useEffect,
	useRef,
	useState,
} from "react";

const ProductList = () => {
	const [hidden, setHidden] = useState(false);
	const [heightContent, setHeightContent] = useState(0);
	const dataRef = useRef();
	const handleToggleContent = () => {
        let newHidden = !hidden;
		setHidden(!hidden);
		let animateArr = [];
		if (newHidden) {
			animateArr = [
				{
					height: heightContent + "px",
				},
				{
					height: "0px",
				},
			];
		} else {
			animateArr = [
				{
					height: 0 + "px",
				},
				{
					height: heightContent + "px",
				},
			];
		}
		dataRef.current.style.overflow = "hidden";
		dataRef.current.animate(animateArr, {
			duration: 150,
			fill: "forwards",
		});
	};
	useEffect(() => {
		setHeightContent(dataRef.current.offsetHeight);
	}, []);

	return (
		<>
			<h1>Danh sách sản phẩm</h1>
			<p ref={dataRef}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsa
				nobis nemo quod nesciunt voluptatem tenetur sequi tempore quas
				temporibus ut ipsam iusto! Cumque quisquam aliquid, culpa eos
				commodi assumenda eligendi numquam, consectetur et ipsa fugit qui?
				Temporibus explicabo voluptatibus provident, libero architecto
				voluptatem repellat ducimus consequatur eos non debitis laboriosam
				in quos, vero corrupti odio possimus et voluptatum reprehenderit
				fugiat consequuntur. In nam, est officiis dolores corporis
				dignissimos cupiditate quas! Nisi facilis corrupti, reiciendis aut
				enim alias, esse incidunt cum voluptatum eius in quae adipisci
				voluptas quisquam soluta non. Quasi a dolorum asperiores quas quis
				maiores dolor, sequi deleniti inventore numquam corporis enim
				obcaecati? Explicabo enim recusandae sit alias labore omnis at odio
				delectus illum aperiam exercitationem, blanditiis eligendi! Maxime
				blanditiis libero repudiandae harum deleniti eos unde aliquid
				officia magnam dolore, deserunt vitae ex quos architecto ipsa
				adipisci facilis. Nulla velit, exercitationem accusamus, eum
				consequatur ipsa expedita consequuntur odit alias enim odio maxime
				voluptatum magnam, libero iste hic maiores sequi magni quos laborum
				delectus molestiae repudiandae?
			</p>
			<button
				onClick={handleToggleContent}
				className="bg-red-400 text-white border rounded-md p-2 mt-3">
				Thu gọn
			</button>
		</>
	);
};

export default ProductList;
