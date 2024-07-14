// JavaScript
feather.replace();

function aosInit() {
  console.log("aos init");
  AOS.init({
    duration: 1000,
    easing: "ease",
    offset: 100,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const screen = document.getElementById("screen");
  setTimeout(() => {
    loadingScreen.style.opacity = 0;
  }, 3000);
  setTimeout(() => {
    loadingScreen.style.display = "none";
    screen.style.display = "block";
  }, 4000);
  setTimeout(() => {
    screen.style.opacity = 1;
    aosInit();
  }, 4500);
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  function changeColorOnHover() {
    links.forEach((link) => link.classList.add("hovered"));
  }

  function resetColorOnLeave() {
    links.forEach((link) => link.classList.remove("hovered"));
  }

  links.forEach((link) => {
    link.addEventListener("mouseover", changeColorOnHover);
    link.addEventListener("mouseout", resetColorOnLeave);
  });
});

const navBar = document.getElementById("nav-bar-list");
const overlay = document.getElementById("overlay");

function menuClick() {
  navBar.style.left = 0;
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.opacity = 0.4;
  }, 100);
}

overlay.addEventListener("click", () => {
  navBar.style.left = "-300px";
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
});

function xClick() {
  navBar.style.left = "-300px";
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Web Developer", "Mobile Developer"];

  let currentTextIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 20;
  const deletingSpeed = 20;
  const delayBetweenTexts = 1000;
  const delayAfterDeleting = 500;

  function type() {
    const currentText = texts[currentTextIndex];
    let displayText = "";

    if (isDeleting) {
      displayText = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      displayText = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    document.querySelector(".typing").innerHTML = displayText;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(type, delayAfterDeleting);
    } else {
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  type();
});

window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav-bar-floating");
  const scrollPosition =
    window.pageXOffset || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-7rem";
  }
});

function cardHover() {
  const cardResume = document.getElementById("card-resume");
  const line = document.getElementById("line");

  cardResume.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  cardResume.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover2() {
  const links = document.querySelectorAll(".card ul li a");
  const line = document.getElementById("line-2");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      line.style.backgroundColor = "var(--primary-color)";
    });
    link.addEventListener("mouseout", () => {
      line.style.backgroundColor = "";
    });
  });
}

function cardHover3() {
  const card = document.getElementById("card-exp");
  const line = document.getElementById("line-3");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover4() {
  const card = document.getElementById("card-fre");
  const line = document.getElementById("line-4");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover5() {
  const card = document.getElementById("card-skil");
  const line = document.getElementById("line-5");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover6() {
  const card = document.getElementById("card-skil-2");
  const line = document.getElementById("line-6");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover7() {
  const card = document.getElementById("card-skil-3");
  const line = document.getElementById("line-7");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

function cardHover8() {
  const card = document.getElementById("card-soft");
  const line = document.getElementById("line-8");

  card.addEventListener("mouseover", () => {
    line.style.backgroundColor = "var(--primary-color)";
  });

  card.addEventListener("mouseout", () => {
    line.style.backgroundColor = "";
  });
}

cardHover8();
cardHover7();
cardHover6();
cardHover5();
cardHover4();
cardHover3();
cardHover2();
cardHover();

const btnCategory = document.querySelectorAll(".btn-category button");
const containerEdu = document.getElementById("edu");
const containerExp = document.getElementById("exp");
const soft = document.getElementById("soft");
const hard = document.getElementById("hard");

function eduClick() {
  btnCategory[0].classList.add("active-btn");
  btnCategory[1].classList.remove("active-btn");

  containerExp.style.display = "none";
  containerEdu.style.display = "block";
}

function expClick() {
  btnCategory[1].classList.add("active-btn");
  btnCategory[0].classList.remove("active-btn");

  containerExp.style.display = "block";
  containerEdu.style.display = "none";
}

function hardSkillClick() {
  btnCategory[2].classList.add("active-btn");
  btnCategory[3].classList.remove("active-btn");

  soft.style.display = "none";
  hard.style.display = "block";
}

function softSkillClick() {
  btnCategory[3].classList.add("active-btn");
  btnCategory[2].classList.remove("active-btn");

  soft.style.display = "block";
  hard.style.display = "none";
}

window.addEventListener("load", function () {
  const form = document.getElementById("form");
  const cardLoader = document.getElementById("card-loader");
  const success = document.getElementById("success");
  const failed = document.getElementById("failed");
  const inputs = document.querySelectorAll("form input");
  const textAreaInput = document.querySelector("textarea");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    cardLoader.style.display = "flex";

    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        cardLoader.style.display = "none";
        success.style.display = "block";
        inputs.forEach((input) => {
          input.value = "";
        });
        textAreaInput.value = "";
      })
      .then(() => {
        setTimeout(() => {
          success.style.display = "none";
        }, 2000);
      })
      .catch(() => {
        cardLoader.style.display = "none";
        failed.style.display = "block";
        inputs.forEach((input) => {
          input.value = "";
        });
        textAreaInput.value = "";
        setTimeout(() => {
          failed.style.display = "none";
        }, 2000);
      });
  });
});

const setting = document.getElementById("setting");

function openSetting() {
  setting.style.display = "block";
  navBar.style.left = "-300px";
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.opacity = 0.4;
    setting.style.opacity = 1;
  }, 500);
}

