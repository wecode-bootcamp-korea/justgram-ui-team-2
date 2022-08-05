// 변수
const commentInput = document.getElementsByClassName("add-comment-input");
const commentBtn = document.getElementsByClassName("add-comment-btn");

console.log(commentInput);
console.log(commentBtn);

// const commentInputArray = Array.from(commentInput);
// const commentBtnArray = Array.from(commentBtn);

// console.log(commentInputArray);
// console.log(commentBtnArray);

// 함수

function isEnter(event) {
  if (event.keyCode == "13") {
  }
}

function writeComment(event) {
  const content = document.createElement("div");
  //Array.forEach(element) => {
  const newUsername = document.createElement("span");
  const newContent = document.createElement("span");
  const newLike = document.createElement("button");

  newUsername = "user";
  newContent = commentInput.value;

  document.body.append(newUsername, "username");
  document.body.append(newContent); //콘텐츠 내용
  document.body.append(newLike);
  //}
}

// 이벤트
commentInput.addEventListener("keydown", (event) => writeComment(event));
commentBtn.addEventListener("click", (event) => writeComment(event));

// commentInput.addEventListener("enter", writeComment);
// commentBtn.addEventListener("click", writeComment);

// <button type="button" class="transparent-btn">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png"
//           alt="코멘트좋아요"
//           class="comment-like-btn"
//         />
//       </button>
