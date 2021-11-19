fetch("assets/json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results[0].original_title);

    data.results.forEach((element) => {
      //   console.log(element.original_title);
      //   console.log(element.id);
      //   console.log(element["poster_patch"]);
      console.log();
      document.getElementById("copy").innerHTML += `
      <div class="col-lg-3 col-8 m-auto" id="${element.id}">

    <div class="row">

        <img class ="img col-lg-5 mt-5" src="${element.poster_path}">

        <div class="col-lg-7">

            <div class="row mt-3">

                <p class="titre mt-4">${element.original_title}</p>
                <p class="text">${element.overview}</p>
                <p class="mt-5 text-warning">${displayStar(
                  element.vote_average
                )}</p>

            </div>
        </div>
    </div>`;
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

// function displayStar(note) {
//   let vote_average = Number(note) / 2;
//   vote_average = Math.floor(vote_average);
//   let stars = "";
//   switch (vote_average) {
//     case 1:
//       stars = `<i class="bi bi-star-fill"></i>`;
//       break;
//     case 2:
//       stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
//       break;
//     case 3:
//       stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
//       break;
//     case 4:
//       stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
//       break;
//     case 5:
//       stars = `<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`;
//       break;
//     default:
//       break;
//   }
//   return stars;
// }
