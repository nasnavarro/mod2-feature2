import * as productsService from '../services/products.service.js';

//Obtiene todos los productos
export const getProducts = (req, res) =>
  res.json({ ok: true, data: productsService.getAllProducts() });

//Obtiene un producto
export const getProduct = (req, res) => {
  const product = productsService.getProductById(req.params.id);
  if (!product) return res.status(404).json({ ok: false, error: `El producto con id ${req.params.id} no existe.` });
  res.json({ ok: true, data: product });
};

//Crea un producto
export const createProduct = (req, res) =>
  res.status(201).json({ ok: true, data: productsService.createProduct(req.body) });

//Actualiza un producto
export const updateProduct = (req, res) => {
  const product = productsService.updateProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ ok: false, error: `El producto con id ${req.params.id} no existe. No puede editarse.` });
  res.json({ ok: true, data: product });
};

//Elimina un producto
export const deleteProduct = (req, res) => {
  const product = productsService.deleteProduct(req.params.id);
  if (!product) return res.status(404).json({ ok: false, error: `El producto con id ${req.params.id} no existe. No puede borrarse.` });
  res.json({ ok: true, data: product });
};
