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
    Artist.belongsTo(models.user);
    Artist.belongsToMany(models.instrument, {
      through: "artist_instruments"
    });
    Artist.hasMany(models.genre);
  };

  return Artist;
};
