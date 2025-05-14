import { postComment } from "../api.js";
import { getComments } from "./getComments.js";

export function renderAddCommentForm({ userName }) {
  const app = document.getElementById("app");

  const formContainer = document.createElement("div");
  formContainer.innerHTML = `
    <form id="add-comment-form">
      <input type="text" id="name-input" value="${userName}" readonly />
      <textarea id="text-input" placeholder="Ваш комментарий"></textarea>
      <button type="submit" id="add-button">Добавить</button>
    </form>
  `;

  app.appendChild(formContainer);

  document.getElementById("add-comment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("text-input").value;

    if (!text) {
      alert("Введите текст комментария");
      return;
    }

    postComment({ text })
      .then(() => {
        getComments(() => {});
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
