'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {

    functionProducto(){
        return this.belongsTo('App/Models/Producto','producto_id')
    }

    functionProvedor(){
        return this.belongsTo('App/Models/Provedor','provedor_id')
    }
}

module.exports = Inventario
