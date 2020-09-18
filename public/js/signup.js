/* eslint-disable camelcase */
$(document).ready(() => {
  // Getting references to our form and input
  const signUpBtn = $("#modalSignUp-id");
  const firstNameInput = $("#orangeForm-nameF");
  const lastNameInput = $("#orangeForm-nameL");
  const emailInput = $("#orangeForm-email");
  const passwordInput = $("#orangeForm-pass");
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
  // When the signup button is clicked, we validate the email and password are not blank
  signUpBtn.on("click", event => {
    event.preventDefault();
    const genre_value = $("#select-genre-id option:selected");
    const instrument_value = $("#select-instrument-id option:selected");
    const artistData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      genre_value: genre_value.index(),
      instrument_value: instrument_value.index()
    };
    if (
      !artistData.email ||
      !artistData.password ||
      !artistData.first_name ||
      !artistData.last_name ||
      !artistData.genre_value ||
      !artistData.instrument_value
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      artistData.email,
      artistData.password,
      artistData.first_name,
      artistData.last_name,
      artistData.genre_value,
      artistData.instrument_value
    );
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, first_name, last_name, genre_value, instrument_value) {
    $.post("/api/user/signup", {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      genre_value: genre_value,
      instrument_value: instrument_value
    })
      .then(() => {
        // console.log(results);
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
