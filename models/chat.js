'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adv: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    modelType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    glass: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};