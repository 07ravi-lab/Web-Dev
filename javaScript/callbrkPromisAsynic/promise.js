// let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise");
//     // resolve("123");
//     reject("some error occured");
// });

// const getData = (dataId, getNextData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {  // Fixed setTimeout syntax
//             console.log("data", dataId);
//             resolve("success");

//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// };

const getPromis =() =>{
    return new Promise ((reslove,reject)=>{
        console.log("i am a promise");
        resolve("success");
    });
};

// let promis = getPromise();
// promise.then()=>{
//     console.log("promise fullfilment");
// };
