'use strict'
const provedor = use('App/Models/Provedor')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proverdors
 */
class ProverdorController {
  /**
   * Show a list of all proverdors.
   * GET proverdors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let prove = await provedor.all()
    return response.json(prove.rows)
  }

  /**
   * Render a form to be used for creating a new proverdor.
   * GET proverdors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const prove = new provedor();
        prove.nombre = request.input('nombre')
        prove.direccion = request.input('direccion')
        prove.telefono = request.input('telefono')
        prove.empresa = request.input('empresa')
        await prove.save()
        return response.json(prove)
  }

  /**
   * Create/save a new proverdor.
   * POST proverdors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single proverdor.
   * GET proverdors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing proverdor.
   * GET proverdors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update proverdor details.
   * PUT or PATCH proverdors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const prove = await provedor.find(params.id)
        prove.nombre = request.input('nombre')
        prove.direccion = request.input('direccion')
        prove.telefono = request.input('telefono')
        prove.empresa = request.input('empresa')
        await prove.save()
        return response.json(prove)
  }

  /**
   * Delete a proverdor with id.
   * DELETE proverdors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const pro = await provedor.find(params.id);
    await pro.delete()
  }
}

module.exports = ProverdorController
