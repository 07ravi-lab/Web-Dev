const URL="https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () =>{
    console,log("getting data ...");
    let respose = await fetch(URL);
    console.log(response); //jason formate
    let data = await response.jason();
    factPara.innerText = data[2].text;
};

btn.addEventListener("click",getFacts);