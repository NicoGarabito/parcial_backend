module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Producto;
  };
  