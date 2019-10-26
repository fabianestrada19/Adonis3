'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('codigo').notNullable()
      table.string('nombre', 50)
      table.float('precio').notNullable()
      table.integer('cantidad').notNullable()
      table.string('marca',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
