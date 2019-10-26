'use strict'
const inventario = use('App/Models/Inventario')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inventarios
 */
class InventarioController {
  /**
   * Show a list of all inventarios.
   * GET inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let inventarios = await inventario.query().with('functionProducto').with('functionProvedor').fetch()
    console.log(inventarios.toJSON());
    return response.json(inventarios.toJSON())
  }

  /**
   * Render a form to be used for creating a new inventario.
   * GET inventarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const inv = new inventario()
    inv.fecha = request.input('feha')
    inv.producto_id = request.input('producto_id')
    inv.provedor_id = request.input('provedor_id')
    await inv.save()
    return response.json(inv.toJSON());
  }

  /**
   * Create/save a new inventario.
   * POST inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single inventario.
   * GET inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing inventario.
   * GET inventarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update inventario details.
   * PUT or PATCH inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const inv = await inventario.find(params.id)
    inv.fecha = request.input('feha')
    inv.producto_id = request.input('producto_id')
    inv.provedor_id = request.input('provedor_id')
    await inv.save()
    return response.json(inv.toJSON());
  }

  /**
   * Delete a inventario with id.
   * DELETE inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const inv = await inventario.find(params.id);
    await inv.delete()
  }
}

module.exports = InventarioController
