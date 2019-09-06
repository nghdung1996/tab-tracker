module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    des: DataTypes.STRING,
  })
  return Department
}