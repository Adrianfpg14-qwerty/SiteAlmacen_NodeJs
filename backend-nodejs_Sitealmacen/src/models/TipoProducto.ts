import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class tipoProducto extends Model {
  public nombre!: string;
}

export interface tipoProductoI {
  nombre: string;
}

tipoProducto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tipoProductos",
    sequelize: database,
    timestamps: true,
  }
);