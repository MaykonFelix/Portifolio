export const NewTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Obrigado a visita👋😁 _Maykon_";
});
window.addEventListener("focus", () => {
  document.title = NewTitle;
});
