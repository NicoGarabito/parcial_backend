const db = require('../models');
const Producto = db.Producto;

// Controlador para crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un producto por su ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un producto por su ID
exports.updateProducto = async (req, res) => {
  try {
    const [updated] = await Producto.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProducto = await Producto.findByPk(req.params.id);
      res.status(200).json(updatedProducto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un producto por su ID
exports.deleteProducto = async (req, res) => {
  try {
    const deleted = await Producto.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener productos ordenados por nombre
exports.getOrdenadosPorNombre = async (req, res) => {
  try {
    const productos = await Producto.findAll({ order: [['nombre', 'ASC']] });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener productos ordenados por precio
exports.getOrdenadosPorPrecio = async (req, res) => {
  try {
    const productos = await Producto.findAll({ order: [['precio', 'ASC']] });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener productos ordenados por cantidad
exports.getOrdenadosPorCantidad = async (req, res) => {
  try {
    const productos = await Producto.findAll({ order: [['cantidad', 'ASC']] });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 
la idea era que un solo GET de todos los productos ordenados por un criterio, pero no me funciona
//Controlador para obtener productos ordenados por un criterio
exports.getOrdenados = async (req, res) => {
  try {
    const { criterio } = req.query;

    // Verifica si el criterio es válido
    const criteriosValidos = ['nombre', 'precio', 'cantidad'];
    if (!criteriosValidos.includes(criterio)) {
      return res.status(400).json({ message: 'Criterio de ordenación no válido' });
    }

    // Obtén los productos ordenados por el criterio proporcionado
    const productos = await Producto.findAll({ order: [[criterio, 'ASC']] });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener productos filtrados por ciertas condiciones
exports.getFiltrados = async (req, res) => {
  try {
    const { precioMin, categoria } = req.query;
    const where = {};
    if (precioMin) where.precio = { [db.Sequelize.Op.gte]: precioMin };
    if (categoria) where.categoria = categoria;

    const productos = await Producto.findAll({ where });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
