window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(". tabheader_items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tabheader_item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tab.classList.add("tabheader_item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
