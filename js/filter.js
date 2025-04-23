// // filter.js

// document.addEventListener("DOMContentLoaded", function () {
//   const filterLinks = document.querySelectorAll("[data-filter]");
//   const activityCards = document.querySelectorAll("[data-category]");

//   filterLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();

//       // Remove active class from all links
//       filterLinks.forEach((l) => l.classList.remove("active"));
//       link.classList.add("active");

//       const filter = link.getAttribute("data-filter");

//       activityCards.forEach((card) => {
//         const category = card.getAttribute("data-category");

//         if (filter === "all" || filter === category) {
//           card.style.display = "";
//         } else {
//           card.style.display = "none";
//         }
//       });
//     });
//   });
// });

// const buttons = document.querySelectorAll(".category-btn");
// const cards = document.querySelectorAll(".activity-card");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const selectedCategory = button.getAttribute("data-category");

//     // Highlight the active button
//     buttons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");

//     cards.forEach((card) => {
//       const cardCategory = card.getAttribute("data-category");
//       if (selectedCategory === "all" || cardCategory === selectedCategory) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll("#card-container > .col-md-4");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (category === "all" || cardCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
