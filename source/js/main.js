"use strict";
(function () {

  const closePopUp = () => {
    const closeElement = document.querySelector(`.popUp__close`);
    closeElement.addEventListener(`click`, () => {
      document.querySelector(`.popUpSection`).remove();
    });
  };

  const Method = {
    POST: `POST`,
  };

  const showPopUp = () => {
    const popUp = document.querySelector(`template`).content.cloneNode(true);
    document.body.appendChild(popUp);
  };


  const sendMail = () => {
    const form = new FormData(document.querySelector('.form'));
    const object = {};
    form.forEach(function (value, key) {
      object[key] = value;
    });
    fetch('/', {
      method: Method.POST,
      body: JSON.stringify(object),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(showPopUp)
      .then(closePopUp)
  };

  const sendForm = () => {
    const button = document.querySelector(`.form`);
    button.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      sendMail();
    });
  };

  sendForm();


  const createRound = (cssClass) => {
    const div = document.createElement("div");
    div.classList.add(cssClass);
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
      position.appendChild(createRound("aboutMe__round"));
    }
  };

  let menu = function () {
    if (window.innerWidth < 500) {
      let toggle = document.querySelector('.checkbox');
      let nav = document.querySelector('.navigation');
      nav.classList.add('navigation--disable');
      toggle.addEventListener('click', function (evt) {
        nav.classList.toggle('navigationActive');
      });
    }
  };

  menu();

  const addHeaderRound = () => {
    if (window.innerWidth > 507) {
      const element = document.querySelector(".navigation__roundPosition");
      const expectedRoundCount = Math.trunc(element.clientWidth / 31);
      for (let i = 0; i < expectedRoundCount; i++) {
        element.appendChild(createRound("navigationRound"));
      }
    }
  };

  addHeaderRound();

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

  const changeImgFromResolutionSlider = () => {
    const secondImg = document.querySelector(".slideImg--second");
    const thirdImg = document.querySelector(".slideImg--third");
    const width = window.innerWidth;
    if (width < 768) {
    }
    if (width > 768 && width < 1200) {
      secondImg.src = "img/content/photo/slider/groupTablet.jpg";
      thirdImg.src = "img/content/photo/slider/individualTablet.jpg";
    }
    if (width >= 1200) {
      secondImg.src = "img/content/photo/slider/group.jpg";
      thirdImg.src = "img/content/photo/slider/individual.jpg";
    }
  };

  const upButton = () => {
    const upButton = document.querySelector('.buttonUp');

    window.onscroll = function () {
      if (window.pageYOffset > 200) {
        upButton.classList.add('shown');
      } else {
        upButton.classList.remove('shown');
      }

    };

    upButton.onclick = function () {
      window.scrollTo(0, 0);
    };
  };

  let setYear = function () {
    let year = new Date();
    let yearInPage = document.querySelector('.unp__date');
    yearInPage.textContent = '2013 - ' + year.getFullYear() + ' © Все права защищены';
  };
  setYear();

  upButton();

  changeImgFromResolutionSlider();


  addRoundToStickers(document.querySelector(".aboutMe"));
  addRoundToStickers(document.querySelector(".aboutMe--methods"));
  window.innerWidth > 850 ? addRoundToStickers(document.querySelector(".aboutMe--right")) : document.querySelector(".aboutMe--right").querySelector(".aboutMe__roundPosition").innerHTML = "";


  window.onresize = () => {
    changeImgFromResolution();
    addRoundToStickers(document.querySelector(".aboutMe"));
    addRoundToStickers(document.querySelector(".aboutMe--methods"));
    window.innerWidth > 850 ? addRoundToStickers(document.querySelector(".aboutMe--right")) : document.querySelector(".aboutMe--right").querySelector(".aboutMe__roundPosition").innerHTML = "";

  };
})();

