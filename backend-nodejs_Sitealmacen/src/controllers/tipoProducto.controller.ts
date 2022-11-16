import { Request, Response } from "express";
import { where } from "sequelize/types";

import { tipoProducto, tipoProductoI } from "../models/TipoProducto";

export class tipoProductoController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para tipoProducto");
    } catch (error) {}
  }

  public async getAlltipoProducto(req: Request, res: Response) {
    try {
      const tipoproducto: tipoProductoI[] = await tipoProducto.findAll(); // select * from tipoProductos;
      res.status(200).json({ tipoproducto });
    } catch (error) {}
  }

  public async createtipoProducto(
    req: Request,

    res: Response
  ) {
    const { nombre } = req.body;

    try {
      let body: tipoProductoI = {
        nombre,
      };

      const tipoproducto: tipoProductoI = await tipoProducto.create({
        ...body,
      });
      res.status(200).json({ tipoproducto });
    } catch (error) {}
  }

  public async getOnetipoProducto(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const tipoproducto: tipoProductoI | null = await tipoProducto.findOne({
        where: {
          id: idParam,
        },
      });
      if (tipoproducto != null) {
        res.status(200).json({ tipoproducto });
      } else return res.status(300).json({ msg: "El tipoProducto no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updatetipoProducto(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, nombre } = req.body;
    try {
      let body: tipoProductoI = {
        nombre,
      };
      const tipoproductoExist: tipoProductoI | null =
        await tipoProducto.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!tipoproductoExist)
        return res.status(500).json({ msg: "El tipoProducto No existe" });
      await tipoProducto.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const tipoproducto: tipoProductoI | null = await tipoProducto.findByPk(pk);
    if (tipoproducto) return res.status(200).json({ tipoproducto });
  }

  public async deletetipoProducto(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const tipoproductoExist: tipoProductoI | null = await tipoProducto.findByPk(
        pk
      );
      if (!tipoproductoExist)
        return res.status(500).json({ msg: "El tipoProducto No existe" });
      await tipoProducto.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "tipoProducto Eliminado" });
    } catch (error) {}
  }
}
