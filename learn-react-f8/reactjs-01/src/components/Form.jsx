import React, { useState } from "react";

const Form = () => {
	const [form, setForm] = useState({});
	const [users, setUsers] = useState([]);
	const [formError, setFormError] = useState({});
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email } = form;
		const errorObj = {};
		if (!name) {
			errorObj.name = "Vui lòng nhập tên!";
		}
		if (!email) {
			errorObj.email = "Vui lòng nhập email";
		}
		setFormError(errorObj);
		if (Object.keys(errorObj).length) {
			return false;
		}
		setUsers([...users, { name, email }]);
		setForm({});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleDelete = (index) => {
		if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
			const newUsers = users.filter((_, i) => i !== index);
			setUsers([...newUsers]);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Tên</label>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={form.name ?? ""}
						placeholder="Tên..."
					/>
					<div>{formError.name}</div>
				</div>
				<div>
					<label>Email</label>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={form.email ?? ""}
						placeholder="Email..."
					/>
					<div>{formError.email}</div>
				</div>
				<button>Submit</button>
			</form>
			<hr />
			<div>
				{users.map(({ name, email }, index) => (
					<div key={index} style={{ borderBottom: "1px solid red" }}>
						<p>{name}</p>
						<p>{email}</p>
						<button onClick={() => handleDelete(index)}>Xóa</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Form;
