let button = document.getElementById("add-comment");
let comments = document.getElementsByClassName("comments")[0];
let input = document.getElementById("comment-input");

function getCommentComponent(commentText) {
  let comment = document.createElement("div");
  comment.classList.add("comment");

  let avatar = document.createElement("span");
  avatar.classList.add("avatar");

  let text = document.createElement("p");
  text.classList.add("comment-text");
  text.innerText = commentText;

  comment.appendChild(avatar);
  comment.appendChild(text);

  return comment;
}

button.addEventListener("click", (event) => {
  let comment = getCommentComponent(input.value);

  comments.appendChild(comment);
});
