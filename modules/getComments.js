import { getTodos } from "../api.js";
import { renderComments } from "./renderComments.js";
import { formatDate } from "./formatDate.js";

export function getComments(callback) {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";

  getTodos()
    .then((responseData) => {
      const comments = responseData.comments.map(comment => ({
        name: comment.author.name,
        date: formatDate(comment.date),
        text: comment.text,
        likeCount: comment.likes,
        isLiked: false
      }));
      renderComments(comments);
      loadingElement.style.display = "none";
      callback(comments);
    })
    .catch(error => {
      console.error("Ошибка при загрузке комментариев:", error);
      alert("Ошибка загрузки данных.");
    })
    .finally(() => {
      loadingElement.textContent = "Не удалось загрузить страницу";
    });
}
