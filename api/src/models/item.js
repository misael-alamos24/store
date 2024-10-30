const { DataTypes } = require("sequelize");
// Nombre	Marca	    Categoría	Tipo    	Descripción 	Tamaño	Peso	Costo	Venta	
// Fideos	Lucchetti	Pastas	    Codito		                Normal	500g	1300	1950	

// Cantidad	Fecha 	    Vence	    Lote	Estado	    Valores	    Total (O)
// 1	        17/08/2024	11/07/2025		    En regla	1950	    224700

module.exports= (sequelize)=>{
    sequelize.define("item", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     allowNull: false,
        // },
        Nombre: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Marca: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Categoría: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Tipo: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Descripción: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Tamaño: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Peso: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Costo: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Venta: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Fecha: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Vence: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Lote: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Estado: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Valores: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },{
    timeStamps: false,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  })
}