module.exports = function(sequelize, DataTypes) {
  const Instrument = sequelize.define("Instrument", {
    // The email cannot be null, and must be a proper email before creation
    instrument_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Instrument.associate = models => {
    Instrument.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Instrument;
};
