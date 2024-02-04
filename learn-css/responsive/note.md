# Responsive

- Responsive Web Design: Thiết kế web thích ứng
- Sử dụng kích thước màn hình để thay đổi giao diện
- Sử dụng CSS
- Có 2 hình thức xây dựng web thích ứng: Responsive, Adaptive

## Breakpoint

- Điểm dừng mà tại dó giao diện sẽ thay đổi
- Không có các breakpoint cho tất cả các dự án
- Chỉ có các breakpoint phổ biến --> Triển khai các breakpoiunt riêng cho từng dự án
- Nên tham khảo các CSS Framework để chọn ra các breakpoint phổ biến

Các breakpoint phổ biến (Theo bootstrap 5)

- 576px
- 768px
- 992px
- 1200px
- 1400px

## Viewport

Khung nhìn nội dung mà người dùng nhìn thấy

## Queries Media

- At-rules của CSS cho phpes kiểm tra kích thước màn hình trước khi CSS

```css
@media all|screen|print and (min-width: value) and (max-width: value){
    body{
        color: red;
    }
}   
```


2 trường phái Responsive

1. Desktop First: Ưu tiên giao diện màn hình lơn struowcs, các màn hình nhỏ hơn đưa vào media query
```css
@media screen and (max-width: 1399,98px){
    body{
        color:red
    }
}

@media screen and (max-width: 1199px){
    body{
        color:blue
    }
}

@media screen and (max-width: 991px){
    body{
        color:green
    }
}

@media screen and (max-width: 767px){
    body{
        color:yellow
    }
}

@media screen and (max-width: 575px){
    body{
        color:purple
    }
}
```
2. Mobile First: Ưu tiên giao diện nhỏ nhất
```css
@media screen and (min-width: 576px){
    body{
        color:purple
    }
}
@media screen and (min-width: 768px){
    body{
        color:red
    }
}
@media screen and (min-width: 992px){
    body{
        color:orange
    }
}
@media screen and (min-width: 1200px){
    body{
        color:blue
    }
}
@media screen and (min-width: 1400px){
    body{
        color:green
    }
}
```