let button = document.getElementsByClassName("loginBtn");
button[0].addEventListener("click",clicked);
function clicked() {
    alert("ddd");
}

let id = document.getElementsByClassName("id");
let pw = document.getElementsByClassName("password");

id[0].addEventListener("keyup",change);
pw[0].addEventListener("keyup",change);

button[0].disabled = true;
function change() {
    switch(!(id[0].value&&pw[0].value)) {
        case true : button[0].disabled = true; break;
        case false : 
            button[0].style.cursor = "pointer";
            button[0].classList.add("loginBtnN");
            button[0].href="main.html" 
            break;
    }
}