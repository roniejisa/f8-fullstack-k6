const data = [];
const dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

const dataLogin = handleLogin("nguyenvanb@email.com", "12345672");

function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        console.log('Thông tin không hợp lệ!');
        return false;
    }

    data.push({ name, password, email, role: "user" });
}

function handleLogin(email, password) {
    var index = data.findIndex(function (user) {
        return email === user.email && password === user.password;
    });

    if (index != -1) {
        return data[index];
    }
    
    return "Thông tin đăng nhập không hợp lệ";
}

console.log(data);
console.log(dataLogin);

