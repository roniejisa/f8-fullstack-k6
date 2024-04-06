//Async await

// Cách viết tuần tự

/*
    promise1() --> chạy hàm then
    promise2()
    promise3()
    function async(){
        await promise1() --> chạy them hàm then()
        await promise2() --> chạy them hàm then()
        await promise3() --> chạy them hàm then()
    } 
*/
// const a = 10;
// const myPromise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(a);
//     }, 1000);
// })

// const showData = async () => {
// This function always returns promise    const data = await myPromise
    // console.log(data);
    // const result = await a;

// }

// showData();