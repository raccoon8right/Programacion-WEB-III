import { db } from '../config/db.js'

export const agregarCategoria = async (nombre, descripcion) => {
    const [result] = await db.query('INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)', [nombre, descripcion])
    const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [result.insertId])
    return categoria[0]
}

export const obtenerCategorias = async () => {
    const [categorias] = await db.query('SELECT * FROM categorias')
    return categorias
}

export const obtenerCategoriaPorID = async (id) => {
    const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [id])
    if (categoria.length === 0) return null
    const [productos] = await db.query('SELECT * FROM productos WHERE categoria_id = ?', [id])
    return { ...categoria[0], productos }
}

export const modificarCategoriaPorID = async (id, nombre, descripcion) => {
    await db.query('UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id])
    const [result] = await db.query('SELECT * FROM categorias WHERE id = ?', [id])
    return result[0] ?? null
}

export const eliminarCategoriaPorID = async (id) => {
    await db.query('DELETE FROM productos WHERE categoria_id = ?', [id])
    const [result] = await db.query('DELETE FROM categorias WHERE id = ?', [id])
    return result
}