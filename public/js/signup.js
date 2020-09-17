/* eslint-disable camelcase */
$(document).ready(() => {
  // Getting references to our form and input
  const signUpBtn = $("#modalSignUp-id");
  const firstNameInput = $("#modalSignUp-id");
  const lastNameInput = $("#modalSignUp-id");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  // const genreInput = $("option#genre-input");
  // const instrumentInput = $("option#instrument-input");
  const genreValue = $("#genre-selection option:selected");
  // would this be changed to option instead of value
  alert(value.text());
  const instrumentValue = $("#myselection option:selected");
  alert(value.text());

  // When the signup button is clicked, we validate the email and password are not blank
  signUpBtn.on("click", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
      // adding the genre, instrument values
    }
    const artistData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      genre_selected: genreValue.val(),
      instrument_selected: instrumentValue.val()
    };
    console.log(artistData);

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(() => {
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
