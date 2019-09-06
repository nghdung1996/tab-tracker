module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    name: DataTypes.STRING,
    des: DataTypes.STRING,
  })
  return Position
}