/* eslint-disable camelcase */
$(document).ready(() => {
  // Getting references to our form and input
  const signUpBtn = $("#modalSignUp-id");
  const firstNameInput = $("#orangeForm-nameF");
  const lastNameInput = $("#orangeForm-nameL");
  const emailInput = $("#orangeForm-email");
  const passwordInput = $("#orangeForm-pass");
  const loginBtn = $("#modalLogin-id");
  const loginEmailInput = $("#orangeForm-email-login");
  const loginPasswordInput = $("#orangeForm-pass-login");
  // adding the artist_bio input
  const artistBioInput = $("#orangeForm-bio");

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
      genre_value: genre_value.val(),
      instrument_value: instrument_value.val(),
      // adding artist_bio value
      artist_bio: artistBioInput.val()
    };
    if (
      !artistData.email ||
      !artistData.password ||
      !artistData.first_name ||
      !artistData.last_name ||
      !artistData.genre_value ||
      !artistData.instrument_value ||
      !artistData.artist_bio
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
      artistData.instrument_value,
      artistData.artist_bio
    );
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    artistBioInput.val("");
    $("#select-genre-id").prop("selectedIndex", 0);
    $("#select-instrument-id").prop("selectedIndex", 0);
  });

  loginBtn.on("click", event => {
    event.preventDefault();
    const loginData = {
      email: loginEmailInput.val().trim(),
      password: loginPasswordInput.val().trim()
    };
    if (!loginData.email || !loginData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    loginUser(loginData.email, loginData.password);
    emailInput.val("");
    passwordInput.val("");
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    email,
    password,
    first_name,
    last_name,
    genre_value,
    instrument_value,
    artist_bio
  ) {
    $.post("/api/user/signup", {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      genre_value: genre_value,
      instrument_value: instrument_value,
      artist_bio: artist_bio
    })
      .then(() => {
        // console.log(results);
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleSignInErr);
  }

  function handleSignInErr(err) {
    console.log(err);
    // $("#alert .msg").text("User Already Exists, Please Login!");
    $("#email-exist")
      .text("Email: Currently Exists, Please Login!")
      .css("color", "red");
    // $("#alert").fadeIn(500);
  }

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        // console.log(results);
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    console.log(err);
    $("#loginFoot").prepend(
      "<label>Wrong Email or Password...Please try again!</label>"
    );
  }
});
