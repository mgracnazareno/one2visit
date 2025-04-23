document.addEventListener("DOMContentLoaded", function () {
  const cardsPerPage = 8;
  const cards = Array.from(
    document.querySelectorAll("#card-container .col-md-4")
  );
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "block" : "none";
    });
  }

  function createPagination() {
    pagination.innerHTML = "";

    // Previous button
    const prevItem = document.createElement("li");
    prevItem.className = "page-item" + (currentPage === 1 ? " disabled" : "");
    const prevLink = document.createElement("a");
    prevLink.className = "page-link";
    prevLink.href = "#";
    prevLink.textContent = "Previous";
    prevLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });
    prevItem.appendChild(prevLink);
    pagination.appendChild(prevItem);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.className = "page-item" + (i === currentPage ? " active" : "");
      const pageLink = document.createElement("a");
      pageLink.className = "page-link";
      pageLink.href = "#";
      pageLink.textContent = i;
      pageLink.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        updatePagination();
      });
      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
    }

    // Next button
    const nextItem = document.createElement("li");
    nextItem.className =
      "page-item" + (currentPage === totalPages ? " disabled" : "");
    const nextLink = document.createElement("a");
    nextLink.className = "page-link";
    nextLink.href = "#";
    nextLink.textContent = "Next";
    nextLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });
    nextItem.appendChild(nextLink);
    pagination.appendChild(nextItem);
  }

  function updatePagination() {
    showPage(currentPage);
    createPagination();
  }

  // Initialize
  updatePagination();
});
