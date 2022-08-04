// const commentWriteInput = document.getElementsByClassName("commentinput");
// const commentWriteButton = document.getElementsByClassName("commentbutton");
// const commentList = document.getElementsByClassName("feed-comment-list");

// console.log(Array.from(commentWriteButton));
// Array.from(commentWriteButton).forEach((button, index) => {
//   button.addEventListener("click", () => {
//     const content = commentWriteInput[index].value;

//     const childElem = document.createElement("div");

//     const nameSpan = document.createElement("span");
//     nameSpan.className = "comment-name";
//     nameSpan.textContent = "kowoon";

//     childElem.append(nameSpan, content);

//     commentList[index].appendChild(childElem);
//   });
// });

const cmtinput = document.getElementsByClassName("commentinput");
const cmtbutton = document.getElementsByClassName("commentbutton");
const cmtlist = document.getElementsByClassName("feed-comment-list");

console.log(Array.from(cmtbutton));
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

// cmtbutton.addEventListener("click", () => {
//   const content = cmtinput.value;
//   // console.log(content);
//   // 자식요소를 만들고
//   const childElem = document.createElement("div");

//   const nameSpan = document.createElemtn("span");
//   nameSpan.className = "comment-name";
//   nameSpan.textContent = "고운";
//   //닉네임 붙이고
//   childElem.append(nameSpan, content);

//   //댓글 내용 붙여서

//   cmtlist.appendchild(childElem);
// });
