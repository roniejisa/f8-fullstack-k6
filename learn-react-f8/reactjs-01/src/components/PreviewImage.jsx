import React, { useEffect, useState } from "react";

const PreviewImage = () => {
	const [img, setImg] = useState({});
	const handleChooseFile = (e) => {
		const imagePreviewURL = URL.createObjectURL(e.target.files[0]);

		setImg({ ...img, file: e.target.files[0], preview: imagePreviewURL });
	};

	const handleUpload = async (e) => {
		const formData = new FormData();
		formData.append("file", img.file);
		e.target.innerHTML = "Đang upload";
		e.target.setAttribute("disabled", true);
		const response = await fetch(
			"https://api.escuelajs.co/api/v1/files/upload",
			{
				method: "POST",
				body: formData,
			}
		);
		const { location } = await response.json();
		e.target.innerHTML = "Upload";
		e.target.removeAttribute("disabled");
		setImg({ ...img, urlUpload: location });
	};
	useEffect(() => {
		return () => {
			URL.revokeObjectURL(img.preview);
		};
	}, [img.preview, img.urlUpload]);
	return (
		<>
			<input type="file" onChange={handleChooseFile} />
			<div>
				{img.preview && <img src={img.preview} alt="" height={500} />}
				<button onClick={handleUpload}>Upload</button>
				{img.urlUpload && (
					<p>
						Link ảnh:{" "}
						<a href={img.urlUpload} target="_blank">
							{img.urlUpload}
						</a>
					</p>
				)}
			</div>
		</>
	);
};

export default PreviewImage;

// Rò rỉ bộ nhớ
