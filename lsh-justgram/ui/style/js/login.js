//변수
const accountData = document.getElementById("account-data");
const passwordData = document.getElementById("password-data");
let isvaild = false;

const incomingData = document.getElementsByTagName("input");

const loginBtn = document.getElementById("loginBtn");

//함수

function checkVaildInfo() {
  let a = accountData.value.length;
  let p = passwordData.value.length;
  if (a !== 0 && p !== 0) {
    isvaild = true;
  } else {
    isvaild = false;
  }
  if (isvaild === true) {
    loginBtn.style.backgroundColor = "#083CD5";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#b9d9f9";
    loginBtn.disabled = true;
  }
  console.log(loginBtn);
}

//이벤트

incomingData[0].addEventListener("input", checkVaildInfo);
incomingData[1].addEventListener("input", checkVaildInfo);
