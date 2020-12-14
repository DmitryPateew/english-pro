"use strict";

const createRound = () => {
  const div = document.createElement("div");
  div.classList.add("aboutMe__round");
  return div;
};

const addRoundToStickers = (goalElement) => {
  let roundHeight;
  window.innerWidth < 768 ? roundHeight = 27 : roundHeight = 31;
  const stikerHeight = goalElement.clientHeight;
  const position = goalElement.querySelector(".aboutMe__roundPosition");
  const expectedRoundCount = Math.trunc(stikerHeight / roundHeight);
  position.innerHTML = "";
  for (let i = 0; i < expectedRoundCount; i++) {
    position.appendChild(createRound());
  }
};

const changeImgFromResolution = () => {
  const teacherImg = document.querySelector(".aboutMe__photo");
  const width = window.innerWidth;
  if (width < 768) {
    teacherImg.src = "img/content/photo/desktopTicherImage.jpg";
  }
  if (width > 768 && width < 1200) {
    teacherImg.src = "img/content/photo/tabletTicherImage.jpg";
  }
  if (width >= 1200) {
    teacherImg.src = "img/content/photo/desktopTicherImage.jpg";
  }
};

changeImgFromResolution();


addRoundToStickers(document.querySelector(".aboutMe"));
addRoundToStickers(document.querySelector(".aboutMe--methods"));
window.innerWidth > 850 ? addRoundToStickers(document.querySelector(".aboutMe--right")) : document.querySelector(".aboutMe--right").querySelector(".aboutMe__roundPosition").innerHTML = "";


window.onresize = () => {
  changeImgFromResolution();
  addRoundToStickers(document.querySelector(".aboutMe"));
  addRoundToStickers(document.querySelector(".aboutMe--methods"));
  window.innerWidth > 850 ? addRoundToStickers(document.querySelector(".aboutMe--right")) : document.querySelector(".aboutMe--right").querySelector(".aboutMe__roundPosition").innerHTML = "";


};

