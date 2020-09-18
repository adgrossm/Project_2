/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const artist = require("../models/artist");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  app.get("/api/genres", (req, res) => {
    db.genre.findAll().then(result => res.json(result));
  });
  app.get("/api/instruments", (req, res) => {
    db.instrument.findAll().then(result => res.json(result));
  });
  app.get("/api/artists/genre/:id", (req, res) => {
    db.artist.findAll({
      include: [{
        model: db.genre,
        //required creates an inner join...
        required: true,
        //look to the through table where our genreId matches the selected genre for user on front-end
        through: { where: { genreId: req.params.id } }
      }]
    }).then(result => {
      res.json(result);
    });
  });
  app.get("/api/artists/instrument/:id", (req, res) => {
    db.artist.findAll({
      include: [{
        model: db.instrument,
        //required creates an inner join...
        required: true,
        //look to the through table where our genreId matches the selected genre for user on front-end
        through: { where: { instrumentId: req.params.id } }
      }]
    }).then(result => {
      res.json(result);
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/user/signup", (req, res) => {
    db.user.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        return db.artist.create({
          userId: user.id,
          first_name: req.body.first_name,
          last_name: req.body.last_name
        });
      })
      // .then(artist => {
      //   return db.artist.create({
      //     include: [{
      //       model: db.genre,
      //       required: true,
      //       through: {where: {}}
      //     }],
      //     artistId: artist.id,
      //     genreId: req.body.genre_value,
      //     instrument_value: req.body.instrument_value
      //   });
      // })
      .then(() => {
        res.redirect("/members");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};





