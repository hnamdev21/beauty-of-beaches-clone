import addEventScrollList from "./animation/addEventScrollList.js";
import renderTopFamousCards from "./utils/renderTopFamousCards.js";
import renderTopViewCards from "./utils/renderTopViewCards.js";
import renderFeedbackCards from "./utils/renderFeedbackCards.js";
import renderFestivalCards from "./utils/renderFestivalCards.js";
import handleFavoriteItemHome from "./utils/handleFavoriteItemHome.js";

const APP = {
  init() {
    const url = new URL(window.location);

    APP.addAnimationHeader();

    renderTopFamousCards();
    renderTopViewCards();
    renderFeedbackCards();
    renderFestivalCards();

    APP.addEventListener.addEventHomePage();
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

  addEventListener: {
    addEventHomePage() {
      addEventScrollList();
      handleFavoriteItemHome();
    },
  },

  checkItemFavorited() {},
};

document.addEventListener("DOMContentLoaded", APP.init);
