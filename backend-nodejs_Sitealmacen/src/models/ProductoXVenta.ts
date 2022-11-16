import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

import { Producto } from "./Producto";
import { Venta } from "./Venta";


export class ProductoXVenta extends Model {
  public cantidad!: string;
  public precio!: string;
  public total!: string;

  public producto!: number;
  public venta!: number;
}

export interface ProductoXVentaI {
  cantidad: string;
  precio: string;
  total: string;
}

ProductoXVenta.init(
  {
     cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
     precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
  },
  {
    tableName: "ProductoVentas",
    sequelize: database,
    timestamps: true
  }
);

Venta.belongsToMany(Producto, { through: ProductoXVenta });
Producto.belongsToMany(Venta, { through: ProductoXVenta });