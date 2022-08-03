const button = document.getElementById("button");
const loginId = document.getElementById("name");
const passId = document.getElementById("password");

loginId.addEventListener("keyup", validate); //유효한 모듈을 생성하는지 ---- addEventListener('input', () => {}); 익명 함수
passId.addEventListener("keyup", validate);

function validate() {
  if (!(loginId.value && passId.value)) {
    //!는 논리 부정 연산자인데..... 로그인 칸이랑 패스워드 칸이랑 value 값이 없다면,
    console.log(loginId.value);
    button.disabled = true;
    button.style.cursor = "not-allowed;";
    button.style.bacogroundColor = "#cde9f4";
  } else {
    console.log(passId.value);
    button.disabled = false;
    button.style.backgroundColor = "blue";
    button.style.backgroundColor = "#4ec5f4";
    button.style.cursor = "pointer"; //근데... 한번 풀리면 계속 풀림....
  }
}

//  function onInput() {
//   const id = loginId.value;
//   const pw = passId.value;
//    if(id.length >= 1 && pw.length >= 1) {

//     button.style.backgroundColor = '#4ec5f4';
//     button.style.cursor = "pointer";
//     button.disabled = false;

//  } else {

//     button.style.bacogroundColor = '#cde9f4';
//     button.style.cursor="not-allowed;";
//     button.disabled = true;

//  }
// }
// loginId.addEventListener("input", onInput);
// passId.addEventListener("input", onInput);
