fetch("assets/json/movies.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results[0].original_title);

    data.results.forEach((element) => {
      //   console.log(element.original_title);
      //   console.log(element.id);
      //   console.log(element["poster_patch"]);
      document.getElementById(
        "copy"
      ).innerHTML += `<div class="col-lg-3 col-8 m-auto" id="${element.id}">

    <div class="row">

        <img class ="img col-lg-5 mt-3" src="${element.poster_path}">

        <div class="col-lg-7">

            <div class="row mt-3">

                <p class="titre">${element.original_title}</p>
                <p class="text">${element.overview}</p>
                <p>${element.vote_average}</p>

            </div>
        </div>
    </div>`;
    });
  });