function closeSetting() {
  overlay.style.opacity = 0;
  setting.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
    setting.style.display = "none";
  }, 500);
}

overlay.addEventListener("click", () => {
  setting.style.opacity = 0;
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
});

const themes = document.querySelectorAll(".theme .card div");
const elements = document.querySelectorAll("section");
const body = document.querySelector("body");
const nav = document.querySelectorAll("nav");
const settingBtn = document.getElementById("setting-btn-lg");
const cardLoader = document.getElementById("card-loader");
const loader = document.getElementById("loader");

function lightActive() {
  themes[0].classList.add("theme-active");
  themes[1].classList.remove("theme-active");

  elements.forEach((element) => {
    if (element.id === "hero") {
      element.classList.remove("hero-dark");
    } else if (element.id === "feature") {
      element.classList.remove("feature-dark");
    } else if (element.id === "portfolio") {
      element.classList.remove("portfolio-dark");
    } else if (element.id === "resume") {
      element.classList.remove("resume-dark");
    } else if (element.id === "contact") {
      element.classList.remove("contact-dark");
    }

    setting.classList.remove("setting-dark");
    settingBtn.style.backgroundColor = "";

    cardLoader.classList.remove("loader-dark");
    loader.style.color = "var(--dark-color-font)";

    body.classList.remove("body-dark");
    nav[0].classList.remove("nav-dark");
    nav[1].classList.remove("nav-dark");
    nav[1].style.backgroundColor = "";
  });
}

function darkActive() {
  themes[1].classList.add("theme-active");
  themes[0].classList.remove("theme-active");

  elements.forEach((element) => {
    if (element.id === "hero") {
      element.classList.add("hero-dark");
    } else if (element.id === "feature") {
      element.classList.add("feature-dark");
    } else if (element.id === "portfolio") {
      element.classList.add("portfolio-dark");
    } else if (element.id === "resume") {
      element.classList.add("resume-dark");
    } else if (element.id === "contact") {
      element.classList.add("contact-dark");
    }

    setting.classList.add("setting-dark");
    body.classList.add("body-dark");

    cardLoader.classList.add("loader-dark");
    loader.style.animation = "l17-dark 2s infinite";
    loader.style.color = "var(--primary-color)";

    nav[0].classList.add("nav-dark");
    nav[1].classList.add("nav-dark");
    nav[1].style.backgroundColor = "var(--dark-color)";
    settingBtn.style.backgroundColor = "var(--dark-color)";
  });
}

const colors = document.querySelectorAll(".color .card div");
const svg = document.getElementById("set-svg");

function changePink() {
  document.documentElement.style.setProperty("--primary-color", "#e3577c");

  colors.forEach((color) => {
    if (color.classList.contains("pink")) {
      color.classList.add("color-active");
    } else {
      color.classList.remove("color-active");
    }
  });

  svg.setAttribute("fill", "#e3577c");
}

function changeBlue() {
  document.documentElement.style.setProperty("--primary-color", "#4da1cd");

  colors.forEach((color) => {
    if (color.classList.contains("blue")) {
      color.classList.add("color-active");
    } else {
      color.classList.remove("color-active");
    }
  });

  svg.setAttribute("fill", "#4da1cd");
}

function changeOrange() {
  document.documentElement.style.setProperty("--primary-color", "#ff8800");

  colors.forEach((color) => {
    if (color.classList.contains("orange")) {
      color.classList.add("color-active");
    } else {
      color.classList.remove("color-active");
    }
  });

  svg.setAttribute("fill", "#ff8800");
}

function changeGreen() {
  document.documentElement.style.setProperty("--primary-color", "#6c8337");

  colors.forEach((color) => {
    if (color.classList.contains("green")) {
      color.classList.add("color-active");
    } else {
      color.classList.remove("color-active");
    }
  });

  svg.setAttribute("fill", "#6c833");
}
