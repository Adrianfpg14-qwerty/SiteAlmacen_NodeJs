import { Request, Response } from "express";

import { Cliente, ClienteI } from "../models/Cliente";

export class ClienteController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Cliente");
    } catch (error) {}
  }

  public async getAllCliente(req: Request, res: Response) {
    try {
      const cliente: ClienteI[] = await Cliente.findAll(); // select * from clientes;
      res.status(200).json({ cliente });
    } catch (error) {}
  }

  public async createCliente(
    req: Request,

    res: Response
  ) {
    const {
      nombreCliente,
      direccionCliente,
      telefonoCliente,
      correoCliente,
      passwordCliente,
    } = req.body;

    try {
      let body: ClienteI = {
        nombreCliente,
        direccionCliente,
        telefonoCliente,
        correoCliente,
        passwordCliente,
      };

      const cliente: ClienteI = await Cliente.create({ ...body });
      res.status(200).json({ cliente });
    } catch (error) {}
  }

  public async getOneCliente(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const cliente: ClienteI | null = await Cliente.findOne({
        where: {
          id: idParam,
        },
      });
      if (cliente != null) {
        res.status(200).json({ cliente });
      } else return res.status(300).json({ msg: "El Cliente no existe" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateCliente(req: Request, res: Response) {
    const { id: pk } = req.params;

    const {
      id,
      nombreCliente,
      direccionCliente,
      telefonoCliente,
      correoCliente,
      passwordCliente,
    } = req.body;
    try {
      let body: ClienteI = {
        nombreCliente,
        direccionCliente,
        telefonoCliente,
        correoCliente,
        passwordCliente,
      };
      const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
      // const userExist: UsuarioI | null = await Usuario.findOne(
      //     {
      //         where: { id: pk}
      //     }
      // );

      if (!clienteExist)
        return res.status(500).json({ msg: "El Cliente No existe" });
      await Cliente.update(body, {
        where: { id: pk },
      }); // select update from usuarios where id=pk
    } catch (error) {}
    const cliente: ClienteI | null = await Cliente.findByPk(pk);
    if (cliente) return res.status(200).json({ cliente });
  }
  public async deleteCliente(req: Request, res: Response) {
    const { id: pk } = req.params;

    try {
      const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
      if (!clienteExist)
        return res.status(500).json({ msg: "El Cliente No existe" });
      await Cliente.destroy({
        where: { id: pk },
      });
      res.status(200).json({ msg: "Cliente Eliminado" });
    } catch (error) {}
  }
}
