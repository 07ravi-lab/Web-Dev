let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt)=>{
        // console.log(evt);
        // console.log(evt.type);
        // console.log(evt.target);
        // console.log(evt.clientX);
// };

btn1.addEventListener("click", () =>{
    console.log("button was clicked");
});

let div = document.querySelector("div");

div.onmouseover = (evt) =>{
    console.log("you are in inside the box");
    console.log(evt);
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX);
};