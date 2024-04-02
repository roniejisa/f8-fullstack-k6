// const information = {
//     course: "Fullstack",
//     name: "Minh Hiếu"
// }

// const a = ["Item 1", "Item 2"];


// const user = {
//     name: "Minh Hiếu",
//     ...information,
//     email: "roniejisa@gmail.com"
// }

//Lưu ý : Chỉ trải cấp ngoài cùng


//Spread với function
// const sum = (a, b) => a + b;

// const input = [10, 30];
// console.log(sum(...input));

// Xây dựng các Arguments cho các hàm callback, xây dựng kỹ thuật debounce, clone, object, array (shallow)

// setTimeout((a, b, c) => {
//     console.log("Handle")
//     console.log(a, b, c);
// }, 1000, 'A', 'B', 'C');


// clone object, array (shallow)

// const c = ["Item", "Item 2", "Item 3"];
// const d = [...c];
// console.log(d);

// const user = {
//     name: "Minh Hiếu",
//     email: "roniejisa@gmail.com"
// };

// const key = "address";

// const newObj = { ...user, [key]: "Hà Nội" };
// Lấy object cũ --> Tạo ra 1 cái mới -> thêm phần tử mới
// console.log(newObj);
// console.log(newObj);/


// const todos = ["Todo 1", "Todo 2"];
// const newTodo = [...todos, "Todo 3"];
// console.log(newTodo);


/// Tạo mảng có 100 phần tử, lặp qua từng phần tử và trả về index
// [...Array(100).keys()].forEach(key => {
//     console.log(key)
// })

// console.log(Array(100).keys());



//Enhance object literal
// const name = "Minh Hiếu";
// const email = "ronejisa@gmail.com";
// function getEmail() {
//     return this.email
// }
// const user = {
//     name, email, getEmail
// }
// console.log(user.getEmail());


const addUser = ({ name, email, password }) => {
    console.log(name, email, password);
}

addUser({
    name: "Minh Hiếu",
    email: "roniejisa@gmail.com",
    password: "1234"
})


//// Ví dự 2: Destructuring trực tiếp trong callback


// const users= [
//     {
//         id:1,
//         name:"User 1"
//     },{
//         id:2,
//         name:"User 2"
//     },{
//         id:3,
//         name:"User 3"
//     },
// ]

// const getUser = userId => users.find(({id}) => id === userId)

// console.log(getUser(1));


// console.log(getUser(1));


//Named Arguments function

// const handleRegister = (name, email, status = true, note = "") => {
//     console.log(`Name:`, name)
//     console.log(`Email:`, email)
//     console.log(`Status:`, status)
//     console.log(`Note:`, note)
// }


// handleRegister("Minh Hiếu", "roniejisa@gmail.com", undefined, "1");


const handleRegister = ({ name, email, status = true, note = "" }) => {
    console.log(`Name:`, name)
    console.log(`Email:`, email)
    console.log(`Status:`, status)
    console.log(`Note:`, note)
}


handleRegister({ name: "Minh Hiếu", email: "roniejisa@gmail.com", note: "Hello" })