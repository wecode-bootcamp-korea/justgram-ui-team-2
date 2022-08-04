const inputIDById = document.getElementById("id_input")
const inputPWDById = document.getElementById("pwd_input")
const loginBtnById = document.getElementById("login_btn")

function onInput() {
    const id = inputIDById.value;
    const pwd = inputPWDById.value;

    if(id.length > 1 && pwd.length > 1) {
        // 로그인 버튼 활성화
        loginBtnById.style.backgroundColor = "#4ec5f4"
        loginBtnById.style.cursor = "pointer"
    } else {
        // 로그인 버튼 비활성화
        loginBtnById.style.backgroundColor = "skyblue";
    }
}

inputIDById.addEventListener('input', onInput);

inputPWDById.addEventListener('input', onInput);