const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkdoVideo = video.src;



botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto");
  video.setAttribute("src", linkdoVideo);
});

botaoFecharModal.addEventListener("click", () => {
  modal.classList.remove("aberto");
  video.setAttribute("src", "");
});
