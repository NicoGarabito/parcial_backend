const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para crear un nuevo producto
router.post('/', productoController.createProducto);

// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

// Ruta para obtener un producto por su ID
router.get('/:id', productoController.getProductoById);

// Ruta para actualizar un producto por su ID
router.put('/:id', productoController.updateProducto);

// Ruta para eliminar un producto por su ID
router.delete('/:id', productoController.deleteProducto);

// Ruta para obtener productos ordenados por nombre
router.get('/ordenados/nombre', productoController.getOrdenadosPorNombre);

// Ruta para obtener productos ordenados por precio
router.get('/ordenados/precio', productoController.getOrdenadosPorPrecio);

// Ruta para obtener productos ordenados por cantidad
router.get('/ordenados/cantidad', productoController.getOrdenadosPorCantidad);

/*
quise hacer una ruta para obtener productos filtrados por ciertas cosas, pero no me funciona
// Ruta para obtener productos ordenados por un criterio
router.get('/ordenados', productoController.getOrdenados);

// Ruta para obtener productos filtrados por ciertas condiciones
router.get('/filtrados', productoController.getFiltrados);
*/
module.exports = router;
