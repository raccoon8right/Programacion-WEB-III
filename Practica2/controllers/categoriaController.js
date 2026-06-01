import { agregarCategoria, obtenerCategorias, obtenerCategoriaPorID, modificarCategoriaPorID, eliminarCategoriaPorID } from '../models/categoriaModel.js'

export const postCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body
        const categoria = await agregarCategoria(nombre, descripcion)
        res.status(201).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getCategorias = async (req, res) => {
    try {
        const categorias = await obtenerCategorias()
        res.status(200).json(categorias)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getCategoriaProductosByID = async (req, res) => {
    try {
        const id = req.params.id
        const categoria = await obtenerCategoriaPorID(id)
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' })
        }
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const patchCategoriaByID = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, descripcion } = req.body
        if (!nombre || !descripcion) {
            return res.status(400).json({ error: 'Debes enviar nombre y descripción' });
        }
        const categoria = await modificarCategoriaPorID(id, nombre, descripcion)
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' })
        }
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteCategoriaProductosByID = async (req, res) => {
    try {
        const id = req.params.id
        const result = await eliminarCategoriaPorID(id)
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' })
        }
        res.status(200).json({ message: `Categoría ${id} y sus productos eliminados correctamente` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}