var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(key) {
    var arrKey = key.split('.');
    var old = null;
    arrKey.forEach(name => {
        if (old == null && errors[name]) {
            old = errors[name];
        } else {
            if (old[name]) {
                old = old[name]
            } else {
                old = null;
            }
        }
    });

    if (old) {
        return old;
    } else {
        return 'Không tồn tại';
    }
}

console.log(getError('password.same'));
console.log(getError('password.unique'));