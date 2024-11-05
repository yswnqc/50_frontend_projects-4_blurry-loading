const bg = document.querySelector(".bg");
const text = document.querySelector(".progress");

let load = 0;
let timer;

const loading = () => {
  timer = setInterval(() => {
    load++;
    if (load > 99) {
      clearInterval(timer);
    }
    text.innerText = `${load}%`;
    text.style.opacity = `${1 - load / 100}`;
    bg.style.filter = `blur(${50 - 50 * (load / 100)}px)`;
  }, 30);
};

window.onload = () => {
  loading();
};

window.addEventListener("click", () => {
  load = 0;
  clearInterval(timer);
  loading();
});
