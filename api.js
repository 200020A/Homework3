let token = null;

export function setToken(newToken) {
  token = newToken;
}

export function getTodos() {
  return fetch("https://wedev-api.sky.pro/api/v1/anastasia-petrova/comments", {
    method: "GET",
  }).then((response) => {
    if (!response.ok) {
      if (response.status === 500) {
        alert("Сервер сломался, попробуйте позже");
      }
      throw new Error("Ответ сервера не был успешным");
    }
    return response.json();
  });
}

export function loginUser({ login, password }) {
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}

export function postComment({ text }) {
  return fetch("https://wedev-api.sky.pro/api/v1/anastasia-petrova/comments", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось отправить комментарий");
    }
    return response.json();
  });
}
