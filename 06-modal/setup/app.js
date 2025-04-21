// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

ModalBtn = document.querySelector(".modal-btn");
ModalOvr = document.querySelector(".modal-overlay")
CloseBtn = document.querySelector(".close-btn")

ModalBtn.addEventListener("click", function () {
    ModalOvr.classList.add("open-modal");
  });
  CloseBtn.addEventListener("click", function () {
    ModalOvr.classList.remove("open-modal");
  });