const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');

let counter = 1;

nextBtn.addEventListener('click', () => {
  if (counter === 1) {
    slide1.style.display = 'none';
    slide2.style.display = 'block';
    counter++;
  } else {
    slide1.style.display = 'block';
    slide2.style.display = 'none';
    counter = 1;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter === 1) {
    slide1.style.display = 'none';
    slide2.style.display = 'block';
    counter++;
  } else {
    slide1.style.display = 'block';
    slide2.style.display = 'none';
    counter = 1;
  }
});
