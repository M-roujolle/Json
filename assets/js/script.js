fetch("assets/json/film.json")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((element) => {
      document.getElementById("copy").innerHTML += `
      <div class="card mb-3 border border-white" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${
                      element.poster_path
                    }" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="title">${element.original_title}</h5>
                        <p class="text pt-5">${element.overview}</p>
                        <p class="text-warning star pt-5">${displayStar(
                          element.vote_average
                        )}</p>
                    </div>
                </div>
            </div>
        </div>
   
        
      `;
    });
  });

function displayStar(note) {
  let vote_average = Number(note) / 2;
  vote_average = Math.floor(vote_average);

  let stars = "";

  switch (vote_average) {
    case 1:
      stars = `<i class="bi bi-star-fill"></i>`;
      break;
    case 2:
      stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
      break;
    case 3:
      stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
      break;
    case 4:
      stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
      break;
    case 5:
      stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
      break;

    default:
      break;
  }
  return stars;
}
