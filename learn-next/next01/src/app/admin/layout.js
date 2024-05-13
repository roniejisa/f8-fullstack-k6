export const metadata = {
	title: "Admin",
	openGraph: { title: "", description: "Học làm gì", images:[] },
};
const AdminLayout = ({ children }) => {
	return (
		<>
			<header>
				<h1>Admin Header</h1>
			</header>
			<main>{children}</main>
			<footer>
				<h1>Admin Footer</h1>
			</footer>
		</>
	);
};
export default AdminLayout;
