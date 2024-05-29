import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/products/1");
    }, []);
    return <></>;
};

export default Home;
