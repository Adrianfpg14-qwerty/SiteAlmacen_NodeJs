"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const Cliente_1 = require("../models/Cliente");
class ClienteController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Cliente');
            }
            catch (error) {
            }
        });
    }
    getAllCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield Cliente_1.Cliente.findAll({
                    where: { activo: true }
                }); // select * from clientes;
                res.status(200).json({ cliente });
            }
            catch (error) {
            }
        });
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map