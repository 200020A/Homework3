import { getComments } from "./modules/getComments.js";
import { renderLoginForm } from "./modules/login.js";

let isAuthenticated = false;

function initApp() {
  if (!isAuthenticated) {
    renderLoginForm({
      onLoginSuccess: () => {
        isAuthenticated = true;
        startCommentsApp();
      },
    });
  } else {
    startCommentsApp();
  }
}

function startCommentsApp() {
  document.getElementById("app").innerHTML = `
    <h3>Лента комментариев</h3>
    <ul id="list" class="comments"></ul>
    <div id="loading">Загрузка...</div>
  `;
  getComments(() => {
    console.log("Комментарии загружены");
  });
}

initApp();
