import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Producto, ProductoI } from "../models/Producto";

export class ProductoController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Producto");
    } catch (error) {}
  }

  public async getAllProductos(req: Request, res: Response) {
    try {
      const producto: ProductoI[] = await Producto.findAll(); // select * from productos;
      res.status(200).json({ producto });
    } catch (error) {}
  }

  public async createProducto(
    req: Request,

    res: Response
  ) {
    const { nombre, marca, precio, stockMin, cantidad } = req.body;

    try {
      let body: ProductoI = {
        nombre,
        marca,
        precio,
        stockMin,
        cantidad,
      };

      const producto: ProductoI = await Producto.create({ ...body });
      res.status(200).json({ producto });
    } catch (error) {}
  }

  public async getOneProducto(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const producto: ProductoI | null = await Producto.findOne({
        where: {
          id: idParam,
        },
      });
      if (producto != null) {
        res.status(200).json(producto);
      } else return res.status(300).json({ msg: "El Producto no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateProducto(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, nombre, marca, precio, stockMin, cantidad } = req.body;
    try {
      let body: ProductoI = {
        nombre,
        marca,
        precio,
        stockMin,
        cantidad,
      };
      const productoExist: ProductoI | null = await Producto.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!productoExist)
        return res.status(500).json({ msg: "El Producto No existe" });
      await Producto.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const producto: ProductoI | null = await Producto.findByPk(pk);
    if (producto) return res.status(200).json({ producto });
  }

  public async deleteProducto(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const productoExist: ProductoI | null = await Producto.findByPk(pk);
      if (!productoExist)
        return res.status(500).json({ msg: "El Producto No existe" });
      await Producto.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Producto Eliminado" });
    } catch (error) {}
  }
}
