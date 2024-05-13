# Flow

Request --> Route --> RootLayout --> CustomLayout --> Page --> Render JSX

# Layout

- Bố cục
- Đại diên cho 1 nhóm route

# Page
- Nội dung chính của trang
- 1 page thuộc tính 1 route

# Ưu tiên
- Sẽ ưu tiên lấy layout.js gần nhất tại page hiện tại nếu không có sẽ lấy cấp cha

# Nhóm Layout
Sử dụng cú pháp (auth)

# Request - Response Lifecycle

Request --> Middleware --> Router --> RootLayout --> CustomLayout --> Page --> Response(html,json,image,...)