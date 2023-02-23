const slider = document.getElementById("myRange");
const tooltip = document.getElementById("myTooltip");
const progressBar = document.querySelector(".progress");
const maxVal = slider.max;
const cardDollar = document.querySelector(".card--dollar");
const standardCard = document.querySelectorAll(".table__card--standard");
const btnChanger = document.querySelector(".card__btn--outline");
const cardBtn = document.querySelector(".card__btn--interactive");

// const annuallyBtn = document.

// Display the tooltip value when the range slider thumb is moved
slider.oninput = function () {
  tooltip.innerHTML = `Total ${this.value} Channels`;
  progressBar.style.width = `${(this.value / maxVal) * 100}%`;

  // Position the tooltip on the thumb
  const thumbWidth = slider.offsetHeight;
  const thumbPosition =
    ((this.value - this.min) / (this.max - this.min)) *
    (slider.offsetWidth - thumbWidth);
  const tooltipPosition =
    thumbPosition - tooltip.offsetWidth / 2 + thumbWidth / 2;
  tooltip.style.left = `${tooltipPosition}px`;

  let val = this.value;
  cardDollar.textContent = +val * 5;
  // standardCard[0].style.filter = "grayscale(0)";
  standardCard[0].style.opacity = "1";
  // standardCard[1].style.filter = "grayscale(0)";
  standardCard[1].style.opacity = "1";
  btnChanger.style.border = "2px solid #1b1e35";
  btnChanger.style.backgroundColor = "#fff";
  btnChanger.style.color = "#1b1e35";
  cardBtn.style.backgroundColor = "#7a00ff";
  cardBtn.style.backgroundImage = "";
  if (val == 0) {
    tooltip.textContent = `Total ${+val + 10} Channels`;
    cardDollar.textContent = "50";
  } else if (val == 50) {
    cardBtn.style.backgroundImage = `url("https://uploads-ssl.webflow.com/629322c6e5ab0b1180f97933/63e3c34627c9c735d1e84373_50.svg")`;
  } else if (val == 100) {
    tooltip.textContent = `Total ${+val} Channels`;
    cardBtn.style.backgroundImage = `url("https://uploads-ssl.webflow.com/629322c6e5ab0b1180f97933/63e3c4a799c762763a433be1_100.svg")`;
  } else if (val == 150) {
    cardBtn.style.backgroundImage = `url("https://uploads-ssl.webflow.com/629322c6e5ab0b1180f97933/63e3c4a7b9221360dd1f6804_150.svg")`;
  } else if (val == 200) {
    cardBtn.style.backgroundImage = `url("https://uploads-ssl.webflow.com/629322c6e5ab0b1180f97933/63e3c4a7b9221360dd1f6804_150.svg")`;
    tooltip.textContent = `Total ${+val - 50}+ Channels`;
    cardDollar.textContent = "750";
    // standardCard[0].style.filter = "grayscale(1)";
    standardCard[0].style.opacity = "0.5";
    //standardCard[1].style.filter = "grayscale(1)";
    standardCard[1].style.opacity = "0.5";
    btnChanger.style.border = "2px solid #7A00FF";
    btnChanger.style.backgroundColor = "#7A00FF";
    btnChanger.style.color = "#fff";
  } else {
    tooltip.textContent = `Total ${+val} Channels`;
  }
};
