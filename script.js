window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


document.addEventListener('DOMContentLoaded', () => {
  const leftBtns = document.querySelectorAll('.left-btn');
  const miniBtns = document.querySelectorAll('.mini-btn');
  const dots = document.querySelectorAll('.carousel-dot');
  const carouselBg = document.querySelector('.carousel-inner-bg');
  const carouselBtn = document.querySelector('.carousel-btn');
  const headingCarousel = carouselBtn.querySelector('h4');
  const paraCarousel = carouselBtn.querySelector('p');

  const images = [
    'assets/images/inbox-slider.png',
    'assets/images/board-slider.png',
    'assets/images/planner-slider.png'
  ];

  const headings = [
    'Inbox',
    'Boards',
    'Planner'
  ]

  const paras = [
    'When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.',
    'Your to-do list may be long, but it can be manageable! Keep tabs on everything from "to-dos to tackle" to "mission accomplished!”',
    'Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.'
  ]

  function goToSlide(index) {
    carouselBg.style.backgroundImage = `url('${images[index]}')`;
    carouselBtn.setAttribute('data-target', index);
    headingCarousel.innerText = headings[index];
    paraCarousel.innerText = paras[index];
    
    leftBtns.forEach(b => b.classList.remove('active'));
    if(leftBtns[index]) leftBtns[index].classList.add('active');

    miniBtns.forEach(b => b.classList.remove('active'));
    if(miniBtns[index]) miniBtns[index].classList.add('active');

    dots.forEach(d => d.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
  }

  [...leftBtns, ...miniBtns].forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-target'));
      goToSlide(index);
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      goToSlide(index);
    });
  });

  goToSlide(0);
});



const buttons = document.querySelectorAll(".testi-btn");
const carouselInner = document.querySelector(".testi-carousel-inner");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.getAttribute("data-slide"));
    carouselInner.style.transform = `translateX(${-100 * index}%)`;
     buttons.forEach(b => b.classList.remove("active"));
     btn.classList.add("active");
  });
});