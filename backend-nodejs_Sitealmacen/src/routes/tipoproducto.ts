import { Request, Response, Application, Router } from "express";

import { tipoProductoController } from "../controllers/tipoProducto.controller";

export class tipoProductoRoutes {
  public tipoProductoController: tipoProductoController =
    new tipoProductoController();

  public routes(app: Application): void {
    app.route("/tipoProductos/test").get(this.tipoProductoController.test);
    app.route("/tipoProductos").get(this.tipoProductoController.getAlltipoProducto);
    app.route("/tipoProductos/:id").get(this.tipoProductoController.getOnetipoProducto);
    app.route("/tipoProductos").post(this.tipoProductoController.createtipoProducto);
    app.route("/tipoProductos/:id").put(this.tipoProductoController.updatetipoProducto);
    app.route("/tipoProductos/:id").delete(this.tipoProductoController.deletetipoProducto);
  }
}
