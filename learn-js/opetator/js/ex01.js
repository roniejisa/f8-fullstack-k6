/*
Toán tử  - Biểu thức

toán tử + toán hàng = biểu thức

Ví dụ: a = b + c;

1. Toán tử số học
+, -, *, /, %, **

++, --
*/

// var a = 10;
// var b = 2;
// var c = a ** b;
// console.log(c);


// var count = 0;

// count++;
// ++count;
// count--;
// --count;
// console.log(count++ + count++);


// var count = 1;
// var result = ++count;
// console.log(result)
// console.log(count)

// var count = 1;
// var result = count++ + ++count + count++ + 10;
/*

/*
// var result = count++ + ++count + count++ + 10;

// var a = 10;
// var b = "-20";
// var c = a + b;

/**
 * 2. Toán tử gán
 * = += -= *= /= %=
 */

// var a = 10;

// a = a + 5;
// a += 5;
// console.log(a);

/**
 * 3. Toán tử so sánh
 * > , <, >=, <=, == (Chỉ so sánh giá trị), === (So sánh giá trị và kiểu dữ liệu), !=, !==
 * Trả về kiểu dữ liệu boolean (true, false)
 */

// var a = 10;
// 
// var b = a >= 10;
// console.log(b);


/**
 * Toán tử kết hợp: 
 * &&: Và
 * ||: Hoặc
 * !: Phủ định
 * 
 * 
 * Thứ tiệu ưu tiên: && -> || -> !
 */


// var a = 10;
// var b = !(a >= 5 && a <= 10);
// console.log(b);

/**
 * 5. Toán tử 3 ngôi 
 * Gán b = 20 nếu a >= 10 ngược lại b = 0 
 * 
 * 
 * Cú pháp:
 * điều kiện ? giá trị đúng : giá trị sai
 */

// var a = 10;
// var b = 20;
// var c = 30;
// var total = a + b + 10 + b >= 20 ? 5 : 10 + c;
// console.log(total);


// var a = 10;
// document.write(`${a >= 10 ? 'Thỏa mãn điều kiên' : 'Sai rồi'}`);

/**
 * Toán tử nullish(??)
 * Cú pháp: Biến ?? giá trị
 * Nếu biến bằng undefined hoặc null --> Lấy phía sau 2 dấu ??, ngược lại lấy phía trước
*/

// var a = 10;
// var b = a ?? "Không xác đinh"
// console.log(b);

/**
 * 
 * 
 * 
 */

// var a;
// var b = a !== undefined && a !== null ? a : 'Không xác định';
// console.log(b);

/**
 * Truthy, Falsy
 * &&, || khi gán
 */

// var a = 0 || 0 || 0;
// console.log(a);