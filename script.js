//Nav menu functions

const revealerNav = window.revealer({
  revealElementSelector: ".nav-js",
  options: {
    anchorSelector: ".nav-btn-js",
  },
});

const navButton = document.querySelector(".nav-btn-js");
const menuItems = document.querySelectorAll(".menu-item");

navButton.addEventListener("click", () => {
  if (!revealerNav.isRevealed()) {
    revealerNav.reveal();
    navButton.setAttribute("data-open", true);
  } else {
    revealerNav.hide();
    navButton.setAttribute("data-open", false);
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      navButton.setAttribute("data-open", true);
    } else {
      revealerNav.hide();
      navButton.setAttribute("data-open", false);
    }
  });
});

//fade effects
window.onload = () => {
  titleParts.forEach((part) => {
    part.style.opacity = "100%";
    part.style.transform = "translateX(0)";
  });
  document.querySelector('.main-title').style.color = 'var(--light)';
};

//Elements

const titleParts = document.querySelectorAll("#hero div");
const bioListItems = document.querySelectorAll(".bio-item");
const bioList = document.querySelector(".bio-list");
const projectCards = document.querySelectorAll(".card");
const bioTexts = document.querySelectorAll(".bio-text");

//Detect element position in viewport

function detectViewPortEntry(item) {
  const rect = item.getBoundingClientRect();
  const itemTop = rect.top;
  const itemBase = rect.bottom;

  let isVisible = itemTop >= 0 && itemBase <= window.innerHeight;
  return isVisible;
}

//All transition effects based ons croll position

window.addEventListener("scroll", () => {
  //language icons
  if (detectViewPortEntry(bioList)) {
    bioList.style.opacity = "100%";
    bioList.style.transform = "translateX(0)";
  }
  //section titles

  //project cards
  projectCards.forEach((card) => {
    if (detectViewPortEntry(card)) {
      card.style.opacity = "100%";
    }
  });
  //bio paragraph elements
  bioTexts.forEach((p) => {
    if (detectViewPortEntry(p)) {
      p.style.opacity = "100%";
    } else {
      p.style.opacity = "0%";
    }
  });
});

//loading screen
document.onreadystatechange = function () {
  let thisYear = new Date().getFullYear();
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector('.copyright').textContent = `Copyright ${thisYear} Ty Lewis`;
  }
};