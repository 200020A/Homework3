export function renderComments(comments) {
  const listElement = document.getElementById("list");
  listElement.innerHTML = comments.map(comment => `
    <li class="comment">
      <div class="comment-header">${comment.name}</div>
      <div class="comment-body">
        <div class="comment-text">${comment.text}</div>
      </div>
      <div class="comment-footer">
        <div class="comment-date">${comment.date}</div>
        <div class="comment-likes">♥ ${comment.likeCount}</div>
      </div>
    </li>`).join("");
}
