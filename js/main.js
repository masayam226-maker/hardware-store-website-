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


const categoryItems = document.querySelectorAll('.category-link');

categoryItems.forEach(item => {
  const targetId = item.dataset.menu; // 例: "smartBtn", "pcBtn", "hardBtn"
  const targetDropdown = document.getElementById(targetId); // 対応する dropdown を取得
  const overlay1 = document.querySelector('.overlay1');
   let hoverTimeout;

  // ボタンにマウスが乗ったとき
  item.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    targetDropdown.classList.add('show');
	overlay1.classList.add('show');
  });

  // ボタンからマウスが離れたとき
  item.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
      targetDropdown.classList.remove('show');
    }, 300); // 少し遅らせて、dropdownに移動する時間を確保
	overlay1.classList.remove('show');
  });

  // マウスが乗ったとき
  targetDropdown.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    targetDropdown.classList.add('show');
	overlay1.classList.add('show');
  });

  // マウスが離れたとき
  targetDropdown.addEventListener('mouseleave', () => {
    targetDropdown.classList.remove('show');
	overlay1.classList.remove('show');
  });
});

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    item.addEventListener('click', () => {
      const isOpen = targetDropdown.classList.contains('show');

      
   if (isOpen) {
        targetDropdown.classList.remove('show');
        overlay1.classList.remove('show');
   } else {
        
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('show'));
        targetDropdown.classList.add('show');
        overlay1.classList.add('show');
     }
  });

   
    overlay1.addEventListener('click', () => {
      targetDropdown.classList.remove('show');
      overlay1.classList.remove('show');
    });
  }


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

// --- アコーディオン ---
document.querySelectorAll('.accordion-title').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;
    item.classList.toggle('open');
  });
});