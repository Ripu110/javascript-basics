let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log(evt.offsetX, evt.offsetY);

    // console.log("Button 1 was clicked");
    // let a = 25;
    // a++;
    // console.log(a);//26
}
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("we are inside the div");
};

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";//dark    
modebtn.addEventListener("click", () => {
    console.log("you are trying to change mode");
    if(currMode === 'light') {
        currMode = "dark"; 
        body.classList.add("dark"); 
        body.classList.remove("light"); 
    } else {
        currMode = "light";
        body.classList.add("light"); 
        body.classList.remove("dark "); 
    }
    console.log(currMode);
});
