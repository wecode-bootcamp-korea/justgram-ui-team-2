
// login-input 2개인데 그 중 첫번째
// 고유하게 구분하고 싶으면 id로 구분하기
// const nicknameInput = document.getElementsByClassName('login-input')
// const emailInput = document.getElementById('email-input');

// vaule값 알고싶으면
// emailInput.value
// console.log(emailInput.value)

// 바뀔때마다
// emailInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });

/*
    addEventListener : 이벤트를 추가한다
    첫번째 매개변수 : 어떤이벤트인지, ex) input, keyEvent..
    () => {} : 익명함수, 재사용 안해도 될때 사용, 콜백함수부분
    function  btnClick() { } 기명함수 : 이름이 있는 함수, 재사용할 떄 사용
    idInput.addEventListener('input', () => { });


*/

const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginBtn = document.getElementById('login-btn');
loginBtn.disabled = true;

function onInput(event) {
    // console.log(event);
    // event.target.value;
    const id = idInput.value;
    const pw = pwInput.value;

    if( id.length > 1 && pw.length >1 ) {
        // 버튼 활성화
        console.log('활성화');
        loginBtn.style.backgroundColor='#4ec5f4';
        loginBtn.style.cursor='pointer';
        loginBtn.disabled = false;
    }
    else {
        // 버튼 비활성화
        console.log('비활성화');
        loginBtn.style.backgroundColor='#cde9f4';
        loginBtn.style.cursor='not-allowed';
        loginBtn.disabled = true;
    }
}

idInput.addEventListener('input', onInput);
pwInput.addEventListener('input', onInput);

loginBtn.addEventListener("click", () => {
    console.log('클릭')
    // 로그인 했을 때 로직
});
