import Footer from "../Footer";
import Header from "../Header";

const DefaultLayout = () => {
	return `<div>
        ${Header()}
        <div class="flex">
            <div class="basis-2/12">
                <ul>
                    <li>
                        <a href="/" data-navigo>Trang chủ</a>
                    </li>
                    <li>
                        <a href="/gioi-thieu" data-navigo>Giới thiệu</a>
                    </li>
                    <li>
                        <a href="/san-pham" data-navigo>Sản phẩm</a>
                    </li>
                </ul>
            </div>
            <div class="basic-10/12">
                {main}
            </div>
        </div>
    ${Footer()}
    </div>
    `;
};

export default DefaultLayout;
