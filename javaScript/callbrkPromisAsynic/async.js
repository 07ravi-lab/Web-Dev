// async function hello() {
//     console.log("hello");
// }

// weather check

function api(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        },200);
    });
}

async function getweatherData(){
    await api();
}