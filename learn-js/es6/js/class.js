//Class
class Person {
    name = "";
    constructor(name) {
        // console.log(name);
        // console.log("Constructor Person")
        this.name = name;
        // Lưu name tại person
    }

    getEmail() {
        return this.email;
    }
}

class Girl extends Person {
    email = "roniejisa.com" // Cách tạo thuộc tính mới từ phiên bản ES13 (Năm 2022)
    #data = []; //Thuộc tính data sẽ được private trong class Girl
    constructor(name) {
        // Gọi constructor của cha
        super(name);
    }

    getInfo() {
        return `Name: ${this.name}`;
    }
    setData(data) {
        this.#data.push(data);
    }
    getData() {
        return this.#data;
    }

    #getEmail() {
        return this.name;
    }
}


const girl = new Girl("Minh Hiếu");

// console.log(girl.getInfo());
// girl.setData(1);
// console.log(girl.getData());
// console.log(girl.getEmail());

/**
 * Từ class con có thuể truy cập các thuộc tính và phương thức của class cha và ngược lại
 */


class User {
    #data = ["Item 1", "Item 2", "Item 3"];

    constructor() { }
    get data() {
        return this.#data
    }
    
    set data(value) {
        this.#data.push(value);
    }


    static getName(){
        return "Hello anh em"
    }
}

const user = new User();
console.log(user.data);

console.log(User.getName());

user.data = "Item 1";
user.data = "Item 2";

console.log(user.data);

/**
 * 
 * Lưu ý:
 * 
 * Trong hàm static --> This sẽ là class hiên jtaij
 * Trong hàm non static --> this. sẽ là object
 * Để truy cập thuộc tính, phương thức static từ phuwognt hức non-static --> Cần chuyển từ this thành class
 */