/**
 * 
 * Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:

Hàm return về giá trị
Ép ràng buộc kiểu dữ liệu là số
Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

 */

function add(...args) {
    if (args.length === 0) {
        return 'Không có giá trị!'
    }
    var notNumber = false;
    var total = 0;
    if (args.length) {
        for (var i = 0; i < args.length; i++) {
            var value = +args[i];
            if (Number.isNaN(value) || typeof value !== 'number') {
                notNumber = true
                break;
            }
            total += value;
        }
        if (notNumber) {
            return 'Có giá trị không hợp lệ';
        }
        return total;
    }
}