import products from '../db/products.js';

const getNextId = () => {
  const maxId = products.reduce((max, p) => Math.max(max, Number(p.id)), 0);
  return String(maxId + 1);
};

//Obtiene todos los productos.
export const getAllProducts = () => products;

//Obtiene un producto a partir de su id.
export const getProductById = (id) =>
  products.find((p) => p.id === String(id)) ?? null;

//Crea un producto.
export const createProduct = (data) => {
  const newProduct = {
    id: getNextId(),
    ...data,
    createdAt: new Date().toISOString(),
  };
  products.push(newProduct);
  return newProduct;
};

//Actualiza un producto.
export const updateProduct = (id, data) => {
  const index = products.findIndex((p) => p.id === String(id));
  if (index === -1) return null;
  products[index] = { ...products[index], ...data, id: products[index].id };
  return products[index];
};

//Elimina un producto a partir de su id.
export const deleteProduct = (id) => {
  const index = products.findIndex((p) => p.id === String(id));
  if (index === -1) return null;
  const [deleted] = products.splice(index, 1);
  return deleted;
};

