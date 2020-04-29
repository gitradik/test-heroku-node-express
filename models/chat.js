'use strict';
module.exports = (sequelize, DataTypes) => {
  const chat = sequelize.define('chat', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  chat.associate = function(models) {
    // associations can be defined here
  };
  return chat;
};