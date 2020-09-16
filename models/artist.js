// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Artist = sequelize.define("Artist", {
      // The email cannot be null, and must be a proper email before creation
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The password cannot be null
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      user_id: {
        type: 
        
      }
    });