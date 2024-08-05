const colorHoverInitial = getComputedStyle(document.documentElement).getPropertyValue('--color-initial');
const colorHoverOne = getComputedStyle(document.documentElement).getPropertyValue('--sec-color-one');
const colorHoverTwo = getComputedStyle(document.documentElement).getPropertyValue('--sec-color-two');
const colorHoverThree = getComputedStyle(document.documentElement).getPropertyValue('--sec-color-three');
const colorHoverFour = getComputedStyle(document.documentElement).getPropertyValue('--sec-color-four');
const colorBtn = document.querySelectorAll('.btn-contato button');
const colorHover = document.querySelectorAll('.sidebar li a');
const colorToggle = document.querySelector('.toggle');

window.addEventListener('scroll', function () {
  const header = document.querySelector('#header-two');
  const scrollY = window.scrollY;
  const sections = document.querySelectorAll('.section-scrolling');

  let currentSection;
  for (const section of sections) {
    const sectionRect = section.getBoundingClientRect();
    if (sectionRect.top <= 0 && sectionRect.bottom >= 1) {
      currentSection = section.id;
      break;
    }
  }

  colorHover.forEach(element => {
    element.addEventListener('mouseover', () => {
      if (scrollY > 0 && currentSection === 'banner') {
        element.style.background = colorHoverInitial;
      } else if (currentSection === 'sec-one') {
        element.style.background = colorHoverOne;
      } else if (currentSection === 'sec-two') {
        element.style.background = colorHoverTwo;
      } else if (currentSection === 'sec-three') {
        element.style.background = colorHoverThree;
      } else if (currentSection === 'sec-four') {
        element.style.background = colorHoverFour;
      } else {
        element.style.removeProperty('background');
      }
      element.addEventListener('mouseout', () => {
        element.style.background = '';
      });
    });
  });

  if (currentSection) {
    header.classList.remove('scrolling-banner', 'scrolling-one', 'scrolling-two', 'scrolling-three', 'scrolling-four');
    if (scrollY > 0 && currentSection === 'banner') {
      header.classList.add('scrolling-banner');
      colorToggle.style.background = colorHoverInitial;
      colorBtn.forEach(button => button.style.background = colorHoverInitial);
    } else if (currentSection === 'sec-one') {
      header.classList.add('scrolling-one');
      colorToggle.style.background = colorHoverOne;
      colorBtn.forEach(button => button.style.background = colorHoverOne);
    } else if (currentSection === 'sec-two') {
      header.classList.add('scrolling-two');
      colorToggle.style.background = colorHoverTwo;
      colorBtn.forEach(button => button.style.background = colorHoverTwo);
    } else if (currentSection === 'sec-three') {
      header.classList.add('scrolling-three');
      colorToggle.style.background = colorHoverThree;
      colorBtn.forEach(button => button.style.background = colorHoverThree);
    } else if (currentSection === 'sec-four') {
      header.classList.add('scrolling-four');
      colorToggle.style.background = colorHoverFour;
      colorBtn.forEach(button => button.style.background = colorHoverFour);
    } else {
      header.classList.remove('scrolling-banner', 'scrolling-one', 'scrolling-two', 'scrolling-three', 'scrolling-four');
      colorToggle.style.removeProperty('background');
      colorBtn.forEach(button => button.style.removeProperty('background'));
    }
  } else {}
});

var typingEffect = new Typed(".multiText", {
  strings: ["NOVOS MUNDOS", "NOVOS CAMINHOS", "NOVOS DESTINOS", "NOVOS CONHECIMENTOS"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
})
