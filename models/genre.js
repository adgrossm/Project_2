/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const Genre = sequelize.define(
    "Genre",
    {
      // The email cannot be null, and must be a proper email before creation
      genre_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  Genre.associate = models => {
    Genre.belongsToMany(models.artist, {
      through: "artist_genre"
    });
  };

  return Genre;
};
