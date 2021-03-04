import "./styles.css";
setUpFilterEvent();

//Copy from here
document.addEventListener("DOMContentLoaded", () => {
  setUpFilterEvent();
});

function setUpFilterEvent() {
  const postItems = document.querySelectorAll(
    "#abw_filter_content .aw_filer_item"
  );

  document.getElementById("abw_filterbar").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const filterContent = document.getElementById("abw_filter_content");
      let filterActive = e.target.dataset.filterActive;

      filterActive === "0" ? (filterActive = "1") : (filterActive = "0");
      e.target.dataset.filterActive = filterActive;
      e.target.classList.toggle("aw_active");

      filterContent.classList.remove("fade-in-fwd");
      void filterContent.offsetWidth;

      const filterAttribute = e.target.dataset.filter;
      updateItemVisibility(filterAttribute, postItems, filterActive);

      filterContent.classList.add("fade-in-fwd");

      unsetFilterButtonStyles(e.target);
    }
  });
}

function updateItemVisibility(filterAttribute, postItems, filterActive) {
  postItems.forEach((postItem) => {
    if (filterAttribute === "reset" || filterActive === "0") {
      postItem.classList.remove("aw_hidden");
    } else {
      postItem.classList.toggle(
        "aw_hidden",
        !postItem.dataset[filterAttribute]
      );
    }
  });
}

function unsetFilterButtonStyles(activeFilterBtn) {
  const filterButtons = document.querySelectorAll("#abw_filterbar button");

  filterButtons.forEach((button) => {
    if (activeFilterBtn !== button || button.dataset.filter === "reset") {
      button.dataset.filterActive = 0;
      button.classList.toggle("aw_active", false);
    }
  });
}
