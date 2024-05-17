import React, { useRef } from "react";

const Checkbox = () => {
	const checkAllRef = useRef();
	const checkSingleRef = useRef([]);
	const handleChangeAll = (e) => {
		checkSingleRef.current.forEach((checkbox) => {
			checkbox.checked = e.target.checked;
		});
	};

	const handleChangeSingle = (e) => {
		const countCheckbox = checkSingleRef.current.filter(
			(checkbox) => checkbox.checked
		).length;
		checkAllRef.current.checked =
			countCheckbox === checkSingleRef.current.length;
	};

	return (
		<div>
			<div>
				<label>
					<input
						type="checkbox"
						ref={checkAllRef}
						onChange={handleChangeAll}
					/>
					checkAll
				</label>
			</div>
			<div>
				<label>
					<input
						type="checkbox"
						ref={(el) => checkSingleRef.current.push(el)}
						onChange={handleChangeSingle}
					/>
					Checkbox 01
				</label>
				<label>
					<input
						type="checkbox"
						ref={(el) => checkSingleRef.current.push(el)}
						onChange={handleChangeSingle}
					/>
					Checkbox 01
				</label>
				<label>
					<input
						type="checkbox"
						ref={(el) => checkSingleRef.current.push(el)}
						onChange={handleChangeSingle}
					/>
					Checkbox 01
				</label>
			</div>
		</div>
	);
};

export default Checkbox;
