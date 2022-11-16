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
exports.database = void 0;
const Sequelize = require('sequelize');
const DB_NAME = 'almacen2022_mysql_nodejs';
const DB_USER = 'root';
const DB_PASS = 'MiNiCo57**';
exports.database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
function generateDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.database.sync({ force: true });
        console.log('Base de datos y tablas creada');
    });
}
generateDb();
//# sourceMappingURL=db.js.map