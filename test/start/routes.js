'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('productos' , 'ProductoController.index') //Ver
Route.get('productos/delete/:id', 'ProductoController.destroy') //Eliminar
Route.post('productos/modificarProducto/:id','ProductoController.update')
Route.post('productos/crear','ProductoController.create')


//provedor
Route.get('provedores' , 'ProverdorController.index')
Route.get('provedores/delete/:id', 'ProverdorController.destroy')
Route.post('provedores/modificar/:id','ProverdorController.update')
Route.post('provedores/crear','ProverdorController.create')


//Inventario
Route.get('inventario' , 'InventarioController.index')
Route.get('inventario/delete/:id' , 'InventarioController.destroy')
Route.post('inventario/modificar/:id','InventarioController.update')
Route.post('inventario/crear','InventarioController.create')

