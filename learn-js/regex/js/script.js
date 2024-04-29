// g --> Khớp cả chuỗi 
// i --> Không phân biệt hoa thường
// u --> Hỗ trợ tiếng việt (Unicode)
// m 
// s

// Các hàm xử lý

// So khớp: pattern.test(string)
// Cắt chuỗi: string.match(pattern)
// Thay thế: string.replace(pattern, string);

// ---------- Các ký hiệu cơ bản 
// string --> Khớp chuỗi
// ^ --> Khớp biểu thức ở đầu chuỗi
// $ --> Khớp biểu thức cuối chuỗi
/**
 * [a-z] --> Khớp chữ thường
 * [A-Z] --> Khớp chữ hoa
 * [0-9] --> Khớp số
 * [charlist] --> Khớp các ký tự ([abc])
 * ==> Các biểu thức viết trong 1 cặp [] sẽ kết hợp điều kiện hoặc
 * 
 * [A-Za-z0-9abc] --> Chữ hoa hoặc chữ thường hoặc số hoặc 3 ký tự a,b,c
 * 
 *-------- Mặc định đồ dài các biểu thức là 1, muốn tăng đồ dài --> Thêm biểu thức độ dài
 * 
 * {min,max} --> Từ min,max
 * {min, } --> từ min đến vô hạn
 * {value} --> Đồ dài cố định
 * 
 * 
 * -------- Các ký hiệu viết tắt của dộ dài
 * + ==> {1,}
 * ? ==> {0,1}
 * * ==> {0,}
 * 
 * 
 * Lưu ý: Nếu gặp phải các ký hiệu trùng với chuỗi cần so khớp sẽ -> thêm ký hiệu escape phía trước
 *
 * Ví dụ: Kiểm tra trong chuỗi xem có [ hay không?
 * Ví dụ: Kiểm tra trong chuỗi có dấu . hay không 
 */

// const str = 'minhhieu@gmail.com';
// const pattern = /[A-Z0-9]/;

// console.log(pattern.test(str));

/**
 * 
 * Kiểm tra username hợp lệ
 * Chỉ chấp nhận chữ thường, số, -,_
 * Độ dài từ 5 ký tự trở lên 
 * Bắt đầu bằng chữ hoặc _
 */


// var username = "test_";

// var pattern = /^[a-z_][a-z0-9-_]{4,}$/

// console.log(pattern.test(username))

/**
 * 
 * Kiểm tra email hợp lệ
 * Bắt đầu bằng chữ cái
 * Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang
 * Tối thiểu 3 ký tự trở lên
 * 
 * 2. domain
 * 
 * bắt đầu bằng chữ cái
 * Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, số,
 * Tối thiệu 1 ký tự
 * 
 * 3.ext
 * Chữ cái thường, HOA
 * Tối thiểu 2 ký tự
 *
 */

var email = "roniejisa@g.com";

var pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9]@([a-zA-Z]|[a-z][a-zA-Z0-9-_\.]*[a-zA-Z0-9]).[a-zA-z]{2,}$/
console.log(pattern.test(email));

/^((http|https):\/\/|)(([a-zA-Z]|[a-zA-Z][a-z0-9A-Z-_]*[a-zA-Z0-9])\.)+([a-z]{2,})(\:[1-9]{2,})*(\/([a-zA-Z0-9][a-zA-Z0-9_\-\.]*[a-zA-Z0-9]|[a-z]))*(|\/|\/([a-zA-Z0-9][a-zA-Z0-9_\-\.]*[a-zA-Z0-9]|[a-z0-9A-Z]))$/;

/^(http|https):\/\/(([a-z]|[a-z][a-z0-9-_\.]*[a-z0-9])\.)+([a-z]{2,})(:[0-9]{2,})*(\/?|\/[^\s]+)$/
/**
 * Hoặc và phủ định
 * 
 * Hoặc (|) và phủ định (^)
 * 
 * 
 * Khi sử dụng | phải nhóm vào cặp ngoặc () để kết quả chính xác
 * 
 * 
 * \d --> Đại diện cho số
 * \D --> Không phải là số (Ngược lại của \d)
 * \w --> [a-zA-Z0-9-]
 * \W --> Ngược lại của \w
 * \s --> Đại diện cho khoảng trắng
 * \S --> Không phải khoảng trắng
 *  
 */

// Capturing Group Dùng ()

// Non-Capturing Group --> Loại bỏ giá trị trong cặp ngoặc () ra khỏi kết quả khi cắt chuỗi ?:


// Đối sách sử dụng $1 tương ứng với cặp ngoặc tròn thứ nhất, $2 tương được với cặp ngoặc tròn thứ 2