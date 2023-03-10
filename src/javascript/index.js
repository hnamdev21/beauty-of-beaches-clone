import { getBeaches, getFestivals, getFeedback } from "./modules/getData.js";

const APP = {
  init() {
    const url = new URL(window.location);

    APP.addEventListener();
    APP.addAnimationHeader();
    APP.renderTopFamousCards();
    APP.renderTopViewsCards();
    APP.renderFeedbackCards();
    APP.renderFestivalsCards();
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

  renderTopFamousCards() {
    const topFamousSection = document.querySelector(".top-10-famous");
    const wrapperCards = topFamousSection.querySelector(".wrapper-cards");

    async function sortData() {
      const beaches = await getBeaches().then((data) => {
        // Order by famous
        for (let i = 0; i < data.length; i++) {
          for (let j = i + 1; j < data.length; j++) {
            let temp = data[i];

            if (data[j].famous > data[i].famous) {
              data[i] = data[j];
              data[j] = temp;
            }
          }
        }

        return data;
      });

      return beaches;
    }

    sortData().then((sortedBeaches) => {
      for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.classList = "card relative";
        card.innerHTML = `
                <div class="top-card relative">
                  <div class="card-image">
                    <img
                      src="${sortedBeaches[i].image1}"
                      alt="${sortedBeaches[i].name}"
                      class="beach__image"
                    />
                  </div>
                  <div class="card-sub-element">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div class="bot-card relative">
                  <h4 class="beach__name">${sortedBeaches[i].name}</h4>
                  <ul class="beach__info">
                    <li class="info__loaction">Location: ${sortedBeaches[i].location}</li>
                    <li class="info__views">Views: ${sortedBeaches[i].views}</li>
                    <li class="info__famous">Famous: ${sortedBeaches[i].famous}</li>
                  </ul>
                  <a href="/beach/id?${sortedBeaches[i].id}" class="beach__link">Learn more</a>
                </div>
        `;

        wrapperCards.appendChild(card);
      }
    });
  },

  renderTopViewsCards() {
    const topFamousSection = document.querySelector(".top-10-views");
    const wrapperCards = topFamousSection.querySelector(".wrapper-cards");

    async function sortData() {
      const beaches = await getBeaches().then((data) => {
        // Order by views
        for (let i = 0; i < data.length; i++) {
          for (let j = i + 1; j < data.length; j++) {
            let temp = data[i];

            if (data[j].views > data[i].views) {
              data[i] = data[j];
              data[j] = temp;
            }
          }
        }

        return data;
      });

      return beaches;
    }

    sortData().then((sortedBeaches) => {
      for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.classList = "card relative";
        card.innerHTML = `
                <div class="top-card relative">
                  <div class="card-image">
                    <img
                      src="${sortedBeaches[i].image1}"
                      alt="${sortedBeaches[i].name}"
                      class="beach__image"
                    />
                  </div>
                  <div class="card-sub-element">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div class="bot-card relative">
                  <h4 class="beach__name">${sortedBeaches[i].name}</h4>
                  <ul class="beach__info">
                    <li class="info__loaction">Location: ${sortedBeaches[i].location}</li>
                    <li class="info__views">Views: ${sortedBeaches[i].views}</li>
                    <li class="info__famous">Famous: ${sortedBeaches[i].famous}</li>
                  </ul>
                  <a href="/beach/id?${sortedBeaches[i].id}" class="beach__link">Learn more</a>
                </div>
              
        `;

        wrapperCards.appendChild(card);
      }
    });
  },

  renderFeedbackCards() {
    const feedbackSection = document.querySelector(".latest-feedback-section");
    const wrapperCards = feedbackSection.querySelector(".wrapper-cards");

    getFeedback().then((data) => {
      data.forEach((feedback) => {
        const card = document.createElement("div");
        card.classList = "card";

        card.innerHTML = `
              <div class="top-card flex flex-align-center flex-space-between">
                  <h4 class="user__name">${feedback.userName}</h4>
                  <span class="user__publish-date">${feedback.publishDate}</span>
                </div>
                <div class="bot-card flex flex-align-center flex-space-between">
                  <div class="user__image-uploaded">
                    <img
                      src="${feedback.imgFeedback}"
                      alt=""
                    />
                  </div>
                  <div class="user__feedback text-justify">
                    ${feedback.userFeedback}
                  </div>
                </div>
              </div>
        `;

        wrapperCards.appendChild(card);
      });
    });
  },

  renderFestivalsCards() {
    const festivalsSection = document.querySelector(".festivals-section");
    const wrapperCards = festivalsSection.querySelector(".wrapper-cards");
    const maxItem = 4;

    getFestivals().then((data) => {
      for (let i = 0; i < maxItem; i++) {
        const card = document.createElement("div");
        card.classList = "card flex";
        card.innerHTML = `
            <div class="left-card">
              <div class="card-image">
                  <a href="#">
                    <img
                      src="${data[i].img}"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="right-card flex flex-col">
                <h4 class="festival__name">${data[i].name}</h4>
                <div class="festival__detail">
                  <div class="detail__location">Loaction: ${data[i].location}</div>
                  <p class="detail__desc">
                    ${data[i].description}
                  </p>
                </div>
                <div
                  class="festival__countdown flex flex-align-center flex-space-between"
                >
                  <div class="countdown__day">
                    Day <span class="day">1</span>
                  </div>
                  <div class="countdown__hour">
                    Hour <span class="hour">1</span>
                  </div>
                  <div class="countdown__minutes">
                    Minute <span class="minutes">1</span>
                  </div>
                  <div class="countdown__second">
                    Second <span class="second">1</span>
                  </div>
                </div>
            </div>`;

        wrapperCards.appendChild(card);
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
