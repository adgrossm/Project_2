module.exports = function(sequelize, DataTypes) {
  const Genre = sequelize.define("genre", {
    // The email cannot be null, and must be a proper email before creation
    genre_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Genre.associate = models => {
    Genre.belongsTo(models.Artist, {
      foreignKey: "artist_id"
    });
  };

  return Genre;
};
