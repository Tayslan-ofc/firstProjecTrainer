const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeSwitchAll = document.querySelectorAll(".menu-bar .mode .toggle-switch");
const banner = document.querySelector("#banner");
const header = document.querySelector("#header-two");
const secTextOne = document.querySelector(".sec-text-one");
const secTextTwo = document.querySelector(".sec-text-two");
const secTextThree = document.querySelector(".sec-text-three");
const secTextFour = document.querySelector(".sec-text-four");
const modeSun = document.querySelector(".sun");
const modeMoon = document.querySelector(".moon");
const modeTextLight = document.querySelector(".text-light");
const modeTextDark = document.querySelector(".text-dark");
const coverInput = document.querySelectorAll(".search-box input");
const separateLine = document.querySelector(".separate-line");
const sidebarIconMin = document.querySelectorAll(".sidebar li .icon, .sidebar .separate-line .icon");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let darkMode = false;

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkMode = !darkMode;

  if (darkMode) {
    modeMoon.style.opacity = "1";
    modeSun.style.opacity = "0";
    modeTextLight.style.visibility = "hidden";
    modeTextDark.style.visibility = "visible";
  } else {
    modeSun.style.opacity = "1";
    modeMoon.style.opacity = "0";
    modeTextLight.style.visibility = "visible";
    modeTextDark.style.visibility = "hidden";
  }
});

let contador = true;

function adicionarEstiloScroll() {
  if (!document.getElementById('hide-scrollbar-style')) {
    const style = document.createElement('style');
    style.id = 'hide-scrollbar-style';
    document.head.appendChild(style);
  }
}

function alternarTamanho() {
  adicionarEstiloScroll();
  const estiloScroll = document.getElementById('hide-scrollbar-style');

  if (contador == true) {
    estiloScroll.innerHTML = `
      /* Esconde a barra de rolagem */
      ::-webkit-scrollbar {
        display: inline;
      }
    `;

    header.style.marginLeft = "10%";
    header.style.width = "90%";
    toggle.style.transform = "translateY(-50%) rotate(0deg)";
    secTextOne.style.marginLeft = "30vh";
    secTextThree.style.marginLeft = "30vh";
    modeSwitchAll.forEach(modeSwitch => modeSwitch.style.right = "3%");
    coverInput.forEach(coverInput => coverInput.style.opacity = "1");
    sidebarIconMin.forEach(sidebarIconMin => sidebarIconMin.style.minWidth = "25%");

    contador++;
  } else {
    estiloScroll.innerHTML = `
      /* Exibe a barra de rolagem */
      ::-webkit-scrollbar {
        display: none;
      }
    `;

    header.style.width = "100%";
    header.style.marginLeft = "0%";
    toggle.style.transform = "translateY(-50%) rotate(180deg)";
    secTextOne.style.marginLeft = "20vh";
    secTextThree.style.marginLeft = "20vh";
    modeSwitchAll.forEach(modeSwitch => modeSwitch.style.right = "0%");
    coverInput.forEach(coverInput => coverInput.style.opacity = "0");
    sidebarIconMin.forEach(sidebarIconMin => sidebarIconMin.style.minWidth = "100%");

    contador--;
  }
}
