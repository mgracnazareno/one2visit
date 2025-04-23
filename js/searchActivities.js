// Toggle search bar visibility
const toggleBtn = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("activitySearchInput");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchBar.classList.toggle("d-none");
  if (!searchBar.classList.contains("d-none")) {
    searchInput.focus(); // Autofocus when shown
  }
});

// Filter activity cards based on search input
const cards = document.querySelectorAll("#card-container .col-md-4");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
