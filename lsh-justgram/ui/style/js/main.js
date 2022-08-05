// 변수
const commentInput = document.getElementsByClassName("add-comment-input");
const commentBtn = document.getElementsByClassName("add-comment-btn");
const commentList = document.getElementsByClassName("comment-list");

Array.from(commentBtn).forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentText = commentInput[index].value;

    const newComment = document.createElement("div");
    const commentName = document.createElement("span");
    const commentValue = document.createElement("span");

    commentName.textContent = "username";
    commentName.className = "bold";
    commentValue.textContent = commentText;

    newComment.append(commentName, commentValue);
    commentList[index].append(newComment);
    commentInput[index].value = "";
  });
});
