import * as productsService from '../services/products.service.js';
import { ok, notFound, badRequest, serverError } from '../helpers/controllers.response.js';

// Valida los campos obligatorios del body en POST y PUT. Devuelve array de errores.
// Validaciones: "name" obligatorio, "price obligatorio" y price => 0.
const validateProductBody = ({ name, price }) => {
  const errors = [];
  if (!name || typeof name !== 'string') errors.push('El nombre (name) es obligatorio y debe ser un texto');
  if (price === undefined || price === null) errors.push('El precio (price) es obligatorio');
  else if (typeof price !== 'number' || price < 0) errors.push('El precio (price) debe ser un número mayor o igual a 0');
  return errors;
};

// Obtiene todos los productos (GET /api/products)
export const getProducts = (req, res) =>
  ok(res, productsService.getAllProducts());

// Obtiene un producto por id (GET /api/products/:id)
export const getProductById = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0)
    return badRequest(res, `El id proporcionado (${req.params.id}) no es válido`);

  const product = productsService.getProductById(id);
  // Si no encuentra el producto la respuesta es un error (400), porque no encuentra algo que sí esperaba.
  if (!product) return notFound(res, `No existe ningún producto con id ${id}`);

  ok(res, product);
};

// Crea un producto (POST /api/products)
// Validaciones: "name" obligatorio, "price obligatorio" y price => 0.
export const createProduct = (req, res) => {
  const errors = validateProductBody(req.body);
  if (errors.length) return badRequest(res, 'Datos inválidos', errors);

  const newProduct = productsService.createProduct(req.body);
  res.status(201).json({ ok: true, data: newProduct });
};

// Actualiza un producto (PUT /api/products/:id)
// Validaciones: "name" obligatorio, "price obligatorio" y price => 0.
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0)
    return badRequest(res, `El id proporcionado (${req.params.id}) no es válido`);

  const errors = validateProductBody(req.body);
  if (errors.length) return badRequest(res, 'Datos inválidos', errors);

  const product = productsService.updateProduct(id, req.body);
  if (!product) return notFound(res, `No existe ningún producto con id ${id}`);

  ok(res, product);
};

// Elimina un producto (DELETE /api/products/:id)
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0)
    return badRequest(res, `El id proporcionado (${req.params.id}) no es válido`);

  const product = productsService.deleteProduct(id);
  if (!product) return notFound(res, `No existe ningún producto con id ${id}`);

  ok(res, product);
};
