import { postCategoria, getCategorias, getCategoriaProductosByID, patchCategoriaByID, deleteCategoriaProductosByID } from '../controllers/categoriaController.js'
import express from 'express'

const routes = express.Router()

routes.post('/', postCategoria)
routes.get('/', getCategorias)
routes.get('/:id', getCategoriaProductosByID)
routes.patch('/:id', patchCategoriaByID)
routes.delete('/:id', deleteCategoriaProductosByID)

export default routes