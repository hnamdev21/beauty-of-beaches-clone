export default function addEventScrollList() {
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
}
