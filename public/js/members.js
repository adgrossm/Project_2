$.get("/api/genres", data => {
  $("#select-genre-id").empty();
  $("#select-genre-id").append("<option disabled selected>Genre</option>");
  data.forEach(e => {
    $("#select-genre-id").append(
      `<option value="${e.id}">${e.genre_name}</option>`
    );
  });
});

$.get("/api/instruments", data => {
  $("#select-instrument-id").empty();
  $("#select-instrument-id").append(
    "<option disabled selected>Instrument</option>"
  );
  data.forEach(e => {
    $("#select-instrument-id").append(
      `<option value="${e.id}">${e.instrument_name}</option>`
    );
  });
});

$("#select-genre-id").on("change", () => {
  let searchedGenre = $("#select-genre-id")
    .val()
    .trim();

  searchedGenre = searchedGenre.replace(/\s+/g, "").toLowerCase();
  $.get(`/api/artists/genre/${searchedGenre}`, data => {
    $("#artist-list-id").empty();

    if (data.length > 0) {
      $("#artist-list-id").append(
        `<section class="row bg-dark mt-4 ml-1 mr-1 p-2 rounded">
         <div class="w-auto m-1 pl-4 pr-4 pt-1 pb-1 bg-light rounded artist-name">${data[0].first_name} ${data[0].last_name}</div>
         <div class="ml-auto m-1 p-1 bg-light rounded artist-genre">${data[0].genres[0].genre_name}</div>
         <div class="m-1 p-1 bg-light rounded artist-instrument">Bass Guitar</div>
         <div class="row ml-1 mr-1 justify-content-between">
         <div class="col-8 p-2 bg-light rounded artist-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</div></div></section>`
      );
    } else {
      $("#artist-list-id").append(
        "<section class='row bg-dark text-light mt-4 ml-1 mr-1 p-2 rounded'>No Users found that match the criteria.</section>"
      );
    }
  });
});
