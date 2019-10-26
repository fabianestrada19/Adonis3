'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.date('fecha')
      table.integer('producto_id').unsigned().references('id').inTable('productos').notNullable()
      table.integer('provedor_id').unsigned().references('id').inTable('provedors').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
