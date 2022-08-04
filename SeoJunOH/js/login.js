
function login() {
    const config = {
        method: "get"
    };
    fetch("https://gist.githubusercontent.com/Pi-ren/5b978f33d803b8fe5f79262340c82a69/raw/9d1dbd84ec5186747c505f7437304c2ecda1e774/profiles.json",config)
        .then(response => response.json())
        .then(data=>{
            let button = document.getElementsByClassName("loginBtn");
            let id = document.getElementsByClassName("id");
            let pw = document.getElementsByClassName("password");
            
            id[0].addEventListener("keyup",change);
            pw[0].addEventListener("keyup",change);
            button[0].addEventListener("click",clicked);
      
            function change() {
                if(!(id[0].value&&pw[0].value)) {
                        button[0].style.backgroundColor='lightblue'
                        button[0].style.cursor='default'
                }else{
                        button[0].style.backgroundColor='rgb(82, 168, 197)'
                        button[0].style.cursor='pointer'
                }
            }
            
            function clicked() {
                let t=0;
                for(let i=0; i<data.profiles.length;i++){
                    profile = data.profiles[i];
                    if(id[0].value==profile.id && pw[0].value==profile.password){
                        button[0].href="main.html";
                        t=1;
                    }else{
                        id[0].value=null;
                        pw[0].value=null;
                    }
                }
                if(t==0){
                    alert("아이디와 비밀번호가 일치하지 않습니다");
                }else if(t==1){
                    alert("로그인 되었습니다");
                }
            }
        })
    .catch(error => console.log("fetch error"));

}
login()