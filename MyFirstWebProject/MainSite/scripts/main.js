// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world';
let myImage = document.querySelector("img");
myImage.onclick=function(){
    let mysrc = myImage.getAttribute("src");
    if(mysrc === "images/lighting.jpg"){
        myImage.setAttribute("src","images/fire_fox.jpg");
    }
    else{
        myImage.setAttribute("src","images/lighting.jpg");
    }
}

function SetHeading(name){
    let myheading = document.querySelector('h1');
    myheading.textContent = 'Mozilla 酷毙了，' + name + '！';
}
function SetUser(){
    let username = prompt("请输入用户名");
    localStorage.setItem("name",username);
    SetHeading(username);
}

let name = localStorage.getItem("name");
if(!name){
    SetUser();
}
else{
    SetHeading(name);
}

let button = document.querySelector('button');
button.onclick=SetUser;