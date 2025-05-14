export function formatDate(currentDate) {
  return new Date().toLocaleDateString("ru-RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }) + " " + new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
