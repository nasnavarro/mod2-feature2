import products from "../db/products.js";

//Devuelve un producto a partir de su id.
export const getProductById = (id) => {
    const numId = Number(id);
    if (!Number.isInteger(numId) || numId <= 0) return null;
    return products.find(item => item.id === numId) ?? null;
}