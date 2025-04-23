const toggleBtn = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchBar.classList.toggle("d-none");
});
