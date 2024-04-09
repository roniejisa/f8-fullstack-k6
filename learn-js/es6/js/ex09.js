// Async/await
/**
 * 
 * 
 */

// const myPromise = Promise.reject("Error");
// const getData = async () => {
//     try {
//         const data = await myPromise;
//         return data;
//     } catch (e) {
//         console.dir(e);
//     } finally {
//         console.log("Thực hiện xong");
//     }
// Xử lý để show dữ liệu lên tình duyệt (Xử lý DOM);
// }

// getData();

// Bắt lỗi khi dùng async, await
// try {
//     getA();
// } catch (e) {
//     if (e.message) {
//         console.log('Có lỗi xảy ra: ' + e.message);
//     } else {
//         console.log(e);
//     }
// } finally {
//     console.log('Đã xong');
// }

/**
 * Thứ tự chạy của try catch 
 * 
 * Chạy code ở trong try block
 * 
 * Nếu xảy ra lỗi thì chuyển xuống catch
 */

// try {
// const a;
// Tự tạo lỗi ( Thường sử dụng khi gặp lỗi logic)
// const a = 10;
// if (a <= 10) {
//Bắn lỗi xuống catch
//         throw new Error("Giá trị phải lớn hơn 10")
//     }

//     console.log("F8")
// } catch (e) {
//     console.log(e.message);
// }




// const callUser = async () =>
//     new Promise((resolve, reject) => {
//         reject("Error");
//     })


// const getUser = async () => {
// Nếu return không có await sẽ trả về y nguyên promise ban đầu
// Dễ dàng bắt lỗi ở ngoài

// Nếu return có await thì resolve data sau đó trả về promise khó bắt lỗi ở ngoài
//     try{
//         const user = await callUser();
//         return user;
//     }catch(e){
//         return 1;
//     }
// }
// getUser().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })


// const users = ["Item 1", "Item 2", "Item 3"];

// const getUserByIndex = (index) => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(users.find((user, userIndex) => userIndex === index))
//     }, 1000);
// });

// getUserByIndex(2).then(user => {
//     console.log(user);
// });

// const arr = [0, 2]; 
// Trả về các user có index trong mảng arr;

// (async () => {
//     const output = (await Promise.all(arr.map(index => getUserByIndex(index)))).join(' ');
//     console.log(output);
// })()