const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (database) => {
  // defino el modelo
  database.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    height: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    /*     ID.*
Imagen.*
Nombre.*
Altura.*
Peso.*
Años de vida.* */
  });
};
