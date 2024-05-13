import image404 from "@/assets/images/404.jpg";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
	return (
		<>
			<Image
				src={image404}
				alt="404 not found"
			/>
			<h2>Lạc đường rồi. Về trang chủ ngay</h2>
			<Link href="/">Quay về bờ</Link>
		</>
	);
};

export default NotFound;
