// $(document).ready(() => {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(data => {
//     $(".member-name").text(data.email);
//   });
// });

$("#select-genre-id").on("change", () => {
  let searchedGenre = $("#select-genre-id")
    .val()
    .trim();

  searchedGenre = searchedGenre.replace(/\s+/g, "").toLowerCase();
  $.get(`/api/${searchedGenre}`, data => {
    console.log("OTHER THING HERE");
    console.log(data);
    // $("#well-section").empty();
    // if (!data) {
    //   $("#well-section").append(
    //     "<h2> The force is not strong with this one. Your character was not found. </h2>"
    //   );
    // } else {
    //   $("#well-section").append("<h2>" + data.name + "</h2>");
    //   $("#well-section").append("<h3>Role: " + data.role + "</h3>");
    //   $("#well-section").append("<h3>Age: " + data.age + "</h3>");
    //   $("#well-section").append(
    //     "<h3>Force Points: " + data.forcePoints + "</h3>"
    //   );
    // }
  });
});
