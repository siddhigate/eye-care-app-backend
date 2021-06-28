const close_dialog = document.querySelector(".done-btn");
const modal_window = document.querySelector("#open-modal");
const open_dialog = document.querySelector(".interior")

close_dialog.addEventListener("click", () => {
  console.log("clicked");
  modal_window.style.display = "none";
})

open_dialog.addEventListener("click", () => {
  window.location.hash = '#open-modal';
  modal_window.style.display = "block";
})
