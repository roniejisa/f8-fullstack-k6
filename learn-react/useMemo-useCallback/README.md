# useMemo
Lưu trự lại dữ liệu cũ, có dependencies
Lưu lại lịch sử của 1 biến để không bị render khi dữ liệu cũ bị thay đổi

Dùng khi sử dụng muốn trả về kết quả

# useCallback
Sử dụng khi tạo 1 hàm, có dependencies
Để lưu lại hàm để kiểm tra hàm có giống nhau hay không thường khởi tạo 1 lần

Dùng khi sử dụng không trả về kết quả

# memo 
Sử dụng khi tạo 1 hàm
Để lưu lại lịch sử để không bị re-render khi nhập input

Nên hạn chế sử dụng useMemo, useCallback