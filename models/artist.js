/* eslint-disable camelcase */
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Artist = sequelize.define("artist", {
    // The email cannot be null, and must be a proper email before creation
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Artist.associate = models => {
    Artist.hasMany(models.User, {
      foreignKey: "user_id"
    });
  };

  Artist.associate = models => {
    Artist.hasMany(models.instrument, {
      foreignKey: "instrument_id"
    });
  };

  Artist.associate = models => {
    Artist.hasMany(models.genre, {
      foreignKey: "genre_id"
    });
  };

  return Artist;
};
