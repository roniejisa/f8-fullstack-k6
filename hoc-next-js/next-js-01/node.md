# Page - Layout

- 1 page tương ứng 1 trang ==> Chỉ có 1 đường dẫn tương ứng với nó
- 1 layout có thể có nhiều trang ==> 1 layout có thể có nhiều đường dẫn

Request (Truy cập vào URL) ==> RootLayout ==> Layout ==> Page ==> Trả về Response (HTML)

Lưu ý: Mặc định NextJS render theo cơ chế Server-Side

# Router trong NextJS

- Không khai báo route
- Dựa vào folder, file (filesystem router)

Nếu có [id] sẽ mạnh hơn [...id]