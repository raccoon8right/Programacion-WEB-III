import 'dotenv/config'
import express from 'express'
import categoriaRoutes from './routes/categoriaRoutes.js'

const app = express()
app.use(express.json())

app.use('/categorias', categoriaRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
