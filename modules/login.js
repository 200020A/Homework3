import { loginUser, setToken } from "../api.js";

export function renderLoginForm({ onLoginSuccess }) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="login-form">
      <h3>Вход</h3>
      <input type="text" id="login-input" placeholder="Логин" />
      <input type="password" id="password-input" placeholder="Пароль" />
      <button id="login-button">Войти</button>
    </div>
  `;

  document.getElementById("login-button").addEventListener("click", () => {
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;

    if (!login || !password) {
      alert("Введите логин и пароль");
      return;
    }

    loginUser({ login, password })
      .then((user) => {
        setToken(user.user.token);
        onLoginSuccess();
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
