let current = 0;
const pages = document.querySelectorAll('.page');

function updatePages() {
  pages.forEach((page, index) => {
    page.classList.remove('active', 'prev');

    if (index === current) {
      page.classList.add('active');
    } else if (index < current) {
      page.classList.add('prev');
    }
  });
}

updatePages();

/* SWIPE DETECTION */
let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    // swipe kiri → next
    if (current < pages.length - 1) {
      current++;
      updatePages();
    }
  } else if (diff < -50) {
    // swipe kanan → prev
    if (current > 0) {
      current--;
      updatePages();
    }
  }
});

/* AUTO PLAY MUSIK setelah tap pertama */
document.body.addEventListener('click', () => {
  document.getElementById('music').play();
}, { once: true });
