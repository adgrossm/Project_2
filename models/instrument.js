/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const Instrument = sequelize.define(
    "instrument",
    {
      // The email cannot be null, and must be a proper email before creation
      instrument_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  Instrument.associate = models => {
    Instrument.belongsTo(models.artist, {
      foreignKey: "artist_id"
    });
  };

  return Instrument;
};
