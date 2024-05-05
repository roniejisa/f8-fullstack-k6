# Package
- Khi làm việc với các ngôn ngữ lập trình ==> Sử dụng thêm các thư viện ở bên ngoài 
- Phát sinh vấn đề:

* Cập nhật phiên bản:
* Di chuyển thư viện từ nơi này qua nơi khác (Local lên github, Local lên Server,...) ==> Source code rất nặng

* Xóa thư viện 

==> Sinh ra công cụ quản lý các thư viện: Package Manager, Dependencies Manager,...

==> Market để chứa thư viện

Trong JS: npm, yarn,...

Đặc điểm: Cài đặt bằng câu lệnh

Khởi tạo dự án

```npm init -y``` ==> Tạo file package.json

## Cài đặt dự án

Cài đặt các dependencies trong file package.json đã khai báo

```npm i``` hoặc ```npm install``` ==> Tạo ra folder node_modules (chứa các thư viện)

Lưu ý: Khai báo folder node_modules trong file .gitignore --> không bị đẩy file lên git

## Cài đặt Dependencies (Thư viện)

- Xác định tên thư viện: Google, Market,... 
- Cài bằng câu lệnh:

```npm i tenthuvien@phienban``` => Cài đặt bản chỉ định
```npm i tenthuvien``` ==> Cài phiên bản mới nhất

## Xóa thư viện
 
```npm uninstall tenthuvien```

## Các loại Dependencies 

- Simple Dependencies ==> Thư viện để chạy dự án
```npm i tenthuvien```
- Dev Dependencies ==> Thư viện hỗ trợ trong quá trình dev dự án

```npm i tenthuvien --save-dev```

Lưu ý: Khi cài đặt dự án (npm i) ==> npm cài đặt tất cả các loại dependencies có trong file package.json

Chỉ định chỉ cài các dependencies của productions

```npm i --product```

Các kiểu cài dependencies

- Local: Mặc định
- Global: Cài đặt ở folder trên Server mà dự án nào cũng dùng được

```npm i tenthuvien -g```

Kiểm tra các Deependencies cài Global

```npm list -g```

Kiểm tra đường dẫn Global

```npm root -g```

## Cập nhật phiên bản


# Module Bundler

Môi trường

- Development --> Phát triển sản phẩm (Code)
- Test / Staging --> Kiểm thử
- Production --> Sản phẩm (Người dùng thật)

Biên môi trường: Lưu trữ các giá trị ở các môi trường cụ thể

Ví dụ: Server API, Database,...

Quản lý các biến môi trường ==> Sử dụng qua file .env


