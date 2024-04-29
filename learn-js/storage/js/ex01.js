// Storage
/**
 * Đặc điểm chung: Chỉ lưu trữ được text
 * 1. localStorage 
 * Lưu trữ không giới hạn thời gian 
 * Dung lượng lớn hơn cookie: Khoảng 10mb
 * Dữ liệu trên 1 trang web sẽ phân biệt qua Origin
 * Bảo mật kém
 * 
 * Hàm xử lý: 
 * localStorage.setItem(key, value)
 * localStorage.getItem(key)
 * localStorage.removeItem(key)
 * localStorage.clear()
 * 
 * 2. sessionStorage
 * Lưu trữ theo phiên
 * Dung lượng lớn hơn cookie: Khoảng 10mb
 * Dữ liệu trên 1 trang web sẽ phân biệt qua Origin
 * Bảo mật kém
 * 
 *  * Hàm xử lý: 
 * sessionStorage.setItem(key, value)
 * sessionStorage.getItem(key)
 * sessionStorage.removeItem(key)
 * sessionStorage.clear()
 * 
 * 3. cookie
 *  Dữ liệu cookie lưu ở client
 * Server cũng get và set được cookie (HTTP Header)
 * Client cũng get và set được (Dùng JS)
 * Dung lượng lưu trữ thấp: Khoảng (4kb)
 * Dữ liệu sẽ phân biệt theo path
 * Dữ liệu có thể chia sẻ tới các sub domain
 * Có 1 số nguyên tắc bảo mật: HttpOnly, Secure, Samesites,...
 * Ở trình duyệt mọi request đều được kđính kèm header Cookie để server đọc được
 * 
 * 
 * Cấu tạo cookie: tencookie=giatricookie;expries=thoigian;path=duongdan;domain=tenmien;httpOnly;Secure
 * Thời gian sống
 * max-age=thoigian;
 * hoặc expries
 * 
 * Cách làm với Cookie ở Server
 * 
 * Khi set secure thì phải https thì server mới đọc được
 * 
 * Set Cookie: Trả về Header tên Set-Cookie: tencookie=giatricookie;expries=thoigian;path=duongdan;domain=tenmien;httpOnly;Secure
 * Get Cookie: Đọc Header Request tên Cookie; 
 * 4. web worker
 * 
 */



document.cookie = `username=minhhieu;expires=${new Date("2024-04-24 09:00:00").toUTCString()};path=/;domain=localhost`;
// Sửa lại phải đúng path

// Cách xóa set thời gian cũ
document.cookie = `name=;expires=${new Date().toUTCString()};path=/`;