import "./globals.css";

export const metadata = {
	title: "Trang chủ F8",
	description: "Học lập trình để đi làm",
	keywords: "học js, học nextjs, học reactjs, học nodejs",
	openGraph: {
		title: "Demo share title",
		description: "Học lâp trình để đi làm",
		images: ["https://test.fullstack.com.vn/image.jpg"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
