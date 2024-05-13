import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

const App = () => {
	return (
		<div>
			{/* <Counter title="F8"/> */}
			<Form />
		</div>
	);
};

export default App;

/**
 *
 * Trong Function Component chỉ có 2 tác dụng
 * Hiển thị giao diện JSX
 * Truyền Props
 *
 * Hook ==> Thao tác với các chức năng khác của React JS để functional có chức năng giống như class
 *
 *
 * - 1 hàm đặc biệt (Bắt đầu bằng từ khóa use)
 * - Chỉ hoạt động trong function component
 *
 * Các hook phổ biến
 *
 * 1. useState()
 * 2. useEffect()
 * 3. useContext
 * 4. useReducer
 * 5. useRef
 *
 *
 * State là gì?
 *
 * - Trạng thái của 1 component
 * - State chứa dữ liệu của component
 * - State chỉ hoạt động ở trong phạm vi 1 component
 *
 * *** Khi state thay đổi ==> Component sẽ tự động re-render
 * - Không được thay đổi trực tiếp state mà phải thông qua hàm set
 * - Khi cập nhật State -> State sẽ không thay đổi luôn mà sẽ ưu tiên re-render trước
 */
