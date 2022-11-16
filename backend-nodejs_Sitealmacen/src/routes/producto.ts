import { Request, Response, Application, Router } from "express";

import { ProductoController } from "../controllers/producto.controller";

export class ProductoRoutes {
  public ProductoController: ProductoController = new ProductoController();

  public routes(app: Application): void {
    app.route("/productos/test").get(this.ProductoController.test);
    app.route("/productos").get(this.ProductoController.getAllProductos);
    app.route("/productos/:id").get(this.ProductoController.getOneProducto);
    app.route("/productos").post(this.ProductoController.createProducto);
    app.route("/productos/:id").put(this.ProductoController.updateProducto);
    app.route("/productos/:id").delete(this.ProductoController.deleteProducto);
  }
}
