function loadSummerTours() {
  fetch("tours.json")
    .then((response) => response.json())
    .then((tours) => {
      const filteredTours = tours.filter(
        (tour) =>
          tour.season.toLowerCase() === "summer" ||
          tour.season.toLowerCase() === "all seasons"
      );

      const container = document.getElementById("featured-tours");
      container.innerHTML = ""; // Clear content

      filteredTours.forEach((tour, index) => {
        const isEven = index % 2 === 0;
        const imageClass = isEven ? "tour-img-left" : "tour-img-right";

        const layout = isEven
          ? `
<div class="row g-0">
    <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="${
          tour.image
        }" class="img-fluid w-100 h-100 object-fit-cover" alt="${tour.name}">
    </div>
    <div class="col-md-6 p-4 d-flex flex-column justify-content-center">
        <h5 class="tour-title">${tour.name}</h5>
        <p class="tour-description">${tour.description}</p>
        <p class="tour-meta">⏱ ${tour.duration} &nbsp;&nbsp; 💵 ${
              typeof tour.price === "number" ? `$${tour.price}` : tour.price
            }</p>
        <a href="${
          tour.website
        }" class="btn btn-primary mt-3 align-self-start">View their website</a>

    </div>
</div>`
          : `
<div class="row g-0 flex-row-reverse">
    <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="${
          tour.image
        }" class="img-fluid w-100 h-100 object-fit-cover" alt="${tour.name}">
    </div>
    <div class="col-md-6 p-4 d-flex flex-column justify-content-center">
        <h5 class="tour-title">${tour.name}</h5>
        <p class="tour-description">${tour.description}</p>
        <p class="tour-meta">⏱ ${tour.duration} &nbsp;&nbsp; 💵 ${
              typeof tour.price === "number" ? `$${tour.price}` : tour.price
            }</p>
        <a href="${
          tour.website
        }" class="btn btn-primary mt-3 align-self-start">View their website</a>

    </div>
</div>`;
        container.innerHTML += `
                    <div class="col-md-12">
                        <div class="card tour-card-horizontal shadow-sm mb-4">
                            ${layout}
                        </div>
                    </div>`;
      });
    })
    .catch((err) => console.error("Failed to load tours:", err));
}

loadSummerTours();
