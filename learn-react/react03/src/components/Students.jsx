import React from "react";
import data from "./db.json";
import { useRef } from "react";
import { useTransition } from "react";
import { useState } from "react";
const Students = () => {
	const [keyword, setKeyword] = useState("");
	const [pending, startTransition] = useTransition();
	const handleSearch = (e) => {
		startTransition(() => {
			setKeyword(e.target.value);
		});
	};

	return (
		<div>
			<input
				onChange={handleSearch}
				type="search"
				placeholder="Từ khóa tìm kiếm"
			/>
			<hr />
            {pending && <h3>Đang xử lý</h3>}
			{data.map(({ full_name }, index) => {
				let content = full_name;
				let position = content
					.toLowerCase()
					.indexOf(keyword.toLowerCase());
                if(position !== -1 && keyword){
                    let newFullName = "";
                    while (position !== -1) {
                        newFullName += `${content.slice(
                            0,
                            position
                        )}<span style="background:yellow">${content.slice(
                            position,
                            position + keyword.length
                        )}</span>`;
                        content = content.slice(position + keyword.length);
                        position = content.toLowerCase().indexOf(keyword.toLowerCase());
                    }
				    newFullName += content;
				    return <h3 key={index} dangerouslySetInnerHTML={{__html:newFullName}}></h3>;
                }else{
                    return <h3 key={index}>{full_name}</h3>
                }
			})}
		</div>
	);
};

export default Students;
