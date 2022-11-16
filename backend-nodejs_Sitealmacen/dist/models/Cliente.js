"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Cliente extends sequelize_1.Model {
}
exports.Cliente = Cliente;
Cliente.init({
    nombreCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    direccionCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefonoCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correoCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    passwordCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "clientes",
    sequelize: db_1.database,
    timestamps: true
});
//# sourceMappingURL=Cliente.js.map