## Authentication - Authorization

- Authentication: Xác thực xem bạn là ai?

- Authorization: Xác định bạn được làm gì? Không được làm gì

## Các loại Authentication

1. Cookie-Based Authentication

- Request (Email, Password) ==> Server
- Server kiểm tra email và password có hợp lệ không?
+ Nếu hợp lệ --> Tạo session chứa thông tin user và lưu vào server sau đó trả về 1 cookie (session cookie) có chứa session_id
* Không hợp lệ --> Trả về thông báo lỗi  

- Request Authorization --> Trình duyệt gửi cookie lên Server (Chứa session_id) --> Server kiểm tra có tồn tại session_id không?
* Tồn tại: Xác định đúng phiên đăng nhập của user và trả về thông tin user
* Không tồn tại: Thông báo lỗi (Đăng xuất)

Vấn đề:

- Scale ứng dụng
- Hỗ trợ đa nền tảng --> khó
- Ứng dụng nhiều domain khác nhau --> Khó
- Bảo mật: Dễ bị đánh cắp cookie 

Ưu điểm: 
- Dễ, triển khai nhanh
- Dung lượng session_id nhỏ
- Các framework backend đều hỗ trợ


2. Token-Based Authentication

- Request (Email, Password) ==> Server
- Server kiểm tra email và password có hợp lệ không?

* Không hợp lệ --> trả về thông báo lỗi
* Hợp lệ --> Lưu thông tin user vào token (jwt) --> Trả về trình duyệt
- Request Authorization --> Trình duyệt gửi header (Authorization) có chứa token --> Server sẽ giải mã xem có hợp lệ không?

* Hợp lệ: Thì truy vấn với Database để trả về dữ liệu cần
* Không hợp lệ: Thông báo lỗi

Ưu điểm: 

- Dữ liệu lưu ở client (Token)
- Dễ mở rộng và hỗ trợ đa nền tảng vì chỉ cần thêm vào header
- An toàn hơn

Nhược điểm:

- Kích thước lớn
- Nếu không cẩn thận với các thông tin đưa vào token --> Dễ bị tấn công XSS
- Khó triển khai, mất thời gian

### JWT

- Token được tạo ra --> Không xóa được (Trừ phi hết hạn)
- Server kiểm tra token hợp lệ dựa vào chữ ký
- 1 token hợp lệ có 2 yêu tố 

* Đúng chữ ký
* Còn hạn 

- Từng phần trong JWT có thể deceode (Bởi vì mã hóa bằng Base64)

### Làm thế nào khi token bị lộ

- Hạ thời gian sống xuống thấp nhất có thể

Giải pháp: Tạo ra refreshToken

Sinh ra 2 loại token sau khi xác thực

1. Access Token: Lấy tài nguyên trên server 

- Chỉ dùng để lấy tài nguyên
- Thời gian sống thấp

2. Refresh Token: Cấp lại access mới khi hết hạn 
- Chỉ dùng để cấp lại access mới
- Thời gian sống cao
- Lưu trữ trên server

## Vấn đề khi đăng xuất 

