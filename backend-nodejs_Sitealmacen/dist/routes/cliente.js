"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const cliente_controller_1 = require("../controllers/cliente.controller");
class ClienteRoutes {
    constructor() {
        this.clienteController = new cliente_controller_1.ClienteController();
    }
    routes(app) {
        app.route("/clientes/test").get(this.clienteController.test);
        app.route("/clientes").get(this.clienteController.getAllCliente);
    }
}
exports.ClienteRoutes = ClienteRoutes;
//# sourceMappingURL=cliente.js.map