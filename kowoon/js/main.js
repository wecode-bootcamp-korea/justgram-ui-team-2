const cmtinput = document.getElementsByClassName("commentinput");
const cmtbutton = document.getElementsByClassName("commentbutton");
const cmtlist = document.getElementsByClassName("feed-comment-list");

// 댓글창에 글자 입력하면 게시버튼 활성화하는 기능 넣고 싶은데... 안되네...
// function onInput() {
//   const cmtin = cmtinput;
//   if (cmtin >= 1) {
//     cmtbutton.style.backgroundColor = "blue";
//     cmtbutton.style.cursor = "pointer";
//     cmtbutton.disabled = "false;";
//   } else {
//     cmtbutton.style.backgroundColor = "red";
//     cmtbutton.style.cursor = "not-allowed;";
//     cmtbutton.disabled = "true;";
//   }
// }

// 댓글들 fetch 함수로 가져와서 배열해주기

fetch("./data/comments.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // console.log(cmtlist); //길이가 3개임을 확인할 수 있음.
    //   //데이터를 받아서 배열로 다시 할당하기
    let commentArray = data.feeds; // data는 배열이 아니니까 data.feeds로 해서 배열로 만들어줌.
    //   // console.log(commentArray);

    //   // 배열에 담긴 댓글을 하나하나 반복문 돌기
    commentArray.forEach((comment) => {
      // 먼저 commentList 반복문 돌면서 피드 하나하나에 댓글 하나씩 넣주기
      for (let i = 0; i < commentArray.length; i++) {
        // 댓글을 넣을 div
        const commentElem = document.createElement("div");
        // 댓글 닉네임을 넣을 span 태그
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-name";
        nameSpan.textContent = comment.userName;
        //댓글 내용 넣어주기
        const content = comment.content;
        commentElem.append(nameSpan, content); //하나의 댓글이 완성
        //피드 하나하나에 댓글 넣기
        cmtlist[i].append(commentElem);
      }
    });
  });

// 게시 버튼 누르면 아이디랑 같이 댓글 입력 실행

// console.log(Array.from(cmtbutton));
Array.from(cmtbutton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = cmtinput[index].value;
    // console.log(content);
    // 자식요소를 만들고
    const childElem = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "고운";
    //닉네임 붙이고
    childElem.append(nameSpan, content);
    //댓글 내용 붙여서
    cmtlist[index].appendChild(childElem);
  });
});

//엔터키 누르면 입력되는거... 어케하는 거임...

// function fnEnterkey() {
//   if (window.event.keyCode == 13) {
//     Array.from(cmtbutton).forEach((button, index) => {
//       button.addEventListener("keypress", () => {
//         const childElem = document.createElement("div");
//         const nameSpan = document.createElement("span");
//         nameSpan.className = "comment-name";
//         nameSpan.textContent = "고운";
//         childElem.append(nameSpan, content);
//         cmtlist[index].appendChild(childElem);
//       });
//     });
//   }
// }
