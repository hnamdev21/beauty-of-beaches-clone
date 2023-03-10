import { getBeaches } from "../modules/getData.js";

export default function renderTopFamousCards() {
  const topFamousSection = document.querySelector(".top-10-famous");
  const wrapperCards = topFamousSection.querySelector(".wrapper-cards");
  const maxItem = 10;

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
    for (let i = 0; i < maxItem; i++) {
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
}
