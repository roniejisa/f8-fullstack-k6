import { redirect } from "next/navigation";
import Comment from "./components/Comment";

const getComment = async () => {
    const response = await fetch("https://jsonplaceholder1.typicode.com/comments/1");
    const data = await response.json();
    return data;
};
const AboutPage = async () => {
    let comment;
    try {
        comment = await getComment();
    } catch (error) {
        return redirect("/products");
    }
    return (
        <div>
            <h1>AboutPage</h1>
            <Comment data={comment} />
        </div>
    );
};

export default AboutPage;
