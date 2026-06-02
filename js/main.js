const images = ["img/ヘッドフォン/1.1.png", "img/ヘッドフォン/1.2.png", "img/ヘッドフォン/1.3.png"];
let currentIndex = 0;

const slideImage = document.getElementById("slideImage");
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  currentIndex = index;
  slideImage.src = images[currentIndex];
  changeImage(images[currentIndex]);

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}
function changeImage(newSrc) {
  const img = document.getElementById("slideImage");

  img.classList.remove("show");

  setTimeout(() => {
    img.src = newSrc;
    img.classList.add("show");
  }, 100);
}
  const ham = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".menu-close");

  ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    menu.classList.toggle("open");
    document.body.style.overflow = "hidden"; // 背景スクロール禁止
  });

  closeBtn.addEventListener("click", () => {
    ham.classList.remove("active");
    menu.classList.remove("open");
    document.body.style.overflow = ""; // 元に戻す
  });
document.getElementById("prevBtn").addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide(newIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % images.length;
  updateSlide(newIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateSlide(Number(dot.dataset.index));
  });
});

updateSlide(0);

document.querySelectorAll(".mobilem-title").forEach(title => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("open");
  });
});

document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
const filterBtn = document.querySelector('.filter-btn');
const menu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById("batsu");

filterBtn.addEventListener('click', () => {
  menu.classList.add('open');
  overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('show');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove('show');
});

});