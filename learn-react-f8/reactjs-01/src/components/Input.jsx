import {memo, forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(({count,...props}, ref) => {
	// Tạo ref nội bộ
    console.log("re-render");
	const inputRef = useRef();
	useImperativeHandle(ref, () => {
		const obj = {
			// value: (value) => {
			// 	inputRef.current.value = value;
			// },
			focus: () => inputRef.current.focus(),
		};
		Object.defineProperty(obj, "bcd", {
			set: function (val) {
				inputRef.current.value = val;
			},
			get: function () {
				return inputRef.current.value;
			},
		},[]);
        
        Object.defineProperty(obj, "className", {
			set: function (className) {
				inputRef.current.className = className;
			},
			get: function () {
				return inputRef.current.className;
			},
		});
        return obj;
	});
	return <input className="input-test" ref={inputRef} placeholder="Họ tên" {...props} count={count}/>;
});

export default memo(Input);
//forwardRef: Chuyển từ ref component này sang component khác
//forwardRef: Higher Order Component (HOC)

/**
 * Khi component cha bị re-render ==> Component con sẽ tự động re-render
 */

//HOC: React.memo
/**
 * Ngăn tình trạng con bị re-render không cần thiết
 * 
 * 
 * 
 */