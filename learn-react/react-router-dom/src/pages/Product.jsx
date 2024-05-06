import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
	let [searchParam, setSearchParam] = useSearchParams();
	// console.log(searchParam.get("category"));
	// console.log(searchParam.get("key"));
	// console.log(Object.fromEntries([...searchParam.entries()]));
	const handleFilter = (e) => {
		e.preventDefault();
		const form = Object.fromEntries([...new FormData(e.target)]);
		setSearchParam(form);
	};
	return (
		<div>
			<h1 className="font-bold text-2xl">Product</h1>
			<h2>Category: {searchParam.get("category")}</h2>
			<h2>Key: {searchParam.get("query")}</h2>
			<form action="" onSubmit={handleFilter}>
				<select name="category" id="">
					<option value="">All</option>
					<option value="computer">Computer</option>
					<option value="phone">phone</option>
				</select>
				<input type="search" name="query" placeholder="Query..." />
				<button>Filter</button>
			</form>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
				nesciunt ab explicabo illum amet doloribus optio, neque voluptatem
				quo rerum commodi cum quos mollitia officiis ullam. Debitis dicta
				magnam sit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed? Numquam qui repellendus ipsam facilis magnam accusamus odio laborum ratione error explicabo cum molestiae atque earum nobis, ex ipsa delectus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita ipsa, modi harum nemo blanditiis ex perspiciatis esse quae adipisci rem porro impedit asperiores dolorem culpa minima! Laborum nisi sunt quos deleniti aspernatur facere. Inventore, ex? Sed commodi laudantium repudiandae maxime recusandae iusto culpa quas natus atque, maiores cum ipsum aspernatur dolore, ipsa alias dolor magnam! Vitae blanditiis ipsum nihil maiores temporibus? Et, deleniti voluptatibus? Commodi facere, ad, harum inventore vitae veniam nobis pariatur non eius placeat, quia at cupiditate dolorum! Dolorem dolorum amet facere nemo iure quam consequuntur praesentium nulla autem molestiae, in accusantium, repellendus ullam officiis repellat molestias eum porro! Quam rem totam laudantium vero pariatur inventore repellat est maiores, necessitatibus officia nisi dicta ex beatae sapiente sunt natus esse molestiae voluptatibus saepe magnam ipsum. Excepturi tenetur enim modi mollitia aut, dicta voluptas consequatur neque nostrum magni sequi ducimus, quo consectetur distinctio corrupti, numquam earum nam cum doloribus qui quis magnam vel? Dignissimos reprehenderit vitae eius excepturi magnam nostrum labore ducimus laudantium, facere deleniti error explicabo totam, sunt sed possimus delectus et ex voluptates alias ab quam similique sapiente. Quos, possimus. Tempore, a, vero voluptates blanditiis, molestiae quaerat natus facere nostrum molestias ab quae eveniet eos minima consectetur harum! Similique placeat molestias repellendus incidunt ducimus delectus ratione praesentium culpa esse doloremque fuga iure officia earum nostrum, unde asperiores nam cum! Dolore voluptatibus pariatur perferendis, maxime alias vel eum? Esse eveniet obcaecati animi quod autem quae ipsum corporis et, porro est, quas quibusdam illum quam repellendus a cum! Nobis fuga, ad amet similique error praesentium nisi eos odio quos, aut quas suscipit odit dignissimos delectus voluptatum velit repellendus reprehenderit iste hic rem harum illum laudantium eaque. Aspernatur atque, perspiciatis similique assumenda magni voluptatum amet qui ipsam placeat officia quidem recusandae fugiat? Est nulla enim nam? Ratione, odit. Saepe, necessitatibus!
			</p>
		</div>
	);
};

export default Product;
