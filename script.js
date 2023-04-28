const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

box1.onclick =function(){
    box1.style.cssText =`
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: red;
    padding: 20px;
    
    `
}


box2.onclick =function(){
    box2.style.cssText =`
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: yellow;
    padding: 20px;
    
    `
}

box3.onclick =function(){
    box3.style.cssText =`
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: black;
    padding: 20px;
    
    `
}
// tapsiriq 2
const book = document.querySelector(".book");
const btnclickme1 = document.querySelector(".btnclickme1");
const btnclickme2 = document.querySelector(".btnclickme2")
const btnclickme3 = document.querySelector(".btnclickme3")
btnclickme1.onclick = function() {
    book.style.cssText =`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: red;
    color: black;
\

    `
}
btnclickme2.onclick = function() {
    book.style.cssText =`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: yellow;
    color: black;
\

    `
}
btnclickme3.onclick = function() {
    book.style.cssText =`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color:green;
    color: black;


    `
}

// tapsiriq 3
const btnclick = document.querySelector("#btnclick")

function generateColor(){
    const arr= [ 0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let code ="";
    for(let i=0;i<6;i++){
        code += arr[Math.floor(Math.random()*16)];
    }
    return `#${code}`
}
btnclick.addEventListener(`click`,() => {
    document.getElementById("change").style.backgroundColor =generateColor()
})