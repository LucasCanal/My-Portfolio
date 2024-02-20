function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const botaoTrailer = document.querySelector(".link");
const botaoTrailer1 = document.querySelector(".link1");
const botaoTrailer2 = document.querySelector(".link2");
const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoFecharModal1 = document.querySelector(".fechar-modal1");
const botaoFecharModal2 = document.querySelector(".fechar-modal2");
const video = document.getElementById("video");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const linkDoVideo = video.src;
const linkDoVideo1 = video1.src;
const linkDoVideo2 = video2.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

function alternarModal1() {
    modal1.classList.toggle("aberto");
}

function alternarModal2() {
    modal2.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoTrailer1.addEventListener("click", () => {
    alternarModal1();
    video1.setAttribute("src", linkDoVideo1);
});

botaoTrailer2.addEventListener("click", () => {
    alternarModal2();
    video2.setAttribute("src", linkDoVideo2);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

botaoFecharModal1.addEventListener("click", () => {
    alternarModal1();
    video1.setAttribute("src", "");
});

botaoFecharModal2.addEventListener("click", () => {
    alternarModal2();
    video2.setAttribute("src", "");
});



