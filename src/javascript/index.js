const APP = {
  init() {
    const url = new URL(window.location);

    APP.addEventListener();
    APP.addAnimationHeader();
  },

  checkLocation() {},

  addAnimationHeader() {
    const header = document.getElementById("header-page");
    window.addEventListener("scroll", addClass);

    function addClass() {
      if (window.scrollY === 0) return header.classList.remove("resize");

      header.classList.add("resize");
    }
  },

  addEventListener() {
    const topListSections = [...document.querySelectorAll(".top-list-section")];

    topListSections.forEach((topListSection) => {
      const mask = topListSection.querySelector(".mask");
      const leftButton = topListSection.querySelector(".left-btn");
      const rightButton = topListSection.querySelector(".right-btn");
      const widthCard = 224;
      const marginBothSide = 40;

      leftButton.addEventListener("click", moveToLeftList);
      rightButton.addEventListener("click", moveToRightList);

      function moveToLeftList() {
        mask.scrollLeft -= widthCard + marginBothSide;
      }

      function moveToRightList() {
        mask.scrollLeft += widthCard + marginBothSide;
      }
    });
  },

  checkItemFavorited() {},
};

document.addEventListener("DOMContentLoaded", APP.init);
