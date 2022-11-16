import { Request, Response } from "express";
import { where } from "sequelize/types";

import { Venta, VentaI } from "../models/Venta";

export class VentaController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Venta");
    } catch (error) {}
  }

  public async getAllVenta(req: Request, res: Response) {
    try {
      const venta: VentaI[] = await Venta.findAll(); // select * from ventas;
      res.status(200).json({ venta });
    } catch (error) {}
  }

  public async createVenta(
    req: Request,

    res: Response
  ) {
    let { fechaVenta, subTotal, impuesto, descuento, total } = req.body;
    // console.log(req.body + "backend");

    try {
      let body: VentaI = {
        fechaVenta,
        subTotal,
        impuesto,
        descuento,
        total,
      };

      const venta: VentaI = await Venta.create({ ...body });
      res.status(200).json({ venta });
    } catch (error) {
      console.log("no se pudo crear la venta" + error);
    }
  }

  public async getOneVenta(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const venta: VentaI | null = await Venta.findOne({
        where: {
          id: idParam,
        },
      });
      if (venta != null) {
        res.status(200).json(venta);
      } else return res.status(300).json({ msg: "La Venta no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateVenta(req: Request, res: Response) {
    const { id: pk } = req.params;

    const { id, fechaVenta, subTotal, impuesto, descuento, total } = req.body;
    try {
      let body: VentaI = {
        fechaVenta,
        subTotal,
        impuesto,
        descuento,
        total,
      };
      const ventaExist: VentaI | null = await Venta.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!ventaExist)
        return res.status(500).json({ msg: "La Venta No existe" });
      await Venta.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const venta: VentaI | null = await Venta.findByPk(pk);
    if (venta) return res.status(200).json({ venta });
  }

  public async deleteTipoVenta(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const ventaExist: VentaI | null = await Venta.findByPk(pk);
      if (!ventaExist)
        return res.status(500).json({ msg: "La Venta No existe" });
      await Venta.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Venta Eliminada" });
    } catch (error) {}
  }
}
