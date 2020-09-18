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

const getArtists = () => {
  $("#select-genre-id").prop("selectedIndex", 0);
  $("#select-instrument-id").prop("selectedIndex", 0);
  $.get("/api/artists/all", data => {
    populateArtists("artist-list-id", data);
  });
}

const populateArtists = (elementId, data) => {
  $(`#${elementId}`).empty();
  console.log(data);
  if (data.length > 0) {
    data.forEach(e => {
      $(`#${elementId}`).append(
        `<section class="row bg-dark mt-4 ml-1 mr-1 p-2 rounded">
       <div class="w-auto m-1 pl-4 pr-4 pt-1 pb-1 bg-light rounded artist-name">${e.first_name} ${e.last_name}</div>
       <div class="ml-auto m-1 p-1 bg-light rounded artist-genre">${e.Genres[0].genre_name}</div>
       <div class="m-1 p-1 bg-light rounded artist-instrument">${e.Instruments[0].instrument_name}</div>
       <div class="row ml-1 mr-1 justify-content-between">
       <div class="col-8 p-2 bg-light rounded artist-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.</div></div></section>`
      );
    });
  } else {
    $(`#${elementId}`).append(
      "<section class='row bg-dark text-light mt-4 ml-1 mr-1 p-2 rounded'>No Users found that match the criteria.</section>"
    );
  }
};

$("#select-genre-id").on("change", () => {
  const searchedGenre = $("#select-genre-id").val();
  const searchedInstrument = $("#select-instrument-id").val();
  if (searchedGenre && searchedInstrument) {
    $.get(`/api/artists/both/${searchedGenre}/${searchedInstrument}`, data => {
      populateArtists("artist-list-id", data);
    });
  } else {
    $.get(`/api/artists/genre/${searchedGenre}`, data => {
      populateArtists("artist-list-id", data);
    });
  }
});

$("#select-instrument-id").on("change", () => {
  const searchedGenre = $("#select-genre-id").val();
  const searchedInstrument = $("#select-instrument-id").val();
  if (searchedGenre && searchedInstrument) {
    $.get(`/api/artists/both/${searchedGenre}/${searchedInstrument}`, data => {
      populateArtists("artist-list-id", data);
    });
  } else {
    $.get(`/api/artists/instrument/${searchedInstrument}`, data => {
      populateArtists("artist-list-id", data);
    });
  }
});

$("#button-all-id").on("click", () => {
  getArtists();
});

getArtists();
