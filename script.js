async function fetchmovies() {
    try {
        const response = await fetch("https://movie-details-data.onrender.com/movie/get-movie");
        const movies = await response.json()
        const moviecardscontainer = document.getElementById("moviecards")
        moviecardscontainer.innerHTML=""
        if (response.ok) {
            movies.forEach(movie => {
                const card = document.createElement("div")
                card.className="col-lg-3 col-md-4 col-sm-6 mb-4"
                card.innerHTML = `<div class="card " style="cursor: pointer;" onclick="location.href='details.html?id=${movie._id}'">
                  <img class="card-img" src="${movie.image}" alt="vettaiyan">
                  <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <p class="card-text">${movie.genre}</p>
                  </div>
              </div>`
              moviecardscontainer.appendChild(card)
            });
        }
    } catch (error) {
        
    }
}

fetchmovies();